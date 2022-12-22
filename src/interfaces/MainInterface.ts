export interface DiaryProps {
  nickname: string;
  coupleNickname: string;
  heartLevel: number;
  datingDate: number;
  anniversary?: number;
  questionId: number;
  content: string;
  diaryListPageResponse: [];
}

export interface DiaryContent {
  diaryId: number;
  title: string;
  content: string;
  writer: string;
  createDate: string;
}
