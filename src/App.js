import React from 'react'
import {Routes , Route} from 'react-router-dom'
import JoinPage from './components/Join/JoinPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<JoinPage />}/>
      </Routes>
    </div>
  );
}

export default App;
