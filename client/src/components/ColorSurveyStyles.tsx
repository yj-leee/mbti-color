import styled from "styled-components";

export const StyledColorSurvey = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 48px;
  border-radius: 8px;
  cursor: pointer;
  color: #bfc8da;

  &:hover {
    background-color: #f4f7fb;
  }
`;

export const Id = styled.div`
  flex-shrink: 0;
  width: 58px;
  margin-right: 40px;
`;

export const Mbti = styled.div`
  flex-shrink: 0;
  width: 76px;
  margin-right: 25px;
  padding: 8px;
  border-radius: 8px;
  background-color: #f0f2f5;
  color: #464e5e;
  text-align: center;
  font-weight: 600;
`;

export const Arrow = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 0px;
  border-bottom: 2px dashed #bfc8da;
  position: relative;
`;

export const ArrowIcon = styled.img`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 8px;
  height: 13px;
`;

export const ColorChip = styled.div`
  flex-shrink: 0;
  margin: 0 16px;
  width: 40px;
  height: 40px;
  border: 3px solid #e8e8e8;
  border-radius: 8px;
`;

export const ColorCode = styled.div`
  flex-shrink: 0;
  width: 105px;
`;
