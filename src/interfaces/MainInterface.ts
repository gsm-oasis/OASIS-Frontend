export interface DiaryProps {
  nickname: string;
  coupleNickname: string;
  heartLevel: number;
  datingDate: number;
  daysLeft: number;
  anniversary?: number;
  questionId: number;
  content: string;
  diaries: [];
}

export interface DiaryContent {
  diaryId: number;
  title: string;
  content: string;
  writer: string;
  createDate: string;
}
