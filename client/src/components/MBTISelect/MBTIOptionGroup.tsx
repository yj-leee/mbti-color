import { MBTIOption } from "./MBTIOption";
import { StyledOptionGroup } from "./MBTIOptionGroupStyles";

interface MBTI {
  value: string;
  label: string;
}

interface MBTIOptionGroupProps {
  options: MBTI[];
  value: string;
  onChange(val: string): void;
}

export function MBTIOptionGroup({
  options,
  value,
  onChange,
}: MBTIOptionGroupProps): JSX.Element {
  return (
    <StyledOptionGroup>
      {options.map(
        (option: MBTI): JSX.Element => (
          <MBTIOption
            key={option.value}
            selected={option.value === value}
            label={option.label}
            value={option.value}
            onClick={() => onChange(option.value)}
          />
        )
      )}
    </StyledOptionGroup>
  );
}
