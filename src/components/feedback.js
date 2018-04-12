import React from 'react';
import './feedback.css';

export default function Feedback(props) {
    const key = props.guessCounter;

    let guessAgain;
    if (key !== 0) {
        guessAgain = <span className="visuallyhidden">Guess again!</span>;
    }
    return (
        <h2
            numberOfGuesses={key}
            id="feedback"
            role="status"
            aria-live="assertive"
            aria-atomic="true"
        >
            {props.assessment} {guessAgain}
        </h2>
    );
}