import React, { useState } from "react";
import { Frame, Setting } from "../../Common/Frame";
import { EmptyCompo, Title } from "../../Common/Title";
import * as I from "../../../assets/svg";
import { useNavigate } from "react-router-dom";
import { Input } from "../../Common/Inputs/AuthInput";
import * as S from "./style";
import { GradiantButton } from "../../Common/Buttons/GradiantButton";
import Auth from "../../../api/Auth";
import { toast } from "react-toastify";

function FindId() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);

  const getId = async () => {
    try {
      if (email) {
        await Auth.findId(email);
        toast.success("이메일을 확인해주세요!");
        navigate("/login");
      } else {
        toast.error("이메일을 입력해주세요!");
      }
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error("잘못된 이메일입니다!");
      } else if (e.response.status === 404) {
        toast.error("존재하지 않는 유저입니다!");
      }
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
