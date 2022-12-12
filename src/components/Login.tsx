import {
  Description,
  Frame,
  Input,
  InputBox,
  Logo,
  NextPage,
  Setting,
  StyledLink,
  Title,
} from "../styles/A";
import * as I from "../assets/svg";
import { useState } from "react";
import axios from "axios";

function Login(): JSX.Element {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const onChangeId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };
  const onChangePw: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPw(e.target.value);
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    Login(id, pw);
  };

  const Login = async (id: string, pw: string) => {
    try {
      // const response: any = await axios.post(
      //   `http://10.82.17.76:8080/auth/login`,
      //   config
      // );
      console.log(id);
      console.log(pw);
      const response: any = await axios(`http://10.82.17.76:8080/auth/login`, {
        method: "POST",
        withCredentials: true,
        data: {
          id: id,
          password: pw,
        },
      });

      console.log("login success");
      localStorage.setItem("token", JSON.stringify(response.data));
      if (localStorage.getItem("token") === null) {
        throw new Error(`No token`);
      }
      console.log(JSON.parse(localStorage.getItem("token") || "").accessToken);
    } catch (e) {}
  };

  return (
    <>
      <Setting>
        <Frame>
          <Logo>
            <I.Logo />
          </Logo>
          <Title>LOGIN</Title>
          <Description>앱을 사용하기 위해선 로그인이 필요합니다.</Description>
          <InputBox>
            <form onSubmit={onSubmit}>
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
            </form>
            <StyledLink to="/find">
              비밀번호 또는 아이디를 잊어버리셨나요?
            </StyledLink>
            <NextPage onClick={() => Login(id, pw)}>Login</NextPage>
          </InputBox>
        </Frame>
      </Setting>
    </>
  );
}

export default Login;
