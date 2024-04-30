import styled from "styled-components";

export const StyledMBTIOption = styled.div<{
  selected: boolean;
}>`
  flex-grow: 1;
  border-radius: 16px;
  padding: 14px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  color: #8892a6;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  background: ${(props) => (props.selected ? "#464e5e" : "#ffffff")};
  border: ${(props) =>
    props.selected ? "2px solid #464e5e" : "2px solid #e7ebf2"};

  span {
    width: 20px;
    text-align: center;
    font-size: 40px;
    color: ${(props) => (props.selected ? "#ffffff" : "#464e5e")};
  }

  &:hover {
    background: ${(props) => (props.selected ? "#464e5e" : "#f5f7fb")};
    cursor: pointer;
  }
`;
