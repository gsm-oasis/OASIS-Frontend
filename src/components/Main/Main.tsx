import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { BlankHeart, Heart, SettingIcon } from "../../assets/svg";
import TokenService from "../../lib/TokenService";
import { Setting } from "../Common/Frame";
import * as S from "./style";
import main from "../../api/Main";
import Question from "./Question";
import DiaryList from "./Diary";
import { DiaryProps } from "../../interfaces/MainInterface";

function Main() {
  const [mainContent, setContent] = useState<DiaryProps>();

  const PostMain = async () => {
    try {
      const response: any = await main.postMain(
        TokenService.getLocalAccessToken()
      );
      setContent(response.data);
      console.log(response.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    PostMain();
  }, []);

  // mainContent?하면 됨 근데 렌더링할 때 mainContent에 값이 없는 상황이면 Uncaught TypeError: Cannot read properties of undefined (reading 'map')

  return (
    <>
      <Setting>
        <S.MainFrame>
          <S.Top>
            <S.LeftBox>
              <S.CoupleName>
                <div>{mainContent.coupleNickname}</div>
                <Heart />
                <div>{mainContent.nickname}</div>
              </S.CoupleName>
              <S.DateDays>{mainContent.datingDate} DAYS</S.DateDays>
              <S.ToAnniversary>
                {mainContent.anniversary}일만큼
                {mainContent.anniversary - mainContent.datingDate}일 남았어요!
              </S.ToAnniversary>
            </S.LeftBox>
            <S.RightBox>
              <BlankHeart />
              <SettingIcon />
            </S.RightBox>
          </S.Top>
          <Question
            questionNum={mainContent.questionId}
            content={mainContent.content}
          />
          <S.Line />
          {mainContent.diarys.map((diary) => (
            <DiaryList DiaryProps={diary} />
          ))}
        </S.MainFrame>
      </Setting>
    </>
  );
}

export default Main;
