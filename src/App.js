import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import JoinPage from "./components/Join/JoinPage";
import MainPage from './components/MainPage/MainPage'



function App() {
  const App = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
  return (
    <App>
      <Routes>
        <Route path="/" element={<JoinPage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </App>
  );
}

export default App;
