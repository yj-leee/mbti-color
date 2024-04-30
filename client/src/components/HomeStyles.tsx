import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 80px auto;
  max-width: 865px;
  width: 100%;
  gap: 40px;
`;

export const Header = styled.header`
  position: sticky;
  top: 80px;
  padding: 80px 40px;
  border-radius: 80px;
  background-color: #f5f7fb;
  color: #464e5e;
  text-align: right;
`;

export const Heading = styled.h1`
  margin: 0 0 32px;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
`;

export const Accent = styled.span`
  font-weight: 800;
`;

export const Filter = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
  padding: 8px 24px;
  font-weight: 500;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  cursor: pointer;
`;

export const RemoveIcon = styled.img`
  display: block;
  width: 12px;
  height: 12px;
`;

export const Content = styled.main`
  flex-grow: 1;
`;

export const AddItem = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 24px 48px;
  color: #464e5e;
  border: 2px dashed #dee3ec;
  border-radius: 8px;

  &:hover {
    background-color: #f5f7fb;
  }
`;

export const Items = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
