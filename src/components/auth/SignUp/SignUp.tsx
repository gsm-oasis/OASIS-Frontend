import { BottomTextBox, Description, InputBox, Title } from "./style";
import * as I from "../../../assets/svg";
import { SignUpInterface } from "../../../interfaces/AuthInterface";
import IDPW from "./IDPW";
import { useRecoilValue } from "recoil";
import {
  SignUpPageAtom,
  userIdAtom,
  passwordAtom,
  emailAtom,
  nickNameAtom,
} from "../../../atoms/AtomContainer";

import EmailNickName from "./EmailNickName";
import Auth from "../../../api/Auth";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../../Common/Frame";
import { Logo } from "../../Common/Logos/BigLogo";
import { BottomText } from "../../Common/Texts/BottomText";
import { GradiantButton } from "../../Common/Buttons/GradiantButton";
import { toast } from "react-toastify";

function SignUp(): JSX.Element {
  const next: boolean = useRecoilValue(SignUpPageAtom);
  const id: string = useRecoilValue(userIdAtom);
  const pw: string = useRecoilValue(passwordAtom);
  const nickname: string = useRecoilValue(nickNameAtom);
  const email: string = useRecoilValue(emailAtom);
  const navigate = useNavigate();

  const user: SignUpInterface = {
    id: id,
    password: pw,
    email: email,
    nickname: nickname,
  };

  const PostSignUp = async (data: SignUpInterface) => {
    try {
      await Auth.signup(data);
      toast.success("회원가입 되었습니다!");
      navigate("/login");
    } catch (e: any) {
      if (e.response.status === 409) {
        toast.error("이미 존재하는 아이디에요!");
      }
    }
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
            {!next && <IDPW />}
            {next && (
              <>
                <EmailNickName />
                <GradiantButton onClick={() => PostSignUp(user)}>
                  회원가입
                </GradiantButton>
              </>
            )}
          </InputBox>
          <BottomTextBox>
            <BottomText color="#959595" weight="400">
              이미 계정이 있으신가요?{" "}
            </BottomText>
            <BottomText
              color="#E4B3B5"
              weight="700"
              onClick={() => navigate("/login")}
            >
              로그인
            </BottomText>
          </BottomTextBox>
        </Frame>
      </Setting>
    </>
  );
}

export default SignUp;
