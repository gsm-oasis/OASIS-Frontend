import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./App.css";
import { loggedAtom } from "./atoms/AtomContainer";
import LinkCouplePage from "./pages/LinkCouplePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SetDatePage from "./pages/SetDatePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const logged = useRecoilValue(loggedAtom);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(logged);
    if (logged) {
      // 커플 연결했는지 않했는지 검사후 메인으로 가기
      navigate("/linkcouple");
    } else navigate("/login");
  }, [logged]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/linkcouple" element={<LinkCouplePage />} />
        <Route path="/setdate" element={<SetDatePage />} />
      </Routes>
    </>
  );
}

export default App;
