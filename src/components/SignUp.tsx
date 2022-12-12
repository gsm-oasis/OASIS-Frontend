import {
  CheckButton,
  Description,
  Frame,
  Input,
  InputAndButton,
  InputBox,
  Logo,
  NextPage,
  Setting,
  Title,
} from "../styles/A";
import * as I from "../assets/svg";
import { useState } from "react";
import axios from "axios";

function SignUp(): JSX.Element {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [next, setNext] = useState(false);
  const [checkEmail, setCheckEmail] = useState("");

  const onChangeId: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setId(e.target.value);
  const onChangePw: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setPw(e.target.value);
  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);
  const onChangeNickname: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setNickname(e.target.value);
  const onChangeCheckEmail: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCheckEmail(e.target.value);

  const Check = () => {
    if (id && pw) {
      setNext(true);
    } else alert("아이디와 비밀번호를 입력해주세요");
  };

  const signUp = async (
    id: string,
    pw: string,
    nickname: string,
    email: string
  ) => {
    try {
      const response = await axios(`http://10.82.17.76:8080/auth/login`, {
        method: "POST",
        withCredentials: true,
        data: {
          id: id,
          password: pw,
          email: email,
          nickName: nickname,
        },
      });

      console.log("sign up success");
    } catch (e) {}
  };

  return (
    <>
      <Setting>
        <Frame>
          <Logo>
            <I.Logo />
          </Logo>
          <Title>SIGN UP</Title>
          <Description>
            오아시스에 가입하여 더 깊은 사랑을 나눠보세요.
          </Description>
          <InputBox>
            {!next && (
              <>
                <Input
                  placeholder="아이디를 입력해주세요"
                  onChange={onChangeId}
                  value={id}
                ></Input>
                <Input
                  placeholder="비밀번호를 입력해주세요"
                  onChange={onChangePw}
                  value={pw}
                ></Input>
              </>
            )}
            {next && (
              <>
                <Input
                  placeholder="닉네임을 입력해주세요"
                  onChange={onChangeNickname}
                  value={nickname}
                ></Input>
                <InputAndButton>
                  <Input
                    placeholder="이메일을 입력해주세요"
                    onChange={onChangeEmail}
                    value={email}
                    style={{ width: "200px" }}
                  ></Input>
                  <CheckButton>인증</CheckButton>
                </InputAndButton>
                <Input
                  placeholder="인증번호"
                  onChange={onChangeCheckEmail}
                  value={checkEmail}
                ></Input>
              </>
            )}
            {!next && <NextPage onClick={Check}>다음</NextPage>}
            {next && (
              <NextPage onClick={() => signUp(id, pw, nickname, email)}>
                회원가입
              </NextPage>
            )}
          </InputBox>
        </Frame>
      </Setting>
    </>
  );
}

export default SignUp;
