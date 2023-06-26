import AxiosInstance from "../lib/axios";
import { getQuestion } from "../utils/getUrl";

class MainQuestion {
  getDiaryComment(questionId: number, token: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getQuestion.comment() + `${questionId}`,
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  postMyComment(id: number, comment: string, token: string) {
    try {
      return AxiosInstance(
        {
          method: "POST",
          url: getQuestion.comment() + `${id}`,
          data: {
            answer: comment,
          },
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  getQuestionList(token: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getQuestion.getList(),
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new MainQuestion();
