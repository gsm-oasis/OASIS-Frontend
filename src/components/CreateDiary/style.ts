import styled from "styled-components";

export const PutImage = styled.input`
  width: 180px;
  height: 230px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(168, 168, 168, 0.27);
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 40px;
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
