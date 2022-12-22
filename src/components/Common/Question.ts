import styled from "styled-components";

export const Question = styled.div`
  width: 375px;
  margin-top: 50px;
  background: #ffffff;
  box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.25);
  border-radius: 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const QuestionNumBox = styled.div`
  margin-top: 30px;
  width: 140px;
  height: 35px;
  text-align: center;
  background: #f8d6d6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
`;

export const QuestionNum = styled.div`
  font-size: 14px;
  color: #ffff;
  text-shadow: 0px 0px 4px rgba(79, 79, 79, 0.25);
`;

export const QuestionText = styled.div`
  margin-top: 15px;
  color: #5f5f5f;
  font-size: 18px;
  font-weight: 600;
`;

export const QuestionDescription = styled.div`
  margin-top: 5px;
  margin-bottom: 40px;
  font-size: 12px;
  color: #828282;
`;
