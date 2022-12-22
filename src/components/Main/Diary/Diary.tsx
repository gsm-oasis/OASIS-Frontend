import React from "react";
import { Plus } from "../../../assets/svg";
import { DiaryContent } from "../../../interfaces/MainInterface";

import * as S from "./style";

interface DiaryProps {
  DiaryProps: DiaryContent;
}

function DiaryList(props: DiaryProps): JSX.Element {
  return (
    <>
      {/* props를 받아서 map을 이용해서 리스트 출력 화면고정하고 스크롤 구글링해서 적용 */}
      <S.DiaryBox>
        <S.DiaryTextFrame>
          <S.DiaryTitleFrame>
            <S.DiaryTitle>{props.DiaryProps.title}</S.DiaryTitle>
            <S.DiaryDate>{props.DiaryProps.createDate}</S.DiaryDate>
          </S.DiaryTitleFrame>
          <S.DiaryBody>{props.DiaryProps.content}</S.DiaryBody>
        </S.DiaryTextFrame>
      </S.DiaryBox>
    </>
  );
}

export default DiaryList;
