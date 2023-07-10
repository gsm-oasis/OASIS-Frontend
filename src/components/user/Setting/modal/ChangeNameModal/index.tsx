import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import User from "../../../../../api/User";
import { ChangeNameModalAtom } from "../../../../../atoms/AtomContainer";
import TokenService from "../../../../../lib/TokenService";
import ModalBackground from "../ModalBackground";
import * as S from "./style";
const ChangeNameModal = () => {
  const [, setChangeNameModal] = useRecoilState(ChangeNameModalAtom);
  const nickname = useRef<HTMLInputElement>(null);

  const changeNickname = async (event: any) => {
    try {
      event.preventDefault();
      if (nickname.current) {
        await User.changeNickname(
          nickname.current.value,
          TokenService.getLocalAccessToken()
        );
      }
      setChangeNameModal(false);
      toast.success(`닉네임을 ${nickname.current?.value}님으로 변경했습니다.`);
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
        <h3>닉네임을 입력해주세요!</h3>
        <p>닉네임은 설정에서 언제든지 변경 가능합니다.</p>
        <input ref={nickname} />
        <button onClick={changeNickname}>닉네임 변경</button>
      </S.Modal>
    </>
  );
};

export default ChangeNameModal;
