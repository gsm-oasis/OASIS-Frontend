import React from "react";
import * as S from "./style";

function Question(props: any): JSX.Element {
  return (
    <>
      <S.Question>
        <S.QuestionNumBox>
          <S.QuestionNum>{props.questionNum}번째 질문</S.QuestionNum>
        </S.QuestionNumBox>
        <S.QuestionText>{props.content}</S.QuestionText>
        <S.QuestionDescription>
          질문을 클릭해서 답변을 남겨보세요!
        </S.QuestionDescription>
      </S.Question>
    </>
  );
}

export default Question;
