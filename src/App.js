import React, {useState} from 'react';
import Game from './Game';

function Rules() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="rules" onClick={() => setShow(!show)}>Game Rules</div>
      {show ? 
        <div>
          <p>Try to find out the secret code composed of 5 colors.</p>
          <p>You have <b>8 attempts</b>. At each attempt, you will get the following feedback for your guess:</p>
          <ul>
            <li><b>a Bull</b>: for each correct color placed in a correct position.</li>
            <li><b>a Cow</b>: for each correct color placed in a wrong position.</li>
          </ul>
        </div> : null
      }
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Bulls and Cows Game</h1>
      <Rules />
      <Game />
      <footer>Ahmed Baha Ben Jmaa</footer>
    </div>
  );
}

export default App;
