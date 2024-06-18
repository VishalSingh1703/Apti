import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from './Question';
import axios from 'axios';
import topics from '../config/configuration';

const QuestionList = () => {
    const { path } = useParams();
    const [questions, setQuestions] = useState([]);
    const [solvedCount, setSolvedCount] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/questions/${path}`);
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, [path]);

    const handleCheckboxChange = (checked) => {
        setSolvedCount(solvedCount + (checked ? 1 : -1));
    };

    // Find the current topic based on the path
    const currentTopic = topics.find(topic => topic.path === `/${path}`);

    return (
        <div style={styles.container}>
            {currentTopic && (
                <div style={styles.card}>
                    <h2>{currentTopic.title}</h2>
                    <p>Prepare for {currentTopic.title} with our comprehensive resources and practice questions.</p>
                </div>
            )}
            <div style={styles.topicWrapper}>
                <div style={styles.progressBarContainer}>
                    <div style={{ ...styles.progressBar, width: `${(solvedCount / questions.length) * 100}%` }}></div>
                </div>
                <div style={styles.progressText}>{solvedCount}/{questions.length} questions solved</div>
            </div>
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

const styles = {
    container: {
        width: '80%',
        margin: '20px auto',
    },
    card: {
        padding: '20px',
        marginBottom: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    topicWrapper: {
        marginBottom: '10px',
    },
    progressBarContainer: {
        width: '100%',
        backgroundColor: '#e0e0df',
        height: '10px',
        borderRadius: '5px',
        marginBottom: '5px',
        overflow: 'hidden',
        position: 'relative',
    },
    progressBar: {
        height: '10px',
        backgroundColor: '#76c7c0',
        borderRadius: '5px 0 0 5px',
    },
    progressText: {
        marginRight: '10px',
        fontSize: '0.8rem',
        color: '#333',
        textAlign: 'center',
    },
};
