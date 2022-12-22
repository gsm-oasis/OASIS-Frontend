import styled from "styled-components";

export const DiaryBox = styled.div`
  width: 375px;
  height: 120px;
  margin-top: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(168, 168, 168, 0.25);
  border-radius: 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DiaryTextFrame = styled.div`
  width: 300px;
  margin-top: 20px;
`;

export const DiaryTitleFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DiaryTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const DiaryDate = styled.div`
  font-size: 10px;
`;

export const DiaryBody = styled.div`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  font-size: 11px;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CreatePersonWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #5e5e5e;
  font-weight: 600;
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #bbd1e4;
  margin-right: 5px;
`;
