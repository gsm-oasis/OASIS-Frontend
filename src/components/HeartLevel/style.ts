import styled from "styled-components";

export const Box = styled.div`
  width: 375px;
  height: 250px;
  background: #fff;
  box-shadow: 0px 4px 20px rgba(168, 168, 168, 0.25);
  border-radius: 18px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  color: #5f5f5f;
  font-weight: 600;
  font-size: 16px;
  margin-top: 50px;
`;

export const HeartAndProgress = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 50px;
  position: relative;
`;

export const Heart = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LevelText = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0px 0px 3px rgba(146, 146, 146, 0.25);
  position: absolute;
  margin-top: -3px;
`;

export const HeartProgress = styled.progress<{ valueColor: string }>`
  width: 220px;
  height: 15px;
  margin-left: 30px;
  appearance: none;

  ::-webkit-progress-bar {
    background-color: #fafafa;
    border-radius: 18px;
    border: 0.4px solid #ebebeb;
  }

  ::-webkit-progress-value {
    border-radius: 18px;
    background: ${(props) => props.valueColor};
  }
`;
