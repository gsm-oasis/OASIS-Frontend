import {
  diaryContent,
  diaryCreateContent,
  diaryDetail,
} from "../interfaces/DiaryInterface";
import AxiosInstance from "../lib/axios";
import { getDiary, getImage } from "../utils/getUrl";

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

  postCreateDiary(data: diaryContent, token: string) {
    try {
      return AxiosInstance(
        {
          method: "POST",
          url: getDiary.createDiary(),
          data,
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  postImage(data: FormData, token: string) {
    try {
      return AxiosInstance(
        {
          method: "POST",
          url: getImage.postImage(),
          data,
          headers: {
            "Content-type": "multipart/form-data",
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
