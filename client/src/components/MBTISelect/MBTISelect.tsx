import { MBTIOptionGroup } from "./MBTIOptionGroup";

interface MBTI {
  value: string;
  label: string;
}

const optionGroups: MBTI[][] = [
  [
    { value: "E", label: "외향형" },
    { value: "I", label: "내향형" },
  ],
  [
    { value: "S", label: "감각형" },
    { value: "N", label: "직관형" },
  ],
  [
    { value: "T", label: "사고형" },
    { value: "F", label: "감정형" },
  ],
  [
    { value: "J", label: "판단형" },
    { value: "P", label: "인식형" },
  ],
];

interface MBTISelectProps {
  value?: string;
  onChange(newMbti: string): void;
}

function MBTISelect({
  value = "ESTJ",
  onChange,
}: MBTISelectProps): JSX.Element {
  function handleChangeAt(val: string, position: number): void {
    const nextValue =
      value.slice(0, position) + val + value.slice(position + 1);
    onChange(nextValue);
  }

  return (
    <div>
      {optionGroups.map((optionGroup, index) => (
        <MBTIOptionGroup
          key={`${optionGroup[0].value}-${optionGroup[1].value}`}
          options={optionGroup}
          value={value[index]}
          onChange={(val) => handleChangeAt(val, index)}
        />
      ))}
    </div>
  );
}
export default MBTISelect;
