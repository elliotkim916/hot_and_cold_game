import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
    const { evaluation, totalGuesses } = props;
    // const evaluation = props.evaluation;
    // const totalGuesses = props.totalGuesses;
    return (
        <section aria-label="Guess section" aria-describedby="feedback">
            <Feedback assessment={evaluation} guessCounter={totalGuesses} />
            <GuessForm makeAGuess={guess => props.onMakeGuess(guess)} />
            {/* props.onMakeGuess() is the function being called from game.js, the prop being passed down from game.js, 
                the prop value that is a function from game.js  */}
        </section>
    );
}