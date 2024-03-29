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
import { RecoilRoot, useRecoilState } from "recoil";
import { loggedAtom } from "./atoms/AtomContainer";
import FindPwIdPage from "./pages/FindPwIdPage";
import FindIdPage from "./pages/FindIdPage";
import ChangePwPage from "./pages/ChangePwPage";
import FindPwPage from "./pages/FindPwPage";
import SettingPage from "./pages/SettingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBirthdayPage from "./pages/AddBirthdayPage";
import TokenService from "./lib/TokenService";
import AnniversaryListPage from "./pages/AnniversaryListPage";

function App() {
  const [logged] = useRecoilState(loggedAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (TokenService.getLocalAccessToken() && logged) navigate("/");
    else {
      localStorage.removeItem("recoil-persist");
      navigate("/login");
    }
  }, [logged]);

  return (
    <>
      <RecoilRoot>
        <ToastContainer
          position="top-right"
          closeButton={false}
          autoClose={600}
        />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/find" element={<FindPwIdPage />} />
          <Route path="/findId" element={<FindIdPage />} />
          <Route path="/findPw" element={<FindPwPage />} />
          <Route path="/changePw" element={<ChangePwPage />} />
          <Route path="/linkcouple" element={<LinkCouplePage />} />
          <Route path="/birthday" element={<AddBirthdayPage />} />
          <Route path="/setdate" element={<SetDatePage />} />
          <Route path="/diary/:diaryId" element={<DiaryDetailPage />} />
          <Route path="/createDiary" element={<CreateDiaryPage />} />
          <Route path="/questionComment" element={<QuestionCommentPage />} />
          <Route path="/questionList" element={<QuestionListPage />} />
          <Route path="/diaryList" element={<DiaryListPage />} />
          <Route path="/heartLevel" element={<HeartLevelPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/anniversary" element={<AnniversaryListPage />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
