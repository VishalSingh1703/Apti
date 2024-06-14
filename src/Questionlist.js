import React, { useState, useEffect } from 'react';
import Question from './Question';
import Progress from './ProgressBar';

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);
    const [solvedCount, setSolvedCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/questions')
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch((error) => console.error('Error fetching questions:', error));
    }, []);

    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setSolvedCount(solvedCount + 1);
        } else {
            setSolvedCount(solvedCount - 1);
        }
    };

    return (
        <div>
            <Progress current={solvedCount} total={questions.length} />
            {questions.map((question, index) => (
                <Question
                    key={index}
                    question={question}
                    index={index}
                    onCheckboxChange={handleCheckboxChange}
                />
            ))}
        </div>
    );
};

export default QuestionList;
