import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Auth from "../../../api/Auth";
import { Back } from "../../../assets/svg";
import { MyCoupleNameAtom } from "../../../atoms/AtomContainer";
import { Frame, Setting } from "../../Common/Frame";
import { Box, BoxDescription, BoxText, Bt, Title, TitleText } from "../Common";
import { InputCode, MyCode } from "./style";

function LinkCouple() {
  const navigate = useNavigate();
  const [coupleCode, setCoupleCode] = useState("");
  const [, setNamed] = useRecoilState(MyCoupleNameAtom);
  const CoupleCodeChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCoupleCode(e.target.value);

  const LinkMyCouple = async () => {
    try {
      const response: any = await Auth.linkCouple(coupleCode);

      if (response.status === 200) {
        setNamed(response.data.nickname);
        console.log(response.data.nickname);
        navigate("/setdate");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/login")}>
              <Back />
            </div>
            <TitleText>커플 연결</TitleText>
            <div style={{ width: 1 }}></div>
          </Title>
          <Box>
            <BoxText>내 코드</BoxText>
            <BoxDescription>
              내 코드를 상대방의 앱에 입력하거나, 상대방의 코드를 앱에
              입력해주세요!
            </BoxDescription>
            <MyCode>
              {JSON.parse(localStorage.getItem("token") || "").code}
            </MyCode>
          </Box>

          <Box>
            <BoxText>커플 연결을 위해 상대방의 코드를 입력해주세요!</BoxText>
            <BoxDescription>상대방의 코드를 입력해주세요</BoxDescription>
            <InputCode
              onChange={CoupleCodeChange}
              value={coupleCode}
            ></InputCode>
            <Bt onClick={LinkMyCouple}>확인</Bt>
          </Box>
        </Frame>
      </Setting>
    </>
  );
}

export default LinkCouple;
