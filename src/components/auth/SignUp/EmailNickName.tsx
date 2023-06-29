import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Auth from "../../../api/Auth";
import { emailAtom, nickNameAtom } from "../../../atoms/AtomContainer";
import { InputAndButton } from "./style";
import { Input } from "../../Common/Inputs/AuthInput";
import { CheckButton } from "../../Common/Buttons/CheckButton";
import { toast } from "react-toastify";

function EmailNickName(): JSX.Element {
  const [nickName, setNickName] = useRecoilState(nickNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [checkNum, setCheckNum] = useState<string>("");

  const nickNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setNickName(e.target.value);
  const emailChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);
  const checkNumChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCheckNum(e.target.value);

  const postEmail = async (userEmail: string) => {
    try {
      await Auth.sendMail(userEmail);
      toast.success("전송했습니다!");
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error("다시 시도해주세요!");
      }
    }
  };

  const emailConfirm = async () => {
    try {
      await Auth.mailConfirm(email, checkNum);
      toast.success("인증되었습니다!");
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error("올바르지 않은 인증번호 입니다!");
      }
    }
  };

  return (
    <>
      <Input
        placeholder="닉네임을 입력해주세요"
        onChange={nickNameChange}
        value={nickName}
      ></Input>
      <InputAndButton>
        <Input
          placeholder="ex) user1234@naver.com"
          onChange={emailChange}
          value={email}
          style={{ width: "200px" }}
        ></Input>
        <CheckButton
          color="f4cacc"
          weight="60"
          height="50"
          onClick={() => postEmail(email)}
        >
          전송
        </CheckButton>
      </InputAndButton>
      <InputAndButton>
        <Input
          placeholder="인증번호 입력해주세요"
          onChange={checkNumChange}
          value={checkNum}
          style={{ width: "200px" }}
        ></Input>
        <CheckButton
          color="f4cacc"
          weight="60"
          height="50"
          onClick={emailConfirm}
        >
          인증
        </CheckButton>
      </InputAndButton>
    </>
  );
}

export default EmailNickName;
