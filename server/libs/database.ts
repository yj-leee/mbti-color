import { Module } from '@nestjs/common';
import { ColorSurveyEntity } from 'src/entities/color-survey';
import { DataSource } from 'typeorm';

let queryRunner;
let transactionDepth = 0;

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: 3306,
        username: 'root',
        password: 'test',
        database: 'ColorSurvey',
        synchronize: true,
        entities: [ColorSurveyEntity],
      });
      queryRunner = dataSource.createQueryRunner();
      return dataSource.initialize();
    },
  },
];

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

function transactionIsActivated(): boolean {
  return queryRunner.isTransactionActive;
}

function transactionCanBeStarted(): boolean {
  return !queryRunner.isTransactionActive && transactionDepth === 0;
}

function transactionCanBeTerminated(): boolean {
  return queryRunner.isTransactionActive && transactionDepth === 0;
}

function transactionIsNested(): boolean {
  return queryRunner.isTransactionActive && 0 < transactionDepth;
}

export function Transactional() {
  return function (
    target: object,
    key: string,
    descriptor: PropertyDescriptor,
  ): void {
    const originalMethod = descriptor.value as (...args) => Promise<unknown>;

    descriptor.value = new Proxy(originalMethod, {
      apply: async (proxyTarget, thisArg, args) => {
        if (transactionIsActivated()) transactionDepth += 1;
        if (transactionCanBeStarted()) await queryRunner.startTransaction();

        try {
          const result = await proxyTarget.apply(thisArg, args);

          if (transactionCanBeTerminated())
            await queryRunner.commitTransaction();
          if (transactionIsNested()) transactionDepth -= 1;

          return result;
        } catch (error) {
          if (transactionCanBeTerminated())
            await queryRunner.rollbackTransaction();

          if (transactionIsNested()) transactionDepth -= 1;

          throw error;
        }
      },
    });
  };
}
