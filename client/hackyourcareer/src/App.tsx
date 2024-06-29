import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninSide from "./Components/signin/SignInSide";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SigninSide />} />
          {/* Add more routes if necessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
