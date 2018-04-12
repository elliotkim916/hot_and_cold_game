import React from 'react';
import './guess-list.css';

export default function GuessList(props) {
    const everyGuess = props.allGuesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {everyGuess}
        </ul>
    );
}