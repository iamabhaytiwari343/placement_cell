import React from "react";
import {Routes,Route,useNavigate} from 'react-router-dom';
import Login from "./components/Login";
import Home from "./container/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
          Learn React
        
    </div>
  );
}

export default App;
