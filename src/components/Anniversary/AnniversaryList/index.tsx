import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../../Common/Title";
import * as S from "./style";
import * as I from "../../../assets/svg";
import Anniversary from "../../../api/Anniversary";
import { useRecoilState } from "recoil";
import { AddAnniversaryModalAtom } from "../../../atoms/AtomContainer";
import AddAnniversaryModal from "../AddAnniversaryModal";

interface anniversaryType {
  idx: number;
  name: string;
  date: string;
}
const AnniversaryList = () => {
  const [anniversaryList, setAnniversaryList] = useState<anniversaryType[]>([]);
  const navigate = useNavigate();
  const [addAnniversaryModal, setAddAnniversaryModal] = useRecoilState(
    AddAnniversaryModalAtom
  );

  const getAnniversary = async () => {
    try {
      const res: any = await Anniversary.getAnniversaryList();
      setAnniversaryList(res.data);
    } catch (error) {
      navigate("/");
    }
  };
  useEffect(() => {
    getAnniversary();
  }, []);

  return (
    <>
      {addAnniversaryModal && (
        <AddAnniversaryModal list={anniversaryList.length} />
      )}
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/")}>
              <I.Back />
            </div>
            <TitleText>기념일</TitleText>
            <EmptyCompo />
          </Title>
          <S.Layout>
            <>
              <S.Add onClick={() => setAddAnniversaryModal(true)}>
                <I.Plus />
              </S.Add>
              {anniversaryList.length !== 0 ? (
                anniversaryList.map((anniversary: anniversaryType) => (
                  <S.Anniversary key={anniversary.idx}>
                    <h3>{anniversary.name}</h3>
                    <p>
                      {anniversary.date.substring(0, 2)}.
                      {anniversary.date.substring(2, 4)}
                    </p>
                  </S.Anniversary>
                ))
              ) : (
                <p>기념일을 추가해보세요!</p>
              )}
            </>
          </S.Layout>
        </Frame>
      </Setting>
    </>
  );
};

export default AnniversaryList;
