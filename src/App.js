import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import JoinPage from "./components/Join/JoinPage";
import MainPage from './components/MainPage/MainPage'
import {ColorModeContext , useMode} from './Theme'
import {CssBaseline , ThemeProvider} from '@mui/material'



function App() {
  const App = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const [theme , colorMode] = useMode()
  return (
    <App>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
        <Route path="/" element={<JoinPage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </App>
  );
}

export default App;
