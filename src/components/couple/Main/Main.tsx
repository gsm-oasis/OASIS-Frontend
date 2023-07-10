import { useEffect, useState } from "react";
import {
  BlankHeart,
  Plus,
  RedHeart,
  SettingIcon,
  Mail,
} from "../../../assets/svg";
import TokenService from "../../../lib/TokenService";
import { Setting } from "../../Common/Frame";
import * as S from "./style";
import main from "../../../api/Main";
import Question from "./Question";
import DiaryList from "../../Common/Diary/Diary";
import { DiaryContent, DiaryProps } from "../../../interfaces/MainInterface";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { nickNameAtom } from "../../../atoms/AtomContainer";
import { ReactComponent as Hearts } from "../../../assets/svg/Hearts.svg";
import { ColorMail } from "../../../assets/svg/Mail";
import { Calender, ColorCalender } from "../../../assets/svg/calender";

const defaultProps: DiaryProps = {
  nickname: "",
  coupleNickname: "",
  heartLevel: 0,
  datingDate: 0,
  daysLeft: 0,
  anniversary: 0,
  questionId: 0,
  content: "",
  diaries: [],
};

function Main() {
  const [mainContent, setContent] = useState<DiaryProps>(defaultProps);
  const navigate = useNavigate();
  const [, setName] = useRecoilState(nickNameAtom);
  const [hoverState, setHover] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);
  const [hoverCalender, setHoverCalender] = useState(false);

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
                <Hearts
                  fill={getHeartColor(mainContent?.heartLevel)}
                  width="20px"
                  height="20px"
                />
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
              <S.IconBox
                onMouseOver={() => setHoverCalender(true)}
                onMouseLeave={() => setHoverCalender(false)}
                onClick={() => navigate("/calendarList")}
              >
                {!hoverCalender ? <Calender /> : <ColorCalender />}
              </S.IconBox>
              <S.IconBox
                onMouseOver={() => setHoverMail(true)}
                onMouseLeave={() => setHoverMail(false)}
                onClick={() => navigate("/questionList")}
              >
                {!hoverMail && <Mail />}
                {hoverMail && <ColorMail />}
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
            style={{ cursor: "pointer" }}
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
              {mainContent?.diaries &&
                mainContent.diaries.map((diary: DiaryContent) => (
                  <div key={diary.diaryId} style={{ cursor: "pointer" }}>
                    <DiaryList DiaryProps={diary} />
                  </div>
                ))}
            </S.DiaryWrapper>
          </S.DiaryFrame>
        </S.MainFrame>
      </Setting>
    </>
  );
}

export default Main;
