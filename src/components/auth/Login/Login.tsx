import * as S from "./style";
import * as I from "../../../assets/svg";
import { LoginInterface } from "../../../interfaces/AuthInterface";
import { useForm } from "react-hook-form";
import Auth from "../../../api/Auth";
import { useRecoilState, useRecoilValue } from "recoil";
import { isCoupleAtom, loggedAtom } from "../../../atoms/AtomContainer";
import { Frame, Setting } from "../../Common/Frame";
import { useNavigate } from "react-router-dom";
import { Input } from "../../Common/Inputs/AuthInput";
import { Logo } from "../../Common/Logos/BigLogo";
import { BottomText } from "../../Common/Texts/BottomText";
import { GradiantButton } from "../../Common/Buttons/GradiantButton";
import { useEffect } from "react";
import TokenService from "../../../lib/TokenService";
import { toast } from "react-toastify";

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginInterface>();
  const navigate = useNavigate();
  const [, setLogged] = useRecoilState(loggedAtom);
  const [, setisCouple] = useRecoilState(isCoupleAtom);

  const logged = useRecoilValue(loggedAtom);
  const isCouple = useRecoilValue(isCoupleAtom);

  useEffect(() => {
    if (logged) {
      if (isCouple) {
        navigate("/");
      } else navigate("/linkcouple");
    } else navigate("/login");
  }, [logged]);

  const onValid = async (data: LoginInterface) => {
    try {
      const response: any = await Auth.login(data);

      TokenService.setUser(response.data);

      if (response.status === 200) {
        setisCouple(response.data.isCouple);
        setLogged(true);
      }
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error("잘못된 비밀번호입니다!");
      } else if (e.response.status === 404) {
        toast.error("존재하지 않는 아이디에요!");
      }
    }
  };

  const inValid = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <Setting>
        <Frame>
          <Logo>
            <I.Logo />
          </Logo>
          <S.Title>LOGIN</S.Title>
          <S.Description>
            앱을 사용하기 위해선 로그인이 필요합니다.
          </S.Description>
          <form onSubmit={handleSubmit(onValid, inValid)}>
            <S.InputBox>
              <Input
                placeholder="아이디를 입력해주세요"
                {...register("id", { required: true })}
              ></Input>
              <Input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...register("password", { required: true })}
              ></Input>

              <S.StyledLink to="/find">
                비밀번호 또는 아이디를 잊어버리셨나요?
              </S.StyledLink>
              <GradiantButton>Login</GradiantButton>
            </S.InputBox>
          </form>
          <S.BottomTextBox>
            <BottomText color="#959595" weight="400">
              계정이 없으신가요?{" "}
            </BottomText>
            <BottomText
              color="#E4B3B5"
              weight="700"
              onClick={() => navigate("/signup")}
            >
              회원가입
            </BottomText>
          </S.BottomTextBox>
        </Frame>
      </Setting>
    </>
  );
}

export default Login;
