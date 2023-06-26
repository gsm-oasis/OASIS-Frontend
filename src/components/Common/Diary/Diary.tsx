import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Diary from "../../../api/Diary";
import { DiaryContentAtom } from "../../../atoms/AtomContainer";
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
      console.log(response.data);
      navigate(`/diary/` + props.DiaryProps.diaryId);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
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
