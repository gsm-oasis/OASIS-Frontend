import AxiosInstance from "../lib/axios";
import { instance } from "../lib/Interceptor";
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

  // postMyComment(comment: string, token: string) {
  //   try {
  //     const request = instance({
  //       method: "POST",
  //       url: getComment.postComment() + "",
  //       data: {
  //         answer: comment,
  //       },
  //       headers: {
  //         Authorization: token ? "Bearer " + token : "",
  //       },
  //     });
  //     return request;
  //   } catch (error) {
  //     return error;
  //   }
  // }

  postMyComment(id: number, comment: string, token: string) {
    try {
      const request = instance.post(
        getComment.postComment() + `${id}`,
        {
          answer: comment,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      return request;
    } catch (error) {
      return error;
    }
  }
}

export default new MainQuestion();
