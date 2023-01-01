import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateDiaryPage from "./pages/CreateDiaryPage";
import DiaryDetailPage from "./pages/DiaryDetailPage";
import LinkCouplePage from "./pages/LinkCouplePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SetDatePage from "./pages/SetDatePage";
import SignUpPage from "./pages/SignUpPage";
import DiaryCommentPage from "./pages/QuestionCommentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/linkcouple" element={<LinkCouplePage />} />
        <Route path="/setdate" element={<SetDatePage />} />
        <Route path="/diary" element={<DiaryDetailPage />} />
        <Route path="/createDiary" element={<CreateDiaryPage />} />
        <Route path="/diaryComment" element={<DiaryCommentPage />} />
      </Routes>
    </>
  );
}

export default App;
