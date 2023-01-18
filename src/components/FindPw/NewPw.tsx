import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../api/Auth";
import { GradiantButton } from "../Common/Buttons/GradiantButton";
import { Input } from "../Common/Inputs/AuthInput";
import * as S from "./style";

function NewPw(props: any) {
  const navigate = useNavigate();
  const [pw, setPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setPw(e.target.value);
  const onCheckPw: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCheckPw(e.target.value);

  const checkMail = async () => {
    try {
      if (pw === checkPw) {
        const response: any = await Auth.postNewPw(props.email, pw, checkPw);
        if (response.status === 200) navigate("/login");
      } else alert("비밀번호를 다시 입력해주세요");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.Title>새로운 비밀번호 설정</S.Title>
      <Input
        placeholder="새로운 비밀번호를 입력해주세요"
        onChange={onChange}
        value={pw}
      ></Input>
      <Input
        style={{ marginTop: 20 }}
        placeholder="비밀번호 확인"
        onChange={onCheckPw}
        value={checkPw}
      ></Input>
      <GradiantButton onClick={checkMail}>인증하기</GradiantButton>
    </>
  );
}

export default NewPw;
