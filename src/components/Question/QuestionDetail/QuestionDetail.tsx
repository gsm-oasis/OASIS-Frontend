import React from "react";
import * as I from "../../../assets/svg";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../../Common/Title";
import Question from "../../Main/Question";
import {
  MyCoupleEmptyAnswer,
  QuestionCommentBox,
  UserName,
} from "../../Common/Question";

function QuestionDetail(props: any) {
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

          <QuestionCommentBox>
            <UserName>{props.questionContent.userName}의 답변</UserName>
            <MyCoupleEmptyAnswer>
              {props.questionContent.answer}
            </MyCoupleEmptyAnswer>
          </QuestionCommentBox>
        </Frame>
      </Setting>
    </>
  );
}

export default QuestionDetail;
