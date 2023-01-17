import React, { useState } from "react";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title } from "../Common/Title";
import * as I from "../../assets/svg";
import { useNavigate } from "react-router-dom";
import { Input } from "../Common/Inputs/AuthInput";
import * as S from "./style";
import { GradiantButton } from "../Common/Buttons/GradiantButton";
import Auth from "../../api/Auth";

function FindId() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [id, setId] = useState<string>("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);

  const getId = async () => {
    try {
      if (email) {
        console.log(email);
        const response: any = await Auth.findId(email);
        // console.log(response.data);
        // setId(response.data.useId);
        console.log(response.status);
        navigate("/login");
      } else alert("이메일을 입력해주세요");
    } catch (error) {
      console.log(error);
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
          <S.Title>아이디 찾기</S.Title>
          <Input
            placeholder="이메일을 입력해주세요"
            onChange={onChange}
            value={email}
          ></Input>
          <S.Empty />
          <GradiantButton onClick={getId}>아이디 받기</GradiantButton>
        </Frame>
      </Setting>
    </>
  );
}

export default FindId;
