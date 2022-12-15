import {
  Description,
  Frame,
  InputBox,
  Logo,
  NextPage,
  Setting,
  Title,
} from "../../styles/A";
import * as I from "../../assets/svg";
import { SignUpInterface } from "../../interfaces/AuthInterface";
import IDPW from "./IDPW";
import { useRecoilValue } from "recoil";
import {
  SignUpPageAtom,
  userIdAtom,
  passwordAtom,
  emailAtom,
  nickNameAtom,
} from "../../atoms/AtomContainer";

import EmailNickName from "./EmailNickName";
import Auth from "../../api/Auth";
import { useNavigate } from "react-router-dom";

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
      console.log(data);
      const res: any = await Auth.signup(data);
      console.log(res.status);
      if (res.status === 201) {
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
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
                <NextPage onClick={() => PostSignUp(user)}>회원가입</NextPage>
              </>
            )}
          </InputBox>
        </Frame>
      </Setting>
    </>
  );
}

export default SignUp;
