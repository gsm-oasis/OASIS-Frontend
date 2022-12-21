export interface DiaryProps {
  nickname: string;
  coupleNickname: string;
  heartLevel: number;
  datingDate: number;
  anniversary: number;
  questionId: number;
  content: string;
  diarys: [];
}

export interface DiaryContent {
  title: string;
  content: string;
  writer: string;
  createDate: string;
}
