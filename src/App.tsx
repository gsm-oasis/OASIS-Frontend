import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./App.css";
import { isCoupleAtom, loggedAtom } from "./atoms/AtomContainer";
import CreateDiaryPage from "./pages/CreateDiaryPage";
import DiaryDetailPage from "./pages/DiaryDetailPage";
import LinkCouplePage from "./pages/LinkCouplePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SetDatePage from "./pages/SetDatePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const logged = useRecoilValue(loggedAtom);
  const isCouple = useRecoilValue(isCoupleAtom);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(logged);
    if (logged) {
      // 커플 연결했는지 않했는지 검사후 메인으로 가기
      if (isCouple) {
        // true이면 커플 연결된 상태
        // navigate("/");
      } else navigate("/linkcouple");
    } else navigate("/login");
  }, [logged]); // 이거 커플이면 메인화면가는건데 다른페이지(일기디테일페이지)도 못들어가게함

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
      </Routes>
    </>
  );
}

export default App;
