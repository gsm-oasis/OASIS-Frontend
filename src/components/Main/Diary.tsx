import React from "react";
import { Plus } from "../../assets/svg";
import { DiaryContent } from "../../interfaces/MainInterface";

import * as S from "./style";

interface DiaryProps {
  DiaryProps: DiaryContent;
}

function DiaryList(props: DiaryProps): JSX.Element {
  return (
    <>
      <S.DiaryFrame>
        <S.DTitle>공유일기</S.DTitle>
        <Plus />
        {/* props를 받아서 map을 이용해서 리스트 출력 화면고정하고 스크롤 구글링해서 적용 */}
        {props.DiaryProps.title}
      </S.DiaryFrame>
    </>
  );
}

export default DiaryList;
