import {
  Arrow,
  ArrowIcon,
  ColorChip,
  ColorCode,
  Id,
  Mbti,
  StyledColorSurvey,
} from "./ColorSurveyStyles";
import { Item } from "./Home";

interface Props {
  value: Item;
  onClick: () => void;
}
export function ColorSurvey({ value, onClick }: Props): JSX.Element {
  return (
    <StyledColorSurvey onClick={onClick}>
      <Id>{value.id}</Id>
      <Mbti>{value.mbti}</Mbti>
      <Arrow>
        <ArrowIcon src="/images/arrow.svg" alt="arrow" />
      </Arrow>
      <ColorChip style={{ backgroundColor: value.colorCode }}></ColorChip>
      <ColorCode>{value.colorCode}</ColorCode>
    </StyledColorSurvey>
  );
}
