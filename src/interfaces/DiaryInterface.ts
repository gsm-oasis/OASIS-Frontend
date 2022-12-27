export interface diaryDetail {
  imgs: [{ id: number; imageUrl: "" }];
  title: string;
  content: string;
  mood: string;
  createDate: string;
}

export interface diaryCreateContent {
  imgs: [{ imageUrl: "" }];
  title: string;
  content: string;
  mood: string;
  writer: string;
}
