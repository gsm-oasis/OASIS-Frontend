import React from "react";
import { useRecoilState } from "recoil";
import { MoodAtom } from "../../../atoms/AtomContainer";
import * as S from "../style";

function Mood() {
  const [btn, setBtn] = useRecoilState(MoodAtom);

  const Moods = [
    { name: "행복", color: "#fa898b" },
    { name: "설렘", color: "#f5cacb" },
    { name: "무난", color: "#a0e5a3" },
    { name: "슬픔", color: "#c1d9f0" },
    { name: "후회", color: "#80abd3" },
  ];

  const btnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selected = Moods.filter((color) => color.name === value);
    if (selected) {
      setBtn(selected[0]);
    }
  };

  return (
    <S.MoodSelectBox>
      <S.MoodDesc>오늘의 기분을 선택해주세요!</S.MoodDesc>
      <S.MoodCircleBox>
        {Moods.map((mood, index) => {
          return (
            <div key={index}>
              <S.MoodCircle
                id={mood.name}
                name="mood"
                value={mood.name}
                color={mood.color}
                type="radio"
                checked={mood.name === btn?.name}
                onChange={btnClick}
              ></S.MoodCircle>
              <S.MoodButton htmlFor={mood.name}>{mood.name}</S.MoodButton>
            </div>
          );
        })}
      </S.MoodCircleBox>
    </S.MoodSelectBox>
  );
}

export default Mood;
