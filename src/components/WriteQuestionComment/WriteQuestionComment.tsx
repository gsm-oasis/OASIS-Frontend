import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainQuestion from "../../api/Question";
import * as I from "../../assets/svg";
import { QuestionContent } from "../../interfaces/QuestionInterface";
import TokenService from "../../lib/TokenService";
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

const defaultQuestion: QuestionContent = {
  userName: "",
  coupleName: "",
  answer: "",
  coupleAnswer: "상대방이 아직 답변하지 않았어요!",
};

function WriteDiaryComment() {
  const [questionContent, setQuestionContent] =
    useState<QuestionContent>(defaultQuestion);
  const location = useLocation();

  const id = location.state.Id;
  const content = location.state.content;

  const getComment = async () => {
    try {
      const response: any = await MainQuestion.getDiaryComment(
        id,
        TokenService.getLocalAccessToken()
      );
      console.log(response.data);
      setQuestionContent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <I.Back />
            <TitleText>질문 답변 작성</TitleText>
            <EmptyCompo />
          </Title>

          <Question questionNum={id} content={content} />

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
