import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import Diary from "../../api/Diary";
import { Back } from "../../assets/svg";
import {
  ImagesAtom,
  ImageSrcAtom,
  MoodAtom,
  nickNameAtom,
  WroteDiaryAtom,
} from "../../atoms/AtomContainer";
import TokenService from "../../lib/TokenService";
import { GradiantButton } from "../Common/Buttons/GradiantButton";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import InputImage from "./InputImage/InputImage";
import Mood from "./Mood/Mood";
import * as S from "./style";

function CreateDiary() {
  const navigate = useNavigate();
  const diaryTitle = useRef<HTMLInputElement>(null);
  const diaryContent = useRef<HTMLTextAreaElement>(null);
  const [imageSrc] = useRecoilState<File[]>(ImageSrcAtom);
  const [moods] = useRecoilState(MoodAtom);
  const myName: string = useRecoilValue(nickNameAtom);
  const resetMood = useResetRecoilState(MoodAtom);
  const resetImageSrc = useResetRecoilState(ImageSrcAtom);
  const resetImages = useResetRecoilState(ImagesAtom);
  const [wroteDiary, setWroteDiary] = useRecoilState(WroteDiaryAtom);

  const resetRecoil = () => {
    resetMood();
    resetImageSrc();
    resetImages();
  };

  const createDiary = async () => {
    try {
      const formData = new FormData();
      imageSrc.forEach((img) => formData.append("file", img));
      let reqDto = {
        title: diaryTitle.current?.value,
        content: diaryContent.current?.value,
        mood: moods?.name,
        writer: myName,
        moodColor: moods?.moodColor,
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
        setWroteDiary(true);
        resetRecoil();
        navigate("/");
      }
    } catch (error: any) {
      if (error.response.status === 409) {
        setWroteDiary(true);
        toast.error("오늘은 일기를 더 작성할 수 없어요");
      }
    }
  };

  const checkForm: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (imageSrc.length === 0) {
      toast.error("사진을 추가해주세요.");
      return;
    } else if (diaryTitle.current?.value.length === 0) {
      toast.error("일기 제목을 입력해주세요.");
      diaryTitle.current.focus();
      return;
    } else if (diaryContent.current?.value.length === 0) {
      diaryContent.current.focus();
      toast.error("일기 내용을 입력해주세요.");
      return;
    } else if (moods.name === "") {
      toast.error("오늘의 기분을 선택해주세요");
      return;
    }
    createDiary();
  };

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div
              onClick={() => {
                resetRecoil();
                navigate("/");
              }}
            >
              <Back />
            </div>
            <TitleText>공유 일기 쓰기</TitleText>
            <EmptyCompo />
          </Title>

          {wroteDiary ? (
            <S.IsWroteDiary>
              <h3>공유일기를 작성할 수 없어요.</h3>
              <p>공유일기는 당일에 하나만 작성할 수 있어요.</p>
            </S.IsWroteDiary>
          ) : (
            <>
              <InputImage />

              <S.TextBox>
                <S.TitleText placeholder="일기 제목" ref={diaryTitle} />
                <S.TextArea
                  placeholder="오늘 무슨일이 있었나요?"
                  ref={diaryContent}
                ></S.TextArea>
              </S.TextBox>

              <Mood />

              <GradiantButton
                style={{ marginTop: 30, marginBottom: 40 }}
                onClick={checkForm}
              >
                일기 작성
              </GradiantButton>
            </>
          )}
        </Frame>
      </Setting>
    </>
  );
}

export default CreateDiary;
