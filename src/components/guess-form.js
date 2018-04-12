import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        if (this.props.makeAGuess) {
            const value = this.input.value;
            // this.props.makeAGuess() is the function being called, passing in the value
            this.props.makeAGuess(value);
        }
        this.input.value = '';
        this.input.focus();
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <input 
                    type="number"
                    name="userGuess"
                    id="userGuess"
                    className="text"
                    min="1"
                    max="100"
                    autoComplete="off"
                    aria-labelledby="feedback"
                    ref={input => (this.input = input)}
                    // we use ref to provide access to the input element via this.input
                    required
                />
                <button type="submit" name="submit" id="guessButton" className="button">
                Guess
                </button>
            </form>
        );
    }
}