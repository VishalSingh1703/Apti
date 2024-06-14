import React from 'react';
import Header from './Header';
import QuestionList from './Questionlist';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <Container>
            <Header />
            <QuestionList />
        </Container>
    );
};

export default App;