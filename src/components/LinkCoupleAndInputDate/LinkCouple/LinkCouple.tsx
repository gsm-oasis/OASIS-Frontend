import React, { useState } from "react";
import Auth from "../../../api/Auth";
import { Back } from "../../../assets/svg";
import { Frame, Setting } from "../../Common/Frame";
import { Box, BoxDescription, BoxText, Bt, Title, TitleText } from "../Common";
import { InputCode, MyCode } from "./style";

function LinkCouple() {
  const [coupleCode, setCoupleCode] = useState("");
  const CoupleCodeChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCoupleCode(e.target.value);

  const LinkMyCouple = async () => {
    try {
      const response: any = await Auth.linkCouple(coupleCode);
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <Back />
            <TitleText>커플 연결</TitleText>
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
