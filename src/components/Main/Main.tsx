import React, { useEffect, useState } from "react";
import {
  BlankHeart,
  Heart,
  Mail,
  Plus,
  RedHeart,
  SettingIcon,
} from "../../assets/svg";
import TokenService from "../../lib/TokenService";
import { Setting } from "../Common/Frame";
import * as S from "./style";
import main from "../../api/Main";
import Question from "./Question";
import DiaryList from "../Common/Diary/Diary";
import { DiaryContent, DiaryProps } from "../../interfaces/MainInterface";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { nickNameAtom } from "../../atoms/AtomContainer";

const defaultProps: DiaryProps = {
  nickname: "",
  coupleNickname: "",
  heartLevel: 0,
  datingDate: 0,
  anniversary: 0,
  questionId: 0,
  content: "",
  diaryListPageResponse: [],
};

function Main() {
  const [mainContent, setContent] = useState<DiaryProps>(defaultProps);
  const navigate = useNavigate();
  const [, setName] = useRecoilState(nickNameAtom);
  const [hoverState, setHover] = useState(false);

  const PostMain = async () => {
    try {
      const response: any = await main.postMain(
        TokenService.getLocalAccessToken()
      );
      setContent(response.data);
      setName(response.data.nickname);
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
              <S.IconBox onClick={() => navigate("/questionList")}>
                <Mail />
              </S.IconBox>
              <S.IconBox
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() =>
                  navigate("/heartLevel", {
                    state: {
                      level: mainContent?.heartLevel,
                      days: mainContent?.datingDate,
                    },
                  })
                }
              >
                {!hoverState && <BlankHeart />}
                {hoverState && <RedHeart />}
              </S.IconBox>
              <S.IconBox onClick={() => navigate("/setting")}>
                <SettingIcon />
              </S.IconBox>
            </S.RightBox>
          </S.Top>
          <div
            onClick={() =>
              navigate("/questionComment", {
                state: {
                  Id: mainContent?.questionId,
                  content: mainContent?.content,
                },
              })
            }
          >
            <Question
              questionNum={mainContent?.questionId}
              content={mainContent?.content}
              description="질문을 클릭해서 답변을 남겨보세요!"
            />
          </div>

          <S.Line />
          <S.DiaryFrame>
            <S.DiaryTitleFrame>
              <S.DTitle onClick={() => navigate("/diaryList")}>
                공유일기
              </S.DTitle>
              <div onClick={() => navigate("/createDiary")}>
                <Plus />
              </div>
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
