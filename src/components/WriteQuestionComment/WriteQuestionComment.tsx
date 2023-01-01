import React, { useState } from "react";
import User from "../../api/User";
import * as I from "../../assets/svg";
import { QuestionContent } from "../../interfaces/QuestionInterface";
import { GradiantButton } from "../Common/Buttons/GradiantButton";
import { Setting, Frame } from "../Common/Frame";
import {
  MyCoupleEmptyAnswer,
  QuestionCommentBox,
  UserName,
} from "../Common/Question";

import { EmptyCompo, Title, TitleText } from "../Common/Title";
import { TextArea, TextBox } from "../CreateDiary/style";
import Question from "../Main/Question";
import * as S from "./style";

const defaultQuestion: QuestionContent = {
  content: "",
  userName: "",
  coupleName: "",
  answer: "",
  coupleAnswer: "상대방이 아직 답변하지 않았어요!",
};

function WriteDiaryComment() {
  const [questionContent, setQuestionContent] =
    useState<QuestionContent>(defaultQuestion);

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <I.Back />
            <TitleText>질문 답변 작성</TitleText>
            <EmptyCompo />
          </Title>

          <Question
            quesitonNum="30"
            content="Q. 처음 데이트했던 날 무엇을 했나요?"
          />

          <QuestionCommentBox>
            <UserName>{questionContent.coupleName}의 답변</UserName>
            <MyCoupleEmptyAnswer>
              {questionContent.coupleAnswer}
            </MyCoupleEmptyAnswer>
          </QuestionCommentBox>
          <TextBox>
            <UserName style={{ marginTop: 20 }}>
              {questionContent.userName}의 답변
            </UserName>
            <TextArea placeholder="답변을 작성해주세요!"></TextArea>
          </TextBox>

          <GradiantButton>답변 저장</GradiantButton>
        </Frame>
      </Setting>
    </>
  );
}

export default WriteDiaryComment;
