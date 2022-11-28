import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import JoinPage from "./components/Join/JoinPage";



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
      </Routes>
    </App>
  );
}

export default App;
