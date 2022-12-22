import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Diary from "../../../api/Diary";
import { Plus } from "../../../assets/svg";
import { DiaryContentAtom } from "../../../atoms/AtomContainer";
import { diaryDetail } from "../../../interfaces/DiaryInterface";
import { DiaryContent } from "../../../interfaces/MainInterface";
import TokenService from "../../../lib/TokenService";

import * as S from "./style";

interface DiaryProps {
  DiaryProps: DiaryContent;
}

function DiaryList(props: DiaryProps): JSX.Element {
  const navigate = useNavigate();
  const [, setDiaryContent] = useRecoilState(DiaryContentAtom);

  const ClickDiary = async () => {
    try {
      const response: any = await Diary.getDiaryContent(
        props.DiaryProps.diaryId,
        TokenService.getLocalAccessToken()
      );
      setDiaryContent(response.data);
      navigate("");
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      {/* props를 받아서 map을 이용해서 리스트 출력 화면고정하고 스크롤 구글링해서 적용 */}
      <S.DiaryBox onClick={ClickDiary}>
        <S.DiaryTextFrame>
          <S.DiaryTitleFrame>
            <S.DiaryTitle>{props.DiaryProps.title}</S.DiaryTitle>
            <S.DiaryDate>{props.DiaryProps.createDate}</S.DiaryDate>
          </S.DiaryTitleFrame>
          <S.DiaryBody>{props.DiaryProps.content}</S.DiaryBody>
          <S.CreatePersonWrapper>
            <S.Circle />
            {props.DiaryProps.writer}
          </S.CreatePersonWrapper>
        </S.DiaryTextFrame>
      </S.DiaryBox>
    </>
  );
}

export default DiaryList;
