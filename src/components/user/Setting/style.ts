import styled from "styled-components";

export const ButtonBox = styled.div`
  width: 375px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 120px;
  margin-bottom: 120px;
`;

export const Button = styled.div`
  width: 325px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(168, 168, 168, 0.25);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  cursor: pointer;
`;

export const Text = styled.div`
  font-size: 14px;
  color: #414141;
  font-weight: 700;
`;

export const MyCode = styled.div`
  font-size: 12px;
  color: #a9a9a9;
`;

export const ColorButton = styled.div<{ color: string }>`
  width: 375px;
  height: 50px;
  background: ${(props) => props.color};
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(168, 168, 168, 0.25);
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Version = styled.div`
  margin-top: 30px;
  color: #737373;
  font-weight: 600;
`;
