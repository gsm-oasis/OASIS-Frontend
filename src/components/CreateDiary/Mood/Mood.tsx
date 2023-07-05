import React from "react";
import { useRecoilState } from "recoil";
import { MoodAtom } from "../../../atoms/AtomContainer";
import * as S from "../style";

function Mood() {
  const [moods, setMoods] = useRecoilState(MoodAtom);

  const Moods = [
    { name: "행복", moodColor: "#fa898b" },
    { name: "설렘", moodColor: "#f5cacb" },
    { name: "무난", moodColor: "#a0e5a3" },
    { name: "슬픔", moodColor: "#c1d9f0" },
    { name: "후회", moodColor: "#959595" },
  ];

  const btnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selected = Moods.filter((color) => color.name === value);
    if (selected) {
      setMoods(selected[0]);
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
                moodColor={moods.moodColor}
                type="radio"
                checked={mood.name === moods?.name}
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
