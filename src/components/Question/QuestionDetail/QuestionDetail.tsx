import * as S from "./style";
import * as I from "../../../assets/svg";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../../Common/Title";
import Question from "../../couple/Main/Question";
import {
  MyCoupleEmptyAnswer,
  QuestionCommentBox,
  UserName,
} from "../../Common/Question";

function QuestionDetail(props: any) {
  const navigate = useNavigate();
  const navi = () => {
    if (props.back) navigate("/questionList");
    else navigate("/");
  };

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={navi}>
              <I.Back />
            </div>
            <TitleText>질문 상세</TitleText>
            <EmptyCompo />
          </Title>

          <Question questionNum={props.id} content={props.content} />

          {props.questionContent.coupleAnswer === "" ? (
            <QuestionCommentBox>
              <UserName>{props.questionContent.coupleName}의 답변</UserName>
              <MyCoupleEmptyAnswer>
                상대방이 아직 답변을 작성하지 않았어요.
              </MyCoupleEmptyAnswer>
            </QuestionCommentBox>
          ) : (
            <S.CommentBox>
              <S.Name>{props.questionContent.coupleName}의 답변</S.Name>
              <S.Answer>{props.questionContent.coupleAnswer}</S.Answer>
            </S.CommentBox>
          )}

          <S.CommentBox>
            <S.Name>{props.questionContent.userName}의 답변</S.Name>
            <S.Answer>{props.questionContent.answer}</S.Answer>
          </S.CommentBox>
        </Frame>
      </Setting>
    </>
  );
}

export default QuestionDetail;
