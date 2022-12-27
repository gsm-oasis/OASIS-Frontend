import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Back } from "../../assets/svg";
import { BoldPlus } from "../../assets/svg/Plus";
import { GradiantButton } from "../Common/Buttons/GradiantButton";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import * as S from "./style";

function CreateDiary() {
  const [imageSrc, setImageSrc] = useState(""); // 아래 함수 이해하고 async로 바꾸기
  // 디자인대로 하지말고 이미지 3개 빈칸하고
  //안없어지던 파일선택버튼으로 따로 빼보기

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        if (reader.result) {
          setImageSrc(reader.result.toString());
        }
        //resolve();
      };
    });
  };

  return (
    // 이미지 삽입시 UI변경, 이미지 삽입후 미리보기로 변환하는거 커스텀 hook으로
    <>
      <Setting>
        <Frame>
          <Title>
            <Back />
            <TitleText>공유 일기 쓰기</TitleText>
            <EmptyCompo />
          </Title>
          <S.PutImage
            type={"file"}
            onChange={(e) => {
              encodeFileToBase64(e.target.files![0]);
            }}
          ></S.PutImage>
          <BoldPlus />
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
