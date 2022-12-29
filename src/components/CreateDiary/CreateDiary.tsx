import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Diary from "../../api/Diary";
import { Back } from "../../assets/svg";
import { BoldPlus } from "../../assets/svg/Plus";
import { nickNameAtom } from "../../atoms/AtomContainer";
import TokenService from "../../lib/TokenService";
import { GradiantButton } from "../Common/Buttons/GradiantButton";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import { ImageBox, ImageFrame, ImageWrapper } from "../DiaryDetail/style";
import * as S from "./style";

function CreateDiary() {
  const navigate = useNavigate();
  const [diaryTitle, setDiaryTitle] = useState("");
  const [diaryContent, setDiaryContent] = useState("");
  const [imageSrc, setImageSrc] = useState<File>();
  const [images, setImages] = useState<string[]>([]);
  const [btn, setBtn] = useState<{ name: string }>();
  const writer: string = useRecoilValue(nickNameAtom);

  const Moods = [
    { name: "행복" },
    { name: "슬픔" },
    { name: "무난" },
    { name: "후회" },
    { name: "설렘" },
  ];

  const TitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setDiaryTitle(e.target.value);
  };
  const ContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDiaryContent(e.target.value);
  };

  const btnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selected = Moods.filter((color) => color.name === value);
    if (selected) {
      setBtn(selected[0]);
    }
  };

  const encodeFileToBase64 = async (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    reader.onload = () => {
      if (reader.result) {
        // setImageSrc(reader.result.toString());
        setImages([...images, reader.result.toString()]);
      }
    };
  };

  const createDiary: React.MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      const formData = new FormData();
      if (!imageSrc) return;
      formData.append("file", imageSrc);
      let reqDto = {
        title: diaryTitle,
        content: diaryContent,
        mood: btn?.name,
        writer: writer,
      };
      formData.append(
        "req",
        new Blob([JSON.stringify(reqDto)], { type: "application/json" })
      );
      const response: any = await Diary.postCreateDiary(
        formData,
        TokenService.getLocalAccessToken()
      );

      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
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
                setImageSrc(e.target.files![0]);
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
            <S.TitleText
              placeholder="일기 제목"
              onChange={TitleChange}
              value={diaryTitle}
            />
            <S.TextArea
              placeholder="여기에 입력해주세요.."
              onChange={ContentChange}
              value={diaryContent}
            ></S.TextArea>
          </S.TextBox>
          <S.MoodSelectBox>
            <S.MoodDesc>오늘의 기분을 선택해주세요!</S.MoodDesc>
            <S.MoodCircleBox>
              {Moods.map((mood, index) => {
                return (
                  <div key={index}>
                    <S.MoodCircle
                      id={mood.name}
                      name="mood"
                      value={mood.name}
                      type="radio"
                      checked={mood.name === btn?.name}
                      onChange={btnClick}
                    ></S.MoodCircle>
                    <S.MoodButton htmlFor={mood.name}>{mood.name}</S.MoodButton>
                  </div>
                );
              })}
            </S.MoodCircleBox>
          </S.MoodSelectBox>
          <GradiantButton style={{ marginTop: 30 }} onClick={createDiary}>
            일기 작성
          </GradiantButton>
        </Frame>
      </Setting>
    </>
  );
}

export default CreateDiary;
