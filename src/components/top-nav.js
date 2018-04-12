import React from 'react';
import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a 
                    aria-label="How to play" 
                    href="#what" 
                    className="what"
                    >
                        What?
                    </a>
                </li>
                <li>
                    <a
                    aria-label="Start a new game"
                    href="#feedback"
                    className="new"
                    onClick={() => props.newGame()}
                >
                    + New Game
                    </a>
                </li>
            </ul>
        </nav>
    )
}