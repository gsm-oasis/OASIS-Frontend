export interface QuestionContent {
  userName: string;
  coupleName: string;
  answer: string;
  coupleAnswer: string;
}

export interface QuestionListType {
  questions: [];
}

export interface QuestionListContent {
  questionId: number;
  content: string;
}
