import React from "react";
import LandingPage from "./pages/LandingPage.jsx";
import Subjects from "./pages/Subjects.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Drawer from "./components/Drawer.jsx";
import Test from "./pages/Test.jsx";
import Score from "./pages/Score";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Drawer content={<LandingPage />}  />} />
          <Route path='/subjects' element={<Drawer content={<Subjects />} />} />
          <Route path='/subjects/:subject/score' element={<Drawer content={<Score />} />} />
          <Route path='/subjects/:subject/:type' element={<Test />} />
        </Routes>
      </BrowserRouter>
      <input type="checkbox" id="cancel-test" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure you want to exit?</h3>
          <p className="py-4">If you quit now your progess wouldn't be saved.</p>
          <div className="modal-action">
            <label htmlFor="cancel-test" className="btn btn-outline">Cancel</label>
            <a href="/subjects/" className="btn">Exit</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
