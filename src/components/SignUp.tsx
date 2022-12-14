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
import { SignUpInterface } from "../interfaces/AuthInterface";
import { useForm } from "react-hook-form";

function SignUp(): JSX.Element {
  const [next, setNext] = useState(false);
  const [checkEmail, setCheckEmail] = useState("");

  const onChangeCheckEmail: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCheckEmail(e.target.value);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpInterface>();

  const Check = () => {
    setNext(true);
  };

  const emailConfirm = async () => {
    try {
    } catch (error) {}
  };

  const postEmail = async () => {
    try {
    } catch (error) {}
  };

  const onValid = async (data: SignUpInterface) => {
    try {
      console.log(data.id);
    } catch (e) {}
  };

  const inValid = (error: any) => {
    console.log(error);
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
          <form onSubmit={handleSubmit(onValid, inValid)}>
            <InputBox>
              {!next && (
                <>
                  <Input
                    placeholder="아이디를 입력해주세요"
                    {...register("id", { required: true })}
                  ></Input>
                  <Input
                    placeholder="비밀번호를 입력해주세요"
                    {...register("password", { required: true })}
                  ></Input>
                </>
              )}
              {!next && <NextPage onClick={Check}>다음</NextPage>}
              {next && (
                <>
                  <Input
                    placeholder="닉네임을 입력해주세요"
                    {...register("nickName", { required: true })}
                  ></Input>
                  <InputAndButton>
                    <Input
                      placeholder="ex) user1234@naver.com"
                      {...register("email", { required: true })}
                      style={{ width: "200px" }}
                    ></Input>
                    <CheckButton onClick={postEmail}>전송</CheckButton>
                  </InputAndButton>
                  <InputAndButton>
                    <Input
                      placeholder="인증번호 입력해주세요"
                      onChange={onChangeCheckEmail}
                      style={{ width: "200px" }}
                    ></Input>
                    <CheckButton onClick={emailConfirm}>인증</CheckButton>
                  </InputAndButton>
                </>
              )}
              {next && <NextPage>회원가입</NextPage>}
            </InputBox>
          </form>
        </Frame>
      </Setting>
    </>
  );
}

export default SignUp;
