<<<<<<< HEAD
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Progress = ({ current, total }) => {
    const percentage = total === 0 ? 0 : (current / total) * 100;

    return (
        <div className="my-4">
            <ProgressBar now={percentage} label={`${current}/${total}`} />
        </div>
    );
};

export default Progress;
=======
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Progress = ({ current, total }) => {
    const percentage = (current / total) * 100;

    return (
        <div className="my-4">
            <ProgressBar now={percentage} label={`${current}/${total}`} />
        </div>
    );
};

export default Progress;
>>>>>>> 4695a9008ab842897d96966129aec62dfdce41f9
