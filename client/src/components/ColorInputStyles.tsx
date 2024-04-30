import styled from "styled-components";

export const StyledColorInput = styled.div<{ colorCode: string }>`
  position: relative;

  input {
    color: #8892a6;
    font-size: 24px;
    width: 100%;
    border: 2px solid #e7ebf2;
    border-radius: 16px;
    outline: none;
    padding: 26px;

    &:hover {
      background: #f5f7fb;
    }

    &:focus {
      border: 2px solid #464e5e;
      box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.15);
    }
  }

  span {
    position: absolute;
    top: 21px;
    right: 26px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    ${({ colorCode }) => colorCode && `background-color: ${colorCode};`}
  }
`;
