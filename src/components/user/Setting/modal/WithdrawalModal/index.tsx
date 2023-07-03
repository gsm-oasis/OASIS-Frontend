import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import User from "../../../../../api/User";
import { loggedAtom } from "../../../../../atoms/AtomContainer";
import TokenService from "../../../../../lib/TokenService";
import ModalBackground from "../ModalBackground";
import * as S from "./style";
const WithdrawalModal = () => {
  const navigate = useNavigate();
  const [, setLogged] = useRecoilState(loggedAtom);
  const userWithdrawalModal = async () => {
    try {
      User.userWithdrawal(TokenService.getLocalAccessToken());
      setLogged(false);
      TokenService.removeUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ModalBackground />
      <S.Modal>
        <h3>정말 탈퇴하시겠습니까?</h3>
        <p>탈퇴 시 계정이 삭제되며, 커플 연결이 해제됩니다.</p>
        <button onClick={userWithdrawalModal}>회원 탈퇴</button>
      </S.Modal>
    </>
  );
};

export default WithdrawalModal;
