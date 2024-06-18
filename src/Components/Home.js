<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import topics from '../config/configuration';

const Home = () => {
    const [topicsWithQuestions, setTopicsWithQuestions] = useState([]);

    useEffect(() => {
        const fetchTopicData = async () => {
            try {
                const promises = topics.map(async (topic) => {
                    const response = await axios.get(`http://localhost:3000/questions${topic.path}`);
                    const totalQuestions = response.data.length;
                    return {
                        ...topic,
                        totalQuestions
                    };
                });

                const updatedTopics = await Promise.all(promises);
                setTopicsWithQuestions(updatedTopics);
            } catch (error) {
                console.error('Error fetching topic data:', error);
            }
        };

        fetchTopicData();
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2>Welcome to Aptitude Preparation</h2>
                <p>Prepare for your aptitude tests with our comprehensive resources and practice questions.</p>
            </div>
            <div style={styles.topicList}>
                {topicsWithQuestions.map((topic, index) => (
                    <div key={index} style={styles.topicWrapper}>
                        <div style={styles.progressBarContainer}>
                            <div style={{ ...styles.progressBar, width: `${(topic.solved / topic.total) * 100}%` }}></div>
                        </div>
                        <Link to={`/questions${topic.path}`} style={styles.topicCard}>
                            {topic.title}
                            <span style={styles.arrowContainer}>
                                <span style={styles.CountCard}>{topic.solved}/{topic.totalQuestions}</span>
                                <span style={styles.arrow}>&rarr;</span>
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import topics from '../config/configuration';

const Home = () => {
    return (
        <div className="container">
            <h1 className="my-4">Aptitude Practice Topics</h1>
            <ul className="list-group">
                {topics.map((topic, index) => (
                    <li key={index} className="list-group-item">
                        <Link to={`/questions${topic.path}`}>{topic.title}</Link>
                    </li>
                ))}
            </ul>
>>>>>>> 4695a9008ab842897d96966129aec62dfdce41f9
        </div>
    );
};

export default Home;
<<<<<<< HEAD

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
    topicList: {
        display: 'flex',
        flexDirection: 'column',
    },
    topicWrapper: {
        marginBottom: '10px',
    },
    topicCard: {
        padding: '15px 20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        color: '#333',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: 'none', // Ensure links look like buttons
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
    arrowContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    progressText: {
        marginRight: '10px',
        fontSize: '0.8rem',
        color: '#333',
    },
    arrow: {
        fontSize: '1.5rem',
    },
    CountCard: {
        width: '50px',
        padding: '4px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f3f3f3',
        color: '#333',
        marginRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none', // Ensure links look like buttons
    },
};
=======
>>>>>>> 4695a9008ab842897d96966129aec62dfdce41f9
