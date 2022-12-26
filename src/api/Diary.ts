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
}

export default new Diary();
