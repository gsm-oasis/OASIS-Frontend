import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./App.css";
import { loggedAtom } from "./atoms/AtomContainer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const logged = useRecoilValue(loggedAtom);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(logged);
    if (logged) {
      navigate("/");
    } else navigate("/login");
  }, [logged]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
