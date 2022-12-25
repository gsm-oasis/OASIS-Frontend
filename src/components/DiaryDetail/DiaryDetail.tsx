import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { DiaryContentAtom } from "../../atoms/AtomContainer";
import { Frame, Setting } from "../Common/Frame";
import { Back } from "../../assets/svg/Back";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import moodColor from "../../utils/moodColor";

function DiaryDetail(): JSX.Element {
  const navigate = useNavigate();
  const [diaryContent, setDiaryContent] = useRecoilState(DiaryContentAtom);
  const [numbr, setNumbr] = useState<number[]>([1, 2, 3, 4]);
  const [userMood, setMood] = useState("");

  useEffect(() => {
    // 여기서 서버에서 받은 mood에 따라 rbg설정 ((((필요없을수도있음))))
    setMood(moodColor(diaryContent.mood));
  }, []);

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/")}>
              <Back />
            </div>
            <TitleText>2021년10월20일 수요일</TitleText>
            <EmptyCompo />
          </Title>
          <S.ImageFrame>
            <S.ImageWrapper>
              {numbr.map(() => {
                return <S.ImageBox />;
              })}
            </S.ImageWrapper>
          </S.ImageFrame>

          <S.ContentBox>
            {/* 사용자 기분에 따른 원도형 */}
            <S.TextBox>
              <S.TitleText>오늘 노혁이랑 담양갔다</S.TitleText>
              <S.Text>
                오늘 무슨 일이 있었나요?오늘 무슨 일이 있었나요?오늘 무슨 일이
                있었나요?오늘 무슨 일이 있었나요?오늘 무슨 일이 있었나요?오늘
              </S.Text>
            </S.TextBox>
          </S.ContentBox>
        </Frame>
      </Setting>
    </>
  );
}

export default DiaryDetail;
