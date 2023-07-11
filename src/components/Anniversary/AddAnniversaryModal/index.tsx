import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import Anniversary from "../../../api/Anniversary";
import Heart from "../../../api/Heart";
import { AddAnniversaryModalAtom } from "../../../atoms/AtomContainer";
import * as S from "./style";
const AddAnniversaryModal = ({ list }: { list: number }) => {
  const [, setAddAnniversaryModal] = useRecoilState(AddAnniversaryModalAtom);
  const [count, setCount] = useState<number>(0);
  const name = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const setLimitCount = async () => {
    const { data }: any = await Heart.getHeartLevel();
    setCount(data.level + 2 - list);
  };
  const addAnniversary = async (event: any) => {
    try {
      event.preventDefault();
      if (name.current?.value === "" && date.current?.value === "") {
        toast.error("입력하신 내용을 확인해주세요.");
        return;
      } else if (name.current && date.current) {
        await Anniversary.addAnniversary(
          name.current.value,
          date.current.value
        );
        toast.success("기념일이 추가되었습니다!");
        setAddAnniversaryModal(false);
        navigate("/");
      }
    } catch (error: any) {
      if (error.response.status === 409) {
        toast.error("이미 등록된 기념일입니다.");
      }
    }
  };

  useEffect(() => {
    setLimitCount();
  }, []);

  return (
    <>
      <S.ModalBackground onClick={() => setAddAnniversaryModal(false)} />
      {count > 0 ? (
        <S.Modal>
          <h3>기념일 추가</h3>
          <p>기념일을 {count}개 더 추가할 수 있어요!</p>
          <input placeholder="ex) 생일파티" ref={name} />
          <input placeholder="ex) 0618" maxLength={4} ref={date} />
          <button onClick={addAnniversary}>추가</button>
        </S.Modal>
      ) : (
        <S.Modal height="150px">
          <h3>기념일 추가</h3>
          <p>기념일을 더이상 추가할 수 없습니다.🥺</p>
          <p>하트 레벨을 올려보세요!</p>
        </S.Modal>
      )}
    </>
  );
};

export default AddAnniversaryModal;
