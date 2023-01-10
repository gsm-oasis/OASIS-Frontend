import React from "react";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import * as I from "../../assets/svg/index";

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
            <TitleText>질문 상세</TitleText>
            <EmptyCompo />
          </Title>
        </Frame>
      </Setting>
    </>
  );
}

export default QuestionList;
