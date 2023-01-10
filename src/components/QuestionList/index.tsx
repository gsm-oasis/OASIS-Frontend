import React from "react";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import * as I from "../../assets/svg/index";
import * as S from "./style";

function QuestionList() {
  const navigate = useNavigate();

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
            <S.QuestionBox>
              <S.IdCircle>9</S.IdCircle>
              <S.Text>Q. 처음 데이트했던 날, 무엇을 했나요?</S.Text>
            </S.QuestionBox>
          </S.ScrollBox>
        </Frame>
      </Setting>
    </>
  );
}

export default QuestionList;
