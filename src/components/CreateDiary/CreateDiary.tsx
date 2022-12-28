import React, { useState } from "react";
import { Back } from "../../assets/svg";
import { BoldPlus } from "../../assets/svg/Plus";
import { GradiantButton } from "../Common/Buttons/GradiantButton";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import { ImageBox, ImageFrame, ImageWrapper } from "../DiaryDetail/style";
import * as S from "./style";

function CreateDiary() {
  const [imageSrc, setImageSrc] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const encodeFileToBase64 = async (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    reader.onload = () => {
      if (reader.result) {
        setImageSrc(reader.result.toString());
        setImages([...images, reader.result.toString()]);
      }
    };
  };

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <Back />
            <TitleText>공유 일기 쓰기</TitleText>
            <EmptyCompo />
          </Title>
          <div>
            <S.PutImage
              type={"file"}
              onChange={(e) => {
                encodeFileToBase64(e.target.files![0]);
              }}
              id={"ImageUpload"}
            ></S.PutImage>

            <ImageFrame>
              <ImageWrapper>
                {images &&
                  images?.map((image, index) => {
                    return (
                      <ImageBox
                        style={{ width: 120 }}
                        key={index}
                        image={image}
                      />
                    );
                  })}
              </ImageWrapper>
            </ImageFrame>

            <S.Description>오늘을 대표할 사진을 넣어보세요!</S.Description>

            <S.PutImageLabel htmlFor="ImageUpload">
              <BoldPlus />
            </S.PutImageLabel>
          </div>

          <S.TextBox>
            <S.TitleText placeholder="일기 제목"></S.TitleText>
            <S.TextArea placeholder="여기에 입력해주세요.."></S.TextArea>
          </S.TextBox>
          <S.MoodSelectBox>
            <S.MoodDesc>오늘의 기분을 선택해주세요!</S.MoodDesc>
            <S.MoodCircleBox>
              <S.MoodCircle isClick={false}>행복</S.MoodCircle>
              <S.MoodCircle isClick={false}>슬픔</S.MoodCircle>
              <S.MoodCircle isClick={false}>무난</S.MoodCircle>
              <S.MoodCircle isClick={false}>후회</S.MoodCircle>
              <S.MoodCircle isClick={false}>설렘</S.MoodCircle>
            </S.MoodCircleBox>
          </S.MoodSelectBox>
          <GradiantButton style={{ marginTop: 30 }}>일기 작성</GradiantButton>
        </Frame>
      </Setting>
    </>
  );
}

export default CreateDiary;
