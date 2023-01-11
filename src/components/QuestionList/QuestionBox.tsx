import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TokenService from "../../lib/TokenService";
import * as S from "./style";
import MainQuestion from "../../api/Question";
import { QuestionListContent } from "../../interfaces/QuestionInterface";

interface QuestionProps {
  QuestionProps: QuestionListContent;
}

function QuestionBox(props: QuestionProps): JSX.Element {
  const navigate = useNavigate();

  const getComment = async (id: number, content: string) => {
    try {
      const response: any = await MainQuestion.getDiaryComment(
        id!,
        TokenService.getLocalAccessToken()
      );
      console.log("페이지 이동");
      navigate("/questionComment", {
        state: {
          Id: id,
          content: content,
          noWrite: true,
        },
      });
      if (response.status === 200) console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("hi", props.QuestionProps.questionId);
  }, []);

  return (
    <div
      onClick={() =>
        getComment(props.QuestionProps.questionId, props.QuestionProps.content)
      }
    >
      <S.QuestionBox>
        <S.IdCircle>{props.QuestionProps.questionId}</S.IdCircle>
        <S.Text>{props.QuestionProps.content}</S.Text>
      </S.QuestionBox>
    </div>
  );
}

export default QuestionBox;
