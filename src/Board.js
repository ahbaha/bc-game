import React from 'react';
import ColorCode from './ColorCode';

function Row(props) {
    // props: id, current, code, reset, check, bulls, cows
    return (
        <tr className={props.current ? "currentRow" : null}>
            <td>{props.id}</td>
            <td className="codeCell"><ColorCode code={props.code} /></td>
            <td>
                <button className={props.current ? null : "disabled"} onClick={props.reset}>Reset</button>
                <button className={props.current ? null : "disabled"} onClick={() => props.check(props.code)} >Check</button>
            </td>
            <td>{props.bulls}</td>
            <td>{props.cows}</td>
        </tr>
    );
}


export default function Board(props) {
    // props: previousAttempts, currentCode, over, reset, check
    return (
        <table>
            <thead>
                <tr>
                    <th style={{width: 25}}></th>
                    <th className="codeCell"></th>
                    <th></th>
                    <th>Bull(s)</th>
                    <th>Cow(s)</th>
                </tr>
            </thead>
            <tbody>
                {props.previousAttempts.map((attempt, index) => 
                    <Row key={index+1} id={index+1} code={attempt.code} bulls={attempt.feedback.bulls} cows={attempt.feedback.cows}/>
                )}
                {props.over ? null:
                    <Row id={props.previousAttempts.length+1} code={props.currentCode} reset={props.reset} check={props.check} current={true}/>
                }
            </tbody>
        </table>
    );
}