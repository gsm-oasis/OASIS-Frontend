import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { QuestionContent } from "../../interfaces/QuestionInterface";
import TokenService from "../../lib/TokenService";
import MainQuestion from "../../api/Question";
import WriteQuestionComment from "./WriteQuestionComment/WriteQuestionComment";
import QuestionDetail from "./QuestionDetail/QuestionDetail";

const defaultQuestion: QuestionContent = {
  userName: "",
  coupleName: "",
  answer: "",
  coupleAnswer: "상대방이 아직 답변하지 않았어요!",
};

function Question() {
  const [questionContent, setQuestionContent] =
    useState<QuestionContent>(defaultQuestion);
  const location = useLocation();
  const [id, setId] = useState<number>(0);
  const [content, setContent] = useState<string>("");

  const getComment = async () => {
    try {
      const response: any = await MainQuestion.getDiaryComment(
        id,
        TokenService.getLocalAccessToken()
      );
      setQuestionContent(response.data);
      if (response.status === 200) console.log(response.status, response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComment();
    setId(location.state.Id);
    setContent(location.state.content);
  }, []);

  return (
    <>
      {questionContent.answer && (
        <QuestionDetail
          id={id}
          content={content}
          questionContent={questionContent}
        />
      )}
      {!questionContent.answer && (
        <WriteQuestionComment
          id={id}
          content={content}
          questionContent={questionContent}
        />
      )}
    </>
  );
}

export default Question;
