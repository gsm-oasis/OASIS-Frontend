import React, { useEffect, useState } from "react";
import { Frame, Setting } from "../../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../../Common/Title";
import * as I from "../../../assets/svg";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import User from "../../../api/User";
import TokenService from "../../../lib/TokenService";

function Settings() {
  const navigate = useNavigate();
  const [version, setVersion] = useState("");
  const [myCode, setMyCode] = useState("");
  const getInfo = async () => {
    const { data }: any = await User.getInfo(
      TokenService.getLocalAccessToken()
    );
    setMyCode(data.myCode);
    setVersion(data.version);
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/")}>
              <I.Back />
            </div>
            <TitleText>설정</TitleText>
            <EmptyCompo />
          </Title>
          <S.ButtonBox>
            <S.Button>
              <S.Text>비밀번호 변경</S.Text>
              <I.Next />
            </S.Button>
            <S.Button>
              <S.Text>닉네임 변경</S.Text>
              <I.Next />
            </S.Button>
            <S.Button>
              <S.Text>내 코드</S.Text>
              <S.MyCode>{myCode}</S.MyCode>
            </S.Button>
          </S.ButtonBox>

          <S.ColorButton color="#D9D9D9">회원 탈퇴</S.ColorButton>
          <S.ColorButton color="#F5CACB">커플 끊기</S.ColorButton>
          <S.Version>v {version}</S.Version>
        </Frame>
      </Setting>
    </>
  );
}

export default Settings;
