import styled from "styled-components";

export const QuestionBox = styled.div`
  width: 375px;
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.25);
  border-radius: 18px;
  margin-top: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.43);
  }
`;

export const IdCircle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #f8d6d6;
  margin-left: 25px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
`;

export const Text = styled.div`
  font-size: 14px;
  color: #5f5f5f;
  font-weight: 600;
  margin-left: 25px;
`;
