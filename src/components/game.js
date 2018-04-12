import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game extends React.Component {
// constructor is used to set any initial properties of an obj created from the class
// classes can inherit from other classes to make more specific versions of that class by
// using the extends keyword
    constructor(props) {
// super calls the constructor of the parent class
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100) + 1
        };
    }

    restartGame() {
        this.setState({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100) + 1
        });
    }

    makeGuess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({feedback: 'Please enter a valid number'});
            return;
        }

        const difference = Math.abs(guess - this.state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
            feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        } else {
            feedback = 'You got it!';
        }

        this.setState({
            guesses: [...this.state.guesses, guess],
            feedback
        });
    }

    render() {
        const {feedback, guesses} = this.state;
        // const feedback = this.state.feedback;
        // const guesses = this.state.guesses;
        const guessCount = guesses.length;

        return (
            <div>
                <Header 
                    onRestartGame={() => this.restartGame()}
                />
                <main role="main">
                    <GuessSection 
                        evaluation={feedback}
                        totalGuesses={guessCount}
                        // onMakeGuess is a prop with a value that is a function
                        onMakeGuess = {guess => this.makeGuess(guess)}
                    />
                    <StatusSection 
                        myGuesses={guesses}
                    />
                    <InfoSection />
                </main>
            </div>
        );
    }
}