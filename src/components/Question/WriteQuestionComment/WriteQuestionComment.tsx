import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../../../assets/svg";
import { GradiantButton } from "../../Common/Buttons/GradiantButton";
import { Setting, Frame } from "../../Common/Frame";
import MainQuestion from "../../../api/Question";
import {
  MyCoupleEmptyAnswer,
  QuestionCommentBox,
  UserName,
} from "../../Common/Question";
import { EmptyCompo, Title, TitleText } from "../../Common/Title";
import { TextArea, TextBox } from "../../CreateDiary/style";
import Question from "../../Main/Question";
import TokenService from "../../../lib/TokenService";

function WriteDiaryComment(props: any) {
  const navigate = useNavigate();
  const [myComment, setMyComment] = useState("");

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMyComment(e.target.value);
  };

  const postMyComment = async () => {
    try {
      // const response = await
      //console.log(myComment)
      if (!myComment) alert("답변을 입력해주세요!");
      else {
        console.log(props.id, myComment);
        const response: any = await MainQuestion.postMyComment(
          props.id,
          myComment,
          TokenService.getLocalAccessToken()
        );
        console.log(response.status);
        if (response.status === 201) navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

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
            <TextArea
              placeholder="답변을 작성해주세요!"
              onChange={onChange}
              value={myComment}
            ></TextArea>
          </TextBox>

          <GradiantButton onClick={postMyComment}>답변 저장</GradiantButton>
        </Frame>
      </Setting>
    </>
  );
}

export default WriteDiaryComment;
