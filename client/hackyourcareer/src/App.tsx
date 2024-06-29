import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninSide from "./Components/signin/SignInSide";
import MenteeSignup from "./Components/form/MenteeSignup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SigninSide />} />
          <Route path="/signup" element={<MenteeSignup />} />
          {/* Add more routes if necessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
