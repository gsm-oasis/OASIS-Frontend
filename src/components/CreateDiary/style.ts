import styled from "styled-components";

export const PutImage = styled.input`
  display: none;
`;

export const DeleteImage = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  margin: 10px 0 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: 24px;
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
  margin-left: 21px;
  width: 250px;
  height: 22px;
  border-style: none;
  padding: 3px 6px;
  border-radius: 10px;
  &:focus {
    background: #eeeeee;
    outline: 0px solid #999999;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 325px;
  min-height: 100px;
  color: #555555;
  font-weight: 600;
  font-size: 12px;
  border: none;
  margin: 6px 21px 25px 21px;
  border-radius: 10px;
  padding: 6px;
  &::placeholder {
    color: #b9b9b9;
    font-weight: 600;
    font-size: 12px;
  }
  &:focus {
    background: #eeeeee;
    outline: 0px solid #999999;
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
  cursor: pointer;
  background: #fafafa;
  border: 0.4px solid #e4e4e4;
  color: #969696;
`;

export const MoodCircle = styled.input<{ color: string }>`
  display: none;

  &:checked + ${MoodButton} {
    background: ${(props) => props.color};
    color: white;
    border: none;
  }
`;

export const IsWroteDiary = styled.div`
  margin-top: 50px;
  width: 375px;
  height: 110px;
  border-radius: 20px;
  border: 0.5px solid #e8e8e8;
  box-shadow: 0 4px 20px #ededed;

  h3 {
    color: #646464;
    font-size: 15px;
    margin-top: 30px;
    margin-bottom: -6px;
  }
  p {
    color: #959595;
    font-size: 13.4px;
  }
`;
