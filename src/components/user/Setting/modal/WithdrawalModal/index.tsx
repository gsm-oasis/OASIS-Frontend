import React from "react";
import ModalBackground from "../ModalBackground";
import * as S from "./style";
const WithdrawalModal = () => {
  return (
    <>
      <ModalBackground />
      <S.Modal>
        <h3>정말 탈퇴하시겠습니까?</h3>
        <p>탈퇴 시 계정이 삭제되며, 커플 연결이 해제됩니다.</p>
        <button>회원 탈퇴</button>
      </S.Modal>
    </>
  );
};

export default WithdrawalModal;
