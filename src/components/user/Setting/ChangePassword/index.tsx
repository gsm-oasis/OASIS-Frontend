import React from "react";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../../../Common/Frame";
import { Title, TitleText, EmptyCompo } from "../../../Common/Title";
import * as S from "./style";
import * as I from "../../../../assets/svg";
const ChangePassword = () => {
  const navigate = useNavigate();
  return (
    <Setting>
      <Frame>
        <Title>
          <div onClick={() => navigate("/setting")}>
            <I.Back />
          </div>
          <TitleText>비밀번호 변경</TitleText>
          <EmptyCompo />
        </Title>
        <S.ChangePasswordForm>
          <label>현재 비밀번호</label>
          <input />
          <label>새 비밀번호</label>
          <input />
          <button>변경</button>
        </S.ChangePasswordForm>
      </Frame>
    </Setting>
  );
};

export default ChangePassword;
