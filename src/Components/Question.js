<<<<<<< HEAD
import React, { useState } from "react";
import { Card, Button, Collapse } from "react-bootstrap";

const Question = ({ question, index, onCheckboxChange }) => {
  const [open, setOpen] = useState(false);

  const optionsObject = question.options[0]; // Since options is an array containing a single object
  const optionLabels = Object.keys(optionsObject); // Extract the option labels
  const optionValues = Object.values(optionsObject); // Extract the option values

  const handleCheckboxChange = (event) => {
    onCheckboxChange(event.target.checked);
  };

  return (
    <Card className="mb-3">
      <Card.Header>
        <input
          type="checkbox"
          className="me-2"
          onChange={handleCheckboxChange}
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
=======
import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

const Question = ({ question, index, onCheckboxChange }) => {
    const [open, setOpen] = useState(false);

    const optionsObject = question.options[0]; // Since options is an array containing a single object
    const optionLabels = Object.keys(optionsObject); // Extract the option labels
    const optionValues = Object.values(optionsObject); // Extract the option values

    return (
        <Card className="mb-3">
            <Card.Header>
                <input
                    type="checkbox"
                    className="me-2"
                    onChange={onCheckboxChange}
                />
                {index + 1}. {question.question}
            </Card.Header>
            <Card.Body>
                <ul className="list-unstyled">
                    {optionLabels.map((label, idx) => (
                        <li key={idx}>
                            <strong>{label}</strong> {optionValues[idx]}
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
                        <strong>Answer:</strong> {question.correct_answer}
                        <br />
                        <strong>Explanation:</strong> {question.explanation}
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    );
};

export default Question;
>>>>>>> 4695a9008ab842897d96966129aec62dfdce41f9
