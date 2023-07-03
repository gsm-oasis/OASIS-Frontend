import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import User from "../../../../../api/User";
import {
  CutOffCoupleModalAtom,
  loggedAtom,
} from "../../../../../atoms/AtomContainer";
import TokenService from "../../../../../lib/TokenService";
import ModalBackground from "../ModalBackground";
import * as S from "./style";
const CutOffCoupleModal = () => {
  const navigate = useNavigate();
  const [, setLogged] = useRecoilState(loggedAtom);
  const [, setCutOffCoupleModal] = useRecoilState(CutOffCoupleModalAtom);
  const cutOffCouple = async () => {
    try {
      await User.cutOffCouple(TokenService.getLocalAccessToken());
      setLogged(false);
      setCutOffCoupleModal(false);
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
        <h3>정말 커플을 끊으시겠습니까?</h3>
        <p>정말 유감입니다. 재회의 마음은 없으신거죠..?</p>
        <button onClick={cutOffCouple}>커플 끊기</button>
      </S.Modal>
    </>
  );
};

export default CutOffCoupleModal;
