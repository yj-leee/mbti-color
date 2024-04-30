import { StyledMBTIOption } from "./MBTIOptionStyles";

interface MBTIOptionProps {
  selected: boolean;
  label: string;
  value: string;
  onClick: () => void;
}

export function MBTIOption({
  selected,
  label,
  value,
  onClick,
}: MBTIOptionProps): JSX.Element {
  return (
    <StyledMBTIOption selected={selected} onClick={onClick}>
      <span>{value}</span>
      {label}
    </StyledMBTIOption>
  );
}
