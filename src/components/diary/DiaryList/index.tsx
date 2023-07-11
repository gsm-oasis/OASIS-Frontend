import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Frame, Setting } from "../../Common/Frame";
import { EmptyCompo, Title, TitleText } from "../../Common/Title";
import * as I from "../../../assets/svg";
import { ScrollBox } from "../../Common/ScrollBox";
import DiaryList from "../../Common/Diary/Diary";
import Diary from "../../../api/Diary";
import TokenService from "../../../lib/TokenService";
import { DiaryContent } from "../../../interfaces/MainInterface";

function SharedDiaryList() {
  const navigate = useNavigate();
  const [diaryList, setDiaryList] = useState<[]>([]);

  const getDiaryList = async () => {
    try {
      const response: any = await Diary.getDiaryList(
        TokenService.getLocalAccessToken()
      );
      setDiaryList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDiaryList();
  }, []);

  return (
    <>
      <Setting>
        <Frame>
          <Title>
            <div onClick={() => navigate("/")}>
              <I.Back />
            </div>
            <TitleText>공유일기 목록</TitleText>
            <EmptyCompo />
          </Title>

          <ScrollBox>
            {diaryList &&
              diaryList?.map((diary: DiaryContent) => (
                <DiaryList key={diary.diaryId} DiaryProps={diary} />
              ))}
          </ScrollBox>
        </Frame>
      </Setting>
    </>
  );
}

export default SharedDiaryList;
