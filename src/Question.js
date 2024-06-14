import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

const Question = ({ question, index, onCheckboxChange }) => {
    const [open, setOpen] = useState(false);

    const optionLabels = ['A', 'B', 'C', 'D'];

    return (
        <Card className="mb-3">
            <Card.Header>
                <input
                    type="checkbox"
                    className="me-2"
                    onChange={onCheckboxChange}
                />
                {index + 1}. {question.text}
            </Card.Header>
            <Card.Body>
                <ul className="list-unstyled">
                    {question.options.map((option, idx) => (
                        <li key={idx}>
                            <strong>{optionLabels[idx]}.</strong> {option}
                        </li>
                    ))}
                </ul>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls={`answer${index}`}
                    aria-expanded={open}
                    className="mt-3"
                >
                    Show Answer
                </Button>
                <Collapse in={open}>
                    <div id={`answer${index}`} className="mt-3">
                        <strong>Answer:</strong> {question.answer}
                        <br />
                        <strong>Explanation:</strong> {question.explanation}
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    );
};

export default Question;
