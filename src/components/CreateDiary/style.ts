import styled from "styled-components";

export const PutImage = styled.input`
  display: none;
`;

export const PutImageLabel = styled.label`
  width: 60px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(168, 168, 168, 0.27);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  //margin-top: 40px;
`;

export const Description = styled.div`
  margin-top: 18px;
  font-size: 12px;
  color: #939393;
`;

export const TextBox = styled.div`
  margin-top: 25px;
  width: 375px;
  box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
`;

export const TitleText = styled.input`
  color: #808080;
  font-weight: 700;
  font-size: 15px;
  margin-top: 25px;
  margin-left: 25px;
  width: 250px;
  height: 22px;
  border-style: none;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 325px;
  min-height: 100px;
  color: #b9b9b9;
  font-weight: 600;
  font-size: 13px;
  border: none;
  margin: 10px 25px 25px 25px;

  &::placeholder {
    color: #b9b9b9;
    font-weight: 600;
    font-size: 13px;
  }
`;

export const MoodDesc = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  color: #808080;
  font-size: 14px;
`;

export const MoodSelectBox = styled.div`
  margin-top: 25px;
  width: 375px;
  height: 120px;
  box-shadow: 0px 0px 18px rgba(169, 169, 169, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const MoodCircleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  margin-left: 15px;
  height: 100px;
`;

export const MoodButton = styled.label`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;

  background: #fafafa;
  border: 0.4px solid #e4e4e4;
  color: #969696;
`;

export const MoodCircle = styled.input`
  display: none;

  &:checked + ${MoodButton} {
    background: #f5cacb;
    color: white;
    border: none;
  }
`;
