import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import User from "../../../../../api/User";
import {
  loggedAtom,
  WithdrawalModalAtom,
} from "../../../../../atoms/AtomContainer";
import TokenService from "../../../../../lib/TokenService";
import ModalBackground from "../ModalBackground";
import * as S from "./style";
import { toast } from "react-toastify";
const WithdrawalModal = () => {
  const navigate = useNavigate();
  const [, setLogged] = useRecoilState(loggedAtom);
  const [, setWithdrawalModal] = useRecoilState(WithdrawalModalAtom);
  const userWithdrawalModal = async () => {
    try {
      await User.userWithdrawal(TokenService.getLocalAccessToken());
      setLogged(false);
      setWithdrawalModal(false);
      TokenService.removeUser();
      navigate("/login");
    } catch (e: any) {
      if (e.response.status === 404) {
        toast.error("404 Not Found");
      }
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
