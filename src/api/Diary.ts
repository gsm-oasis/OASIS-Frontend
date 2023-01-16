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

  postCreateDiary(data: FormData, token: string) {
    try {
      return AxiosInstance(
        {
          method: "POST",
          url: getDiary.createDiary(),
          data,
        },
        token,
        true
      );
    } catch (error) {
      return error;
    }
  }

  getDiaryList(token: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getDiary.getList(),
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Diary();
