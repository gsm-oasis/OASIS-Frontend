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
import { TextArea, TextBox, Count } from "../../CreateDiary/style";
import Question from "../../couple/Main/Question";
import TokenService from "../../../lib/TokenService";
import { toast } from "react-toastify";

function WriteDiaryComment(props: any) {
  const navigate = useNavigate();
  const [myComment, setMyComment] = useState<string>("");
  const [answerCount, setAnswerCount] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMyComment(e.target.value);
    setAnswerCount(e.target.value.length);
    if (e.target.value.length > 100) setIsError(true);
    else setIsError(false);
  };

  const postMyComment = async () => {
    try {
      if (!myComment) toast.error("답변을 입력해주세요!");
      else if (isError) toast.error("답변 글자 수를 확인해주세요!");
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
              답변을 작성해야 상대방의 답변을 볼 수 있어요!
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
              maxLength={100}
            ></TextArea>
            <Count isError={isError}>{answerCount} / 100</Count>
          </TextBox>

          <GradiantButton onClick={postMyComment}>답변 저장</GradiantButton>
        </Frame>
      </Setting>
    </>
  );
}

export default WriteDiaryComment;
