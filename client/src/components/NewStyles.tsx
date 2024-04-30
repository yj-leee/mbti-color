import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./ButtonStyles";

export const Container = styled.div`
  width: 416px;
  margin: 80px auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderHeading = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background: #f5f7fb;
  border-radius: 50%;

  &:hover {
    background-color: #edf0f5;
  }

  &:active {
    background-color: #dee4ee;
  }
`;

export const CancelIcon = styled.img`
  width: 12px;
  height: 12px;
`;

export const Section = styled.section`
  margin: 56px 0;
`;

export const SectionHeading = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin: 24px 0;
`;

export const RandomButton = styled.button`
  background: #f5f7fb;
  border-radius: 8px;
  padding: 8px;
  margin-left: 8px;
  border: none;

  &:hover {
    background-color: #edf0f5;
  }

  &:active {
    background-color: #dee4ee;
  }
`;

export const RepeatIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;
