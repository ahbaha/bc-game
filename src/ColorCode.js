import React from 'react';

export default function ColorCode(props) {
    // props: code
    return (
        props.code.map((color, index) =>
            <div key={index} 
                className={"color"}
                style={{backgroundColor: color}}>
            <span>{color === "" ? "?" : null}</span>
            </div>
        )
    );
}