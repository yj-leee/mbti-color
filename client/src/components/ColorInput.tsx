import { ChangeEvent } from "react";
import { StyledColorInput } from "./ColorInputStyles";

interface Props {
  colorCode: string;
  onChange: (newColor: string) => void;
}

function ColorInput({ colorCode, onChange }: Props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  function handleColorCodeBlur(): void {
    const isValidColorCode: boolean = /^#[a-f0-9]{6}$/i.test(colorCode);
    if (!isValidColorCode) {
      onChange("#000000");
    }
  }

  return (
    <StyledColorInput colorCode={colorCode}>
      <input
        value={colorCode}
        onBlur={handleColorCodeBlur}
        onChange={handleChange}
      />
      <span></span>
    </StyledColorInput>
  );
}
export default ColorInput;
