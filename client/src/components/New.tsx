import MBTISelect from "./MBTISelect/MBTISelect";
import { useState } from "react";
import generateColorCode from "../lib/generateColorCode";
import ColorInput from "./ColorInput";
import {
  StyledLink,
  CancelIcon,
  Container,
  Header,
  HeaderHeading,
  RandomButton,
  RepeatIcon,
  Section,
  SectionHeading,
  SubmitButton,
} from "./NewStyles";
import axios from "../lib/axios";
import { useNavigate } from "react-router-dom";

interface Props {
  mbti: string;
  colorCode: string;
}

function New(): JSX.Element {
  const [formValue, setFormValue] = useState<Props>({
    mbti: "ESTJ",
    colorCode: "#000000",
  });
  const navigate = useNavigate();

  function handleChange(name: string, value: string): void {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  }

  function handleRandomClick(): void {
    const nextColorCode: string = generateColorCode();
    handleChange("colorCode", nextColorCode);
  }

  async function handleSubmit() {
    await axios.post("color-surveys/", {
      ...formValue,
      password: "0000",
    });
    navigate("/");
  }
  return (
    <Container>
      <Header>
        <HeaderHeading>새 컬러 등록하기</HeaderHeading>
        <StyledLink to="/">
          <CancelIcon src="/images/x.svg" alt="취소" />
        </StyledLink>
      </Header>
      <Section>
        <SectionHeading>MBTI</SectionHeading>
        <MBTISelect
          value={formValue.mbti}
          onChange={(newMbti: string) => handleChange("mbti", newMbti)}
        />
      </Section>
      <Section>
        <SectionHeading>
          컬러
          <RandomButton onClick={handleRandomClick}>
            <RepeatIcon src="/images/repeat.svg" alt="랜덤" />
          </RandomButton>
        </SectionHeading>
        <ColorInput
          colorCode={formValue.colorCode}
          onChange={(newColor) => handleChange("colorCode", newColor)}
        />
      </Section>
      <SubmitButton onClick={handleSubmit}>컬러 등록</SubmitButton>
    </Container>
  );
}
export default New;
