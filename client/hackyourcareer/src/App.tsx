import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CareerTest from "./Components/test/CareerTest";
import TestResults from "./results/TestResults";
import MatchedMentors from "./Components/matched/MatchedMentors";
import MentorDetail from "./Components/mentor/MentorDetail";
import LandingPage from "./Components/landing/LandingPage";
import ResultItem from "./results/ResultsItem";
import MenteeSignup from "./Components/form/MenteeSignup";
import Login from "./Components/signin/Loginn";

function App() {
  const [quizResults, setQuizResults] = useState([] as ResultItem[]);

  const handleQuizCompletion = (results: ResultItem[]) => {
    setQuizResults(results);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<MenteeSignup />} />
          <Route
            path="/test"
            element={<CareerTest onCompletion={handleQuizCompletion} />}
          />
          <Route
            path="/results"
            element={<TestResults results={quizResults} />}
          />
          <Route path="/mentors/:trajectory" element={<MatchedMentors />} />
          <Route path="/mentor/:name" element={<MentorDetail />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
