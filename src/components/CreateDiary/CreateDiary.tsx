import React from "react";
import { Back } from "../../assets/svg";
import { BoldPlus } from "../../assets/svg/Plus";
import { GradiantButton } from "../Common/Buttons/GradiantButton";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import * as S from "./style";

function CreateDiary() {
  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <Back />
            <TitleText>공유 일기 쓰기</TitleText>
            <EmptyCompo />
          </Title>
          <S.PutImage>
            <BoldPlus />
          </S.PutImage>
          <S.Description>오늘을 대표할 사진을 넣어보세요!</S.Description>

          <S.TextBox>
            <S.TitleText placeholder="일기 제목"></S.TitleText>
            <S.TextArea placeholder="여기에 입력해주세요.."></S.TextArea>
          </S.TextBox>
          <S.MoodSelectBox>
            <S.MoodDesc>오늘의 기분을 선택해주세요!</S.MoodDesc>
          </S.MoodSelectBox>
          <GradiantButton style={{ marginTop: 50 }}>일기 작성</GradiantButton>
        </Frame>
      </Setting>
    </>
  );
}

export default CreateDiary;
