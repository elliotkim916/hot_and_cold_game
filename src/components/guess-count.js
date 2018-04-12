import React from 'react';
import './guess-count.css';

export default function GuessCount(props) {
    const isPlural = props.totalCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.totalCount}</span> {guessNoun}!
        </h2>
    );
}