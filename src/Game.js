import React, {useState} from 'react';
import Board from './Board';
import {checkCode, generateRandomCode} from './CodeChecker';
import ColorCode from './ColorCode';
import Colors from './Colors';

export default function Game() {
    const codeLength = 5;
    const nbAttempts = 8;
    const colors = ["red", "green", "blue", "yellow", "orange", "grey", "pink", "violet"];
    const [secretCode, setSecretCode] = useState(generateRandomCode(colors, codeLength));
    const [inputCode, setInputCode] = useState([]);
    const [previousAttempts, setPreviousAttempts] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [won, setWon] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    function addColor(color) {
        if (inputCode.length < codeLength)
            setInputCode([...inputCode, color]);
    }

    function reset() {
        setInputCode([]);
    }

    function check(code) {
        // check
        const feedback = checkCode(code, secretCode);
        // win case
        if (feedback.bulls === codeLength) {
            setWon(true);
            setGameOver(true);
        } else {
            // max nb of attempts reached
            if (previousAttempts.length + 1 === nbAttempts) {
                setGameOver(true);
            }
        }
        // save
        setPreviousAttempts([...previousAttempts, {code, feedback}]);
        reset();
    }

    function showSolutionAndAbort() {
        setShowSolution(true);
        setGameOver(true);
    }

    function newGame() {
        // init secret code
        setSecretCode(generateRandomCode(colors, codeLength));
        reset();
        setPreviousAttempts([]);
        setGameOver(false);
        setWon(false);
        setShowSolution(false);
    }

    return (
        <React.Fragment>
            <div>
                <div className="label">Secret Code</div>
                <div>
                    <ColorCode code={showSolution ? secretCode : ["", "", "", "", ""]} />
                    <button onClick={newGame} style={{float: "right"}}>New Game</button>
                    <button onClick={showSolutionAndAbort} style={{float: "right"}}>Show Solution</button>
                </div>
            </div>
            {won ? <div className="message win">You won!</div> : null}
            {!won && (gameOver || showSolution) ? <div className="message lost">You lost!</div> : null}
            <Colors allColors={colors} selectColor={addColor} />
            <Board previousAttempts ={previousAttempts} currentCode={inputCode} reset={reset} check={check} over={gameOver} />
        </React.Fragment>
    );
}
