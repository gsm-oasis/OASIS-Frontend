import React, { useState } from "react";
import { Frame, Setting } from "../../Common/Frame";
import { EmptyCompo, Title } from "../../Common/Title";
import * as I from "../../../assets/svg";
import { Input } from "../../Common/Inputs/AuthInput";
import { GradiantButton } from "../../Common/Buttons/GradiantButton";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Auth from "../../../api/Auth";
import NewPw from "./NewPw";
import { toast } from "react-toastify";

function FindPw() {
  const navigate = useNavigate();
  const [changePw, setChangePw] = useState<boolean>(false);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [check, setCheck] = useState<string>("");
  const onCheckChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCheck(e.target.value);
  const onEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);

  const postEmail = async () => {
    try {
      await Auth.sendMail(email);
      setEmailCheck(true);
    } catch (error) {
      console.log(error);
    }
  };

  const checkMail = async () => {
    try {
      await Auth.mailConfirm(email, check);
      setChangePw(true);
    } catch (e: any) {
      toast.error("올바른 인증번호를 입력해주세요!");
    }
  };

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/find")}>
              <I.Back />
            </div>
            <I.smallLogo />
            <EmptyCompo />
          </Title>
          {!changePw && (
            <>
              <S.Title>비밀번호 찾기</S.Title>
              {!emailCheck && (
                <>
                  <Input
                    placeholder="이메일을 입력해주세요"
                    onChange={onEmailChange}
                    value={email}
                  ></Input>
                  <S.Empty />
                  <GradiantButton onClick={postEmail}>다음</GradiantButton>
                </>
              )}
              {emailCheck && (
                <>
                  <Input
                    placeholder="인증번호를 입력해주세요"
                    onChange={onCheckChange}
                    value={check}
                  ></Input>
                  <S.Empty />
                  <GradiantButton onClick={checkMail}>인증하기</GradiantButton>
                </>
              )}
            </>
          )}
          {changePw && <NewPw email={email} />}
        </Frame>
      </Setting>
    </>
  );
}

export default FindPw;
