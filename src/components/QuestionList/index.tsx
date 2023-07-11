import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import * as I from "../../assets/svg/index";
import Question from "../../api/Question";
import TokenService from "../../lib/TokenService";
import { QuestionListContent } from "../../interfaces/QuestionInterface";
import QuestionBox from "./QuestionBox";
import { ScrollBox } from "../Common/ScrollBox";

function QuestionList() {
  const navigate = useNavigate();
  const [questionList, setQuestionList] = useState<[]>([]);

  const getQuestions = async () => {
    try {
      const response: any = await Question.getQuestionList(
        TokenService.getLocalAccessToken()
      );
      setQuestionList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
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

          <ScrollBox>
            {questionList &&
              questionList?.map((question: QuestionListContent) => (
                <QuestionBox
                  key={question.questionId}
                  QuestionProps={question}
                />
              ))}
          </ScrollBox>
        </Frame>
      </Setting>
    </>
  );
}

export default QuestionList;
