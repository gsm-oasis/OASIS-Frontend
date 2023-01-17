import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CreateDiaryPage from "./pages/CreateDiaryPage";
import DiaryDetailPage from "./pages/DiaryDetailPage";
import LinkCouplePage from "./pages/LinkCouplePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SetDatePage from "./pages/SetDatePage";
import SignUpPage from "./pages/SignUpPage";
import QuestionCommentPage from "./pages/QuestionCommentPage";
import QuestionListPage from "./pages/QuestionListPage";
import DiaryListPage from "./pages/DiaryListPage";
import HeartLevelPage from "./pages/HeartLevelPage";
import { useRecoilState } from "recoil";
import { loggedAtom } from "./atoms/AtomContainer";
import FindPwIdPage from "./pages/FindPwIdPage";
import FindIdPage from "./pages/FindIdPage";
import ChangePwPage from "./pages/ChangePwPage";

function App() {
  const [logged] = useRecoilState(loggedAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (logged) navigate("/");
    else navigate("/login");
  }, [logged]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/find" element={<FindPwIdPage />} />
        <Route path="/findId" element={<FindIdPage />} />
        <Route path="/changePw" element={<ChangePwPage />} />
        <Route path="/linkcouple" element={<LinkCouplePage />} />
        <Route path="/setdate" element={<SetDatePage />} />
        <Route path="/diary" element={<DiaryDetailPage />} />
        <Route path="/createDiary" element={<CreateDiaryPage />} />
        <Route path="/questionComment" element={<QuestionCommentPage />} />
        <Route path="/questionList" element={<QuestionListPage />} />
        <Route path="/diaryList" element={<DiaryListPage />} />
        <Route path="/heartLevel" element={<HeartLevelPage />} />
      </Routes>
    </>
  );
}

export default App;
