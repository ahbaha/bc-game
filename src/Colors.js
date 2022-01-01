import React from 'react';

export default function Colors(props) {
    // props: allColors, selectColor
    return (
        <div className="colors">
            <div className="label">Select a color</div>
            {props.allColors.map((color) =>
                <div key={color} 
                    className={"color select"}
                    style={{backgroundColor: color}}
                    onClick={() => {props.selectColor(color)}} >
                </div>
            )}
        </div>
    );
}