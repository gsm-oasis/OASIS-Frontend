import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import * as I from "../../assets/svg";
import * as S from "./style";
import { ReactComponent as Hearts } from "../../assets/svg/Hearts.svg";
import Heart from "../../api/Heart";
function HeartLevel() {
  const location = useLocation();
  const navigate = useNavigate();
  const [heartColor, setHeartColor] = useState<string | undefined>("#F2C0C0");
  const [heartLevel] = useState<number>(location.state.level);
  const [currentBar, setCurrentBar] = useState<number>(0);
  const [maxBar, setMaxBar] = useState<number>(0);
  const [days, setDays] = useState<number>(location.state.days);

  const getHeartColor = (heartLevel: number) => {
    switch (heartLevel) {
      case 1:
        return "#F2C0C0";
      case 2:
        return "#F2D2C0";
      case 3:
        return "#F2E4C0";
      case 4:
        return "#E5F2C0";
    }
  };

  const getHeartLevel = async () => {
    try {
      const response: any = await Heart.getHeartLevel();
      console.log(response.data);
      setCurrentBar(response.data.levelBar);
      setMaxBar(response.data.max);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setHeartColor(() => getHeartColor(heartLevel));
    if (days > 100) {
      setDays(days % (100 * heartLevel));
    }
    getHeartLevel();
  });

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/")}>
              <I.Back />
            </div>
            <TitleText>하트</TitleText>
            <EmptyCompo />
          </Title>
          <S.Box>
            <S.Text>현재 회원님의 하트 레벨은 {heartLevel}입니다.</S.Text>
            <S.HeartAndProgress>
              <S.Heart>
                <Hearts fill={heartColor}></Hearts>
                <S.LevelText>Lv.{heartLevel}</S.LevelText>
              </S.Heart>
              <S.HeartProgress
                value={currentBar}
                max={maxBar}
                valueColor={heartColor!}
              />
            </S.HeartAndProgress>
          </S.Box>
        </Frame>
      </Setting>
    </>
  );
}

export default HeartLevel;
