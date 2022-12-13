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
import { LoginInterface } from "../utils/AuthInterface";
//import Auth from "../api/Auth";
import { useForm } from "react-hook-form";

function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInterface>();

  const Login = async (data: LoginInterface) => {
    try {
      console.log(data.id);
      console.log(data.password);

      //const response: any = await Auth.login(data);

      console.log("login success");
      //localStorage.setItem("token", JSON.stringify(response.data));
      if (localStorage.getItem("token") === null) {
        throw new Error(`No token`);
      }
      console.log(JSON.parse(localStorage.getItem("token") || "").accessToken);
    } catch (e) {
      alert("아이디 또는 비밀번호가 올바르지 않아요!");
    }
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
          <form onSubmit={handleSubmit(Login)}>
            <InputBox>
              <Input
                placeholder="아이디를 입력해주세요"
                {...register("id", { required: true, maxLength: 8 })}
              ></Input>
              <Input
                placeholder="비밀번호를 입력해주세요"
                {...register("password", { required: true })}
              ></Input>

              <StyledLink to="/find">
                비밀번호 또는 아이디를 잊어버리셨나요?
              </StyledLink>
              <NextPage>Login</NextPage>
            </InputBox>
          </form>
        </Frame>
      </Setting>
    </>
  );
}

export default Login;
