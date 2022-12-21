import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { BlankHeart, Heart, SettingIcon } from "../../assets/svg";
import {
  AnniversaryDateAtom,
  DateDaysAtom,
  MyCoupleNameAtom,
  nickNameAtom,
} from "../../atoms/AtomContainer";
import TokenService from "../../lib/TokenService";
import { Frame, Setting } from "../Common/Frame";
import * as S from "./style";
import main from "../../api/Main";
import Question from "./Question";
import Diary from "./Diary";

function Main() {
  const [myCoupleName, setMyName] = useRecoilState(nickNameAtom);
  const [myName, setCoupleName] = useRecoilState(MyCoupleNameAtom);
  const [dateDays, setDays] = useRecoilState(DateDaysAtom);
  const [anniversary, setAnnivers] = useRecoilState(AnniversaryDateAtom);
  const [quesNum, setQuesNum] = useState(0);
  const [quesContent, setQuesCon] = useState("");

  const PostMain = async () => {
    try {
      const response: any = await main.postMain(
        TokenService.getLocalAccessToken()
      ); // 요청받고 처리코드 짜야됨
      setDays(response.data.datingDate);
      setCoupleName(response.data.coupleNickname);
      setMyName(response.data.nickname);
      setQuesNum(response.data.questionId);
      setQuesCon(response.data.content);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    PostMain();
  }, []);

  return (
    <>
      <Setting>
        <S.MainFrame>
          <S.Top>
            <S.LeftBox>
              <S.CoupleName>
                <div>{myCoupleName}</div>
                <Heart />
                <div>{myName}</div>
              </S.CoupleName>
              <S.DateDays>{dateDays} DAYS</S.DateDays>
              <S.ToAnniversary>
                {anniversary}일만큼 {anniversary - dateDays}일 남았어요!
              </S.ToAnniversary>
            </S.LeftBox>
            <S.RightBox>
              <BlankHeart />
              <SettingIcon />
            </S.RightBox>
          </S.Top>
          <Question questionNum={quesNum} content={quesContent} />
          <S.Line />
          <Diary />
        </S.MainFrame>
      </Setting>
    </>
  );
}

export default Main;
