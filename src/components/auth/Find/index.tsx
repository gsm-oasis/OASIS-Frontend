import React from "react";
import { Frame, Setting } from "../../Common/Frame";
import { EmptyCompo, Title } from "../../Common/Title";
import * as I from "../../../assets/svg";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function Find() {
  const navigate = useNavigate();
  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/login")}>
              <I.Back />
            </div>
            <I.smallLogo />
            <EmptyCompo />
          </Title>

          <S.Box>
            <S.SelectBox onClick={() => navigate("/findId")}>
              <S.Text>아이디 찾기</S.Text>
            </S.SelectBox>
            <S.SelectBox onClick={() => navigate("/findPw")}>
              <S.Text>비밀번호 찾기</S.Text>
            </S.SelectBox>
          </S.Box>
        </Frame>
      </Setting>
    </>
  );
}

export default Find;
