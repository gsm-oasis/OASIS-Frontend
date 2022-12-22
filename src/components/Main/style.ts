import styled from "styled-components";

export const MainFrame = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Top = styled.div`
  width: 375px;
  display: flex;
  margin-top: 80px;
  justify-content: space-between;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoupleName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #6f6f6f;
`;

export const DateDays = styled.div`
  margin-top: 2px;
  font-size: 24px;
  font-weight: 700;
  color: #7b7b7b;
`;

export const ToAnniversary = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #959595;
`;

export const RightBox = styled.div`
  display: flex;
  width: 45px;
  justify-content: space-between;
`;

export const Line = styled.div`
  width: 375px;
  height: 1px;
  background: #eeeeee;
  margin-top: 50px;
`;

export const DiaryFrame = styled.div`
  width: 375px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
`;

export const DiaryTitleFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DTitle = styled.div`
  font-size: 20px;
  color: #7b7b7b;
  font-weight: 700;
`;
