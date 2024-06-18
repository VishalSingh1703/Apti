import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import QuestionList from './Components/Questionlist';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questions/:path" element={<QuestionList />} />
            </Routes>
        </Router>
    );
}

export default App;
