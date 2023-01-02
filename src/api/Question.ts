import AxiosInstance from "../lib/axios";
import { getComment } from "../utils/getUrl";

class MainQuestion {
  getDiaryComment(questionId: number, token: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getComment.getComment() + `${questionId}`,
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new MainQuestion();
