import React, { useEffect, useState } from "react";
import { Frame, Setting } from "../../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../../Common/Title";
import * as I from "../../../assets/svg";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import User from "../../../api/User";
import TokenService from "../../../lib/TokenService";
import { toast } from "react-toastify";
import WithdrawalModal from "./modal/WithdrawalModal";
import { useRecoilState } from "recoil";
import {
  ChangeNameModalAtom,
  CutOffCoupleModalAtom,
  WithdrawalModalAtom,
} from "../../../atoms/AtomContainer";
import CutOffCoupleModal from "./modal/CutOffCoupleModal";
import ChangeNameModal from "./modal/ChangeNameModal";

function Settings() {
  const navigate = useNavigate();
  const [version, setVersion] = useState<string>("");
  const [myCode, setMyCode] = useState<string>("");
  const [withdrawalModal, setWithdrawalModal] =
    useRecoilState(WithdrawalModalAtom);
  const [cutOffCoupleModal, setCutOffCoupleModal] = useRecoilState(
    CutOffCoupleModalAtom
  );
  const [changeNameModal, setChangeNameModal] =
    useRecoilState(ChangeNameModalAtom);
  const getInfo = async () => {
    const { data }: any = await User.getInfo(
      TokenService.getLocalAccessToken()
    );
    setMyCode(data.myCode);
    setVersion(data.version);
  };

  const copyMyCode = () => {
    navigator.clipboard.writeText(myCode);
    toast.success("복사되었습니다.");
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      {withdrawalModal && <WithdrawalModal />}
      {cutOffCoupleModal && <CutOffCoupleModal />}
      {changeNameModal && <ChangeNameModal />}
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/")}>
              <I.Back />
            </div>
            <TitleText>설정</TitleText>
            <EmptyCompo />
          </Title>
          <S.ButtonBox>
            <S.Button onClick={() => navigate("/changePw")}>
              <S.Text>비밀번호 변경</S.Text>
              <I.Next />
            </S.Button>
            <S.Button onClick={() => setChangeNameModal(true)}>
              <S.Text>닉네임 변경</S.Text>
              <I.Next />
            </S.Button>
            <S.Button onClick={copyMyCode}>
              <S.Text>내 코드</S.Text>
              <S.MyCode>{myCode}</S.MyCode>
            </S.Button>
          </S.ButtonBox>

          <S.ColorButton
            color="#D9D9D9"
            onClick={() => setWithdrawalModal(true)}
          >
            회원 탈퇴
          </S.ColorButton>
          <S.ColorButton
            color="#F5CACB"
            onClick={() => setCutOffCoupleModal(true)}
          >
            커플 끊기
          </S.ColorButton>
          <S.Version>v {version}</S.Version>
        </Frame>
      </Setting>
    </>
  );
}

export default Settings;
