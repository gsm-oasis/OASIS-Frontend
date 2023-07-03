import React from "react";
import ModalBackground from "../ModalBackground";
import * as S from "./style";
const CutOffCoupleModal = () => {
  return (
    <>
      <ModalBackground />
      <S.Modal>
        <h3>정말 커플을 끊으시겠습니까?</h3>
        <p>정말 유감입니다. 재회의 마음은 없으신거죠..?</p>
        <button>커플 끊기</button>
      </S.Modal>
    </>
  );
};

export default CutOffCoupleModal;
