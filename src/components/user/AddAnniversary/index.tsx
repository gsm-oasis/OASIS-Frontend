import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../../api/User";
import { Back } from "../../../assets/svg";
import { ContentFrame, Frame, Setting } from "../../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../../Common/Title";
import {
  Box,
  BoxDescription,
  BoxText,
  Bt,
} from "../../Common/BoxWithInput/style";
import { InputCode } from "../../Common/Inputs/InputCode";
import TokenService from "../../../lib/TokenService";
import { useRecoilState } from "recoil";
import { loggedAtom } from "../../../atoms/AtomContainer";
import { toast } from "react-toastify";

function SetBirthday() {
  const navigate = useNavigate();
  const [, setLogged] = useRecoilState(loggedAtom);
  const [birthday, setBirthday] = useState("");
  const birthdayChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setBirthday(e.target.value);

  const setBirthDay = async () => {
    try {
      await User.setBirthday(birthday);

      navigate("/");
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error("다시 입력해주세요!");
      }
    }
  };

  return (
    <>
      <Setting>
        <Frame>
          <ContentFrame>
            <Title>
              <div
                onClick={() => {
                  TokenService.removeUser();
                  setLogged(false);
                  navigate("/login");
                }}
              >
                <Back />
              </div>
              <TitleText>생일 입력</TitleText>
              <EmptyCompo></EmptyCompo>
            </Title>
            <Box>
              <BoxText>기념일 생성을 위해 자신의 생일을 입력해주세요!</BoxText>
              <BoxDescription>자신의 생일을 입력해주세요</BoxDescription>
              <InputCode
                onChange={birthdayChange}
                value={birthday}
                placeholder="ex) 0629"
              ></InputCode>
              <Bt onClick={setBirthDay}>확인</Bt>
            </Box>
          </ContentFrame>
        </Frame>
      </Setting>
    </>
  );
}

export default SetBirthday;
