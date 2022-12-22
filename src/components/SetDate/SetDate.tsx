import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Back } from "../../assets/svg";
import { Frame, Setting } from "../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../Common/Title";
import { Box, BoxDescription, BoxText, Bt } from "../Common/BoxWithInput/style";
import { InputCode } from "../Common/Inputs/InputCode";
import Main from "../../api/Main";

function SetDate() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const DataChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setDate(e.target.value);

  const SubmitDate = async () => {
    try {
      const response: any = await Main.submitDate(date);
      if (response.status === 200) {
        console.log(response.status);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/linkcouple")}>
              <Back />
            </div>
            <TitleText>사귄 날짜 입력</TitleText>
            <EmptyCompo></EmptyCompo>
          </Title>

          <Box>
            <BoxText>사귄 날짜를 표시하기 위해서 시작일이 필요해요!</BoxText>
            <BoxDescription>사귀기 시작한 날짜를 입력해주세요</BoxDescription>
            <InputCode
              placeholder="ex) 20001021"
              onChange={DataChange}
              value={date}
            ></InputCode>
            <Bt onClick={SubmitDate}>확인</Bt>
          </Box>
        </Frame>
      </Setting>
    </>
  );
}

export default SetDate;
