import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../../api/Auth";
import { Back } from "../../../assets/svg";
import { Frame, Setting } from "../../Common/Frame";
import { Box, BoxDescription, BoxText, Bt, Title, TitleText } from "../Common";
import { InputCode } from "../LinkCouple/style";

function SetDate() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const DataChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setDate(e.target.value);

  const SubmitDate = async () => {
    try {
      const response: any = await Auth.submitDate(date);
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
            <div style={{ width: 1 }}></div>
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
