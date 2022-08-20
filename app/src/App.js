import React from "react";
import Map from "./components/Map";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import IndexPage from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/app" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
