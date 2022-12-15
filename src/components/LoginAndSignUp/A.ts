import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-family: JaldiBold;
  line-height: 51px;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #7b7b7b;
`;

export const Description = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-size: 14px;
  font-weight: 400;
  color: #959595;
`;

export const InputBox = styled.div`
  margin-top: 70px;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border-style: none;
  width: 280px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 0px 20px;
  font-size: 12px;
  color: #8d8d8d;
  line-height: 13px;

  &:nth-child(2) {
    margin-top: 20px;
  }

  &:nth-child(3) {
    margin-top: 20px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 125px;
  font-size: 12px;
  margin-top: 10px;
  color: #959595;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const InputAndButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const BottomTextBox = styled.div`
  margin-top: 100px;
  font-size: 12px;
`;

export const BottomText = styled.span<{ color: string; weight: string }>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};

  &:nth-child(2) {
    cursor: pointer;
  }
`;
