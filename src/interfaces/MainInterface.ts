export interface DiaryProps {
  nickname: string;
  coupleNickname: string;
  heartLevel: number;
  datingDate: number;
  severalHundredDays: number;
  daysLeft: number;
  anniversaryName?: number;
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
