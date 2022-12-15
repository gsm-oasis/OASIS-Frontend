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
import { LoginInterface } from "../interfaces/AuthInterface";
import { useForm } from "react-hook-form";
import Auth from "../api/Auth";
import { useRecoilState } from "recoil";
import { loggedAtom } from "../atoms/AtomContainer";

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginInterface>();

  const [, setLogged] = useRecoilState(loggedAtom);

  const onValid = async (data: LoginInterface) => {
    try {
      const response: any = await Auth.login(data);

      localStorage.setItem("token", JSON.stringify(response.data));
      if (localStorage.getItem("token") === null) {
        throw new Error(`No token`);
      }

      if (response.status === 200) {
        setLogged(true);
        console.log(
          JSON.parse(localStorage.getItem("token") || "").accessToken
        );
      }
    } catch (e) {
      console.log(e);
    }
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
          <Title>LOGIN</Title>
          <Description>앱을 사용하기 위해선 로그인이 필요합니다.</Description>
          <form onSubmit={handleSubmit(onValid, inValid)}>
            <InputBox>
              <Input
                placeholder="아이디를 입력해주세요"
                {...register("id", { required: true })}
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
          <div style={{ marginTop: 100, fontSize: 12 }}>
            <span style={{ color: "#959595" }}>이미 계정이 있으신가요? </span>
            <span style={{ color: "#E4B3B5", fontWeight: 700 }}>로그인</span>
          </div>
        </Frame>
      </Setting>
    </>
  );
}

export default Login;
