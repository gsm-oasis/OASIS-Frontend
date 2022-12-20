import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Auth from "../../api/Auth";
import { BlankHeart, Heart } from "../../assets/svg";
import { MyCoupleNameAtom, nickNameAtom } from "../../atoms/AtomContainer";
import TokenService from "../../lib/TokenService";
import { Frame, Setting } from "../Common/Frame";
import {
  CoupleName,
  DateDays,
  LeftBox,
  RightBox,
  ToAnniversary,
  Top,
} from "./style";

function Main() {
  const [myCoupleName, setMyName] = useRecoilState(nickNameAtom);
  const [myName, setCoupleName] = useRecoilState(MyCoupleNameAtom);
  const [dateDays, setDays] = useState(0);
  const [anniversary, setAnnivers] = useState(100);

  const PostMain = async () => {
    try {
      const response: any = await Auth.postMain(
        TokenService.getLocalAccessToken()
      ); // 요청받고 처리코드 짜야됨
      console.log(response.data);
      setDays(response.data.datingDate);
      setCoupleName(response.data.coupleNickname);
      setMyName(response.data.nickname);
      anniversCheck();
    } catch (error) {
      return error;
    }
  };

  const anniversCheck = () => {
    setAnnivers((dateDays / 100 + 1) * 100);
  };

  useEffect(() => {
    PostMain();
  }, []);

  return (
    <>
      <Setting>
        <Frame>
          <Top>
            <LeftBox>
              <CoupleName>
                <div>{myCoupleName}</div>
                <Heart />
                <div>{myName}</div>
              </CoupleName>
              <DateDays>{dateDays} DAYS</DateDays>
              <ToAnniversary>
                {anniversary}일만큼 {anniversary - dateDays}일 남았어요!
              </ToAnniversary>
            </LeftBox>
            <RightBox>
              <BlankHeart />
            </RightBox>
          </Top>
        </Frame>
      </Setting>
    </>
  );
}

export default Main;
