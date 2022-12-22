import styled from "styled-components";

export const CheckButton = styled.button<{
  color: string;
  weight: string;
  height: string;
}>`
  width: ${(props) => props.weight}px; // 60
  height: ${(props) => props.height}px; // 50
  margin-left: 20px;
  border-style: none;
  color: #fff;
  background: #${(props) => props.color}; // f4cacc
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
`;
