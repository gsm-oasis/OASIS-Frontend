export interface diaryDetail {
  imgs: [{ id: number; imageUrl: "" }];
  title: string;
  content: string;
  mood: string;
  createDate: string;
}

export interface diaryContent {
  title: string;
  content: string;
  mood: string | undefined;
  writer: string;
}

export interface diaryCreateContent {
  imgs: string[];
  title: string;
  content: string;
  mood: string | undefined;
  writer: string;
}
