export interface diaryDetail {
  imgs: [{ idx: number; imageUrl: "" }];
  title: string;
  content: string;
  mood: string;
  createDate: string;
  moodColor: string;
}

export interface diaryCreateContent {
  imgs: string[];
  title: string;
  content: string;
  mood: string | undefined;
  writer: string;
  moodColor: string;
}

export interface DiaryListType {
  diaries: [];
}
