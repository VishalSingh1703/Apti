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
        </div>
    );
};

export default Home;
