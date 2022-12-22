import React, { useEffect, useState } from "react";
import {
  BlankHeart,
  Heart,
  Plus,
  RedHeart,
  SettingIcon,
} from "../../assets/svg";
import TokenService from "../../lib/TokenService";
import { Setting } from "../Common/Frame";
import * as S from "./style";
import main from "../../api/Main";
import Question from "./Question";
import DiaryList from "./Diary/Diary";
import { DiaryContent, DiaryProps } from "../../interfaces/MainInterface";

function Main() {
  const [mainContent, setContent] = useState<DiaryProps>();
  const [hoverState, setHover] = useState(false);

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

  return (
    <>
      <Setting>
        <S.MainFrame>
          <S.Top>
            <S.LeftBox>
              <S.CoupleName>
                <div>{mainContent?.coupleNickname}</div>
                <Heart />
                <div>{mainContent?.nickname}</div>
              </S.CoupleName>
              <S.DateDays>{mainContent?.datingDate} DAYS</S.DateDays>
              <S.ToAnniversary>
                {mainContent?.anniversary}일만큼
                {mainContent?.anniversary &&
                  mainContent.anniversary - mainContent.datingDate}
                일 남았어요!
              </S.ToAnniversary>
            </S.LeftBox>
            <S.RightBox>
              <div
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ cursor: "pointer" }}
              >
                {!hoverState && <BlankHeart />}
                {hoverState && <RedHeart />}
              </div>
              <SettingIcon />
            </S.RightBox>
          </S.Top>

          <Question
            questionNum={mainContent?.questionId}
            content={mainContent?.content}
          />

          <S.Line />

          <S.DiaryFrame>
            <S.DiaryTitleFrame>
              <S.DTitle>공유일기</S.DTitle>
              <Plus />
            </S.DiaryTitleFrame>
            <S.DiaryWrapper>
              {mainContent?.diaryListPageResponse &&
                mainContent.diaryListPageResponse.map((diary: DiaryContent) => (
                  <DiaryList key={diary.diaryId} DiaryProps={diary} />
                  // 지금 더미데이터가 1개라 key 1로 해도 오류안남 고쳐야됨
                ))}
            </S.DiaryWrapper>
          </S.DiaryFrame>
        </S.MainFrame>
      </Setting>
    </>
  );
}

export default Main;
