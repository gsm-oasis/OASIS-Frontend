import React from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../../../assets/svg";
import { GradiantButton } from "../../Common/Buttons/GradiantButton";
import { Setting, Frame } from "../../Common/Frame";
import {
  MyCoupleEmptyAnswer,
  QuestionCommentBox,
  UserName,
} from "../../Common/Question";
import { EmptyCompo, Title, TitleText } from "../../Common/Title";
import { TextArea, TextBox } from "../../CreateDiary/style";
import Question from "../../Main/Question";

function WriteDiaryComment(props: any) {
  const navigate = useNavigate();

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/")}>
              <I.Back />
            </div>
            <TitleText>질문 답변 작성</TitleText>
            <EmptyCompo />
          </Title>

          <Question questionNum={props.id} content={props.content} />

          <QuestionCommentBox>
            <UserName>{props.questionContent.coupleName}의 답변</UserName>
            <MyCoupleEmptyAnswer>
              {props.questionContent.coupleAnswer}
            </MyCoupleEmptyAnswer>
          </QuestionCommentBox>

          <TextBox>
            <UserName style={{ marginTop: 20 }}>
              {props.questionContent.userName}의 답변
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
