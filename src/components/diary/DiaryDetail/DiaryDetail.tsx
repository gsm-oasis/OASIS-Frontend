import React from "react";
import { useRecoilValue } from "recoil";
import { DiaryContentAtom } from "../../../atoms/AtomContainer";
import { Frame, Setting } from "../../Common/Frame";
import { Back } from "../../../assets/svg/Back";
import { EmptyCompo, Title, TitleText } from "../../Common/Title";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { diaryDetail } from "../../../interfaces/DiaryInterface";

function DiaryDetail(): JSX.Element {
  const navigate = useNavigate();
  const diaryContent = useRecoilValue<diaryDetail>(DiaryContentAtom);

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/")}>
              <Back />
            </div>
            <TitleText>{diaryContent?.createDate}</TitleText>
            <EmptyCompo />
          </Title>
          <S.ImageFrame>
            <S.ImageWrapper>
              {diaryContent &&
                diaryContent?.imgs.map((image) => (
                  <div key={image.idx}>
                    <S.ImageBox image={image.imageUrl} />
                  </div>
                ))}
            </S.ImageWrapper>
          </S.ImageFrame>

          <S.ContentBox>
            <S.MoodCircle>{diaryContent?.mood}</S.MoodCircle>
            <S.TextBox>
              <S.TitleText>{diaryContent?.title}</S.TitleText>
              <S.Text>{diaryContent?.content}</S.Text>
            </S.TextBox>
          </S.ContentBox>
        </Frame>
      </Setting>
    </>
  );
}

export default DiaryDetail;
