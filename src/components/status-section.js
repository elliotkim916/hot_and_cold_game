import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';

export default function StatusSection(props) {
    const {myGuesses} = props;
    // const myGuesses = props.myGuesses;
    const guessCount = myGuesses.length;

    return (
        <section aria-labelledby="guessCount" aria-describedby="guessList">
            <GuessCount totalCount={guessCount} />
            <GuessList  allGuesses={myGuesses} />
        </section>
    );
}
