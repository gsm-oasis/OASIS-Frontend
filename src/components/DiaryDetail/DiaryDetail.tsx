import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { DiaryContentAtom } from "../../atoms/AtomContainer";
import { Frame, Setting } from "../Common/Frame";
import { Back } from "../../assets/svg/Back";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function DiaryDetail(): JSX.Element {
  const navigate = useNavigate();
  const [diaryContent, setDiaryContent] = useRecoilState(DiaryContentAtom);
  const [numbr, setNumbr] = useState<number[]>([1, 2, 3, 4]);

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
        </Frame>
      </Setting>
    </>
  );
}

export default DiaryDetail;
