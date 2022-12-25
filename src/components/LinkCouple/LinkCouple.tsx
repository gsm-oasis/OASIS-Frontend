import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../api/User";
import { Back } from "../../assets/svg";
import { ContentFrame, Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import { Box, BoxDescription, BoxText, Bt } from "../Common/BoxWithInput/style";
import { MyCode } from "./style";
import { InputCode } from "../Common/Inputs/InputCode";

function LinkCouple() {
  const navigate = useNavigate();
  const [coupleCode, setCoupleCode] = useState("");
  const CoupleCodeChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setCoupleCode(e.target.value);

  const LinkMyCouple = async () => {
    try {
      const response: any = await User.linkCouple(coupleCode);

      if (response.status === 200) {
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
          <ContentFrame>
            <Title>
              <div onClick={() => navigate("/login")}>
                <Back />
              </div>
              <TitleText>커플 연결</TitleText>
              <EmptyCompo></EmptyCompo>
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
          </ContentFrame>
        </Frame>
      </Setting>
    </>
  );
}

export default LinkCouple;
