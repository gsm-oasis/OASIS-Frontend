import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  CutOffCoupleModalAtom,
  WithdrawalModalAtom,
} from "../../../../atoms/AtomContainer";

const Layout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #737373;
  opacity: 0.3;
  z-index: 9000;
`;

const ModalBackground = () => {
  const [, setWithdrawalModal] = useRecoilState(WithdrawalModalAtom);
  const [, setCutOffCoupleModal] = useRecoilState(CutOffCoupleModalAtom);

  const modalOff = () => {
    setWithdrawalModal(false);
    setCutOffCoupleModal(false);
  };

  return <Layout onClick={modalOff}></Layout>;
};

export default ModalBackground;
