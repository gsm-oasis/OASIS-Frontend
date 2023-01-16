import React from "react";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import * as I from "../../assets/svg";

function DiaryList() {
  const navigate = useNavigate();

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/")}>
              <I.Back />
            </div>
            <TitleText>공유일기 목록</TitleText>
            <EmptyCompo />
          </Title>
        </Frame>
      </Setting>
    </>
  );
}

export default DiaryList;
