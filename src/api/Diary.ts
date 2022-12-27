import { diaryCreateContent } from "../interfaces/DiaryInterface";
import AxiosInstance from "../lib/axios";
import { getDiary } from "../utils/getUrl";

class Diary {
  getDiaryContent(diaryId: number, token: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getDiary.getDetail() + `/${diaryId}`,
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  postCreateDiary(data: diaryCreateContent, token: string) {
    try {
      return AxiosInstance(
        {
          method: "POST",
          url: getDiary.createDiary(),
          data: {
            imgs: data.imgs,
            title: data.title,
            content: data.content,
            mood: data.mood,
            writer: data.writer,
          },
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Diary();
