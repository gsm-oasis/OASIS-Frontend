import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../../../Common/Frame";
import { Title, TitleText, EmptyCompo } from "../../../Common/Title";
import * as S from "./style";
import * as I from "../../../../assets/svg";
import User from "../../../../api/User";
import TokenService from "../../../../lib/TokenService";
import { toast } from "react-toastify";
const ChangePassword = () => {
  const navigate = useNavigate();
  const originalPassword = useRef<HTMLInputElement>(null);
  const newPassword = useRef<HTMLInputElement>(null);

  const changePassword = async (event: any) => {
    event.preventDefault();
    try {
      if (originalPassword.current && newPassword.current) {
        await User.changePassword(
          originalPassword.current.value,
          newPassword.current.value,
          TokenService.getLocalAccessToken()
        );
      }
      navigate("/setting");
      toast.success("비밀번호를 변경했습니다.");
    } catch (error) {
      console.log(error);
    }
  };

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
          <input ref={originalPassword} />
          <label>새 비밀번호</label>
          <input ref={newPassword} />
          <button onClick={changePassword}>변경</button>
        </S.ChangePasswordForm>
      </Frame>
    </Setting>
  );
};

export default ChangePassword;
