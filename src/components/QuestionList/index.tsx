import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import * as I from "../../assets/svg/index";
import * as S from "./style";
import Question from "../../api/Question";
import TokenService from "../../lib/TokenService";
import {
  QuestionListType,
  QuestionListContent,
} from "../../interfaces/QuestionInterface";
import QuestionBox from "./QuestionBox";

const defaultState: QuestionListType = {
  questions: [],
};

function QuestionList() {
  const navigate = useNavigate();
  const [questionList, setQuestionList] =
    useState<QuestionListType>(defaultState);

  const getQuestions = async () => {
    try {
      const response: any = await Question.getQuestionList(
        TokenService.getLocalAccessToken()
      );
      console.log(response.data.questions);
      setQuestionList(response.data.questions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
    console.log(questionList.questions);
  }, []);

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/")}>
              <I.Back />
            </div>
            <TitleText>질문 목록</TitleText>
            <EmptyCompo />
          </Title>

          <S.ScrollBox>
            {questionList?.questions &&
              questionList?.questions.map((question: QuestionListContent) => (
                <QuestionBox
                  key={question.questionId}
                  QuestionProps={question}
                />
              ))}
          </S.ScrollBox>
        </Frame>
      </Setting>
    </>
  );
}

export default QuestionList;
