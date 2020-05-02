import React from "react";
import './Buttons.css'

const DetailsButton = (props) => {
    return (
        <div style={{ marginLeft: 25, marginTop: 10,  display: 'flex', height: 30, width: 'auto' }}>
            <div onClick={props.onClick}
                style={{
                    cursor: props.cursor, display: 'flex', borderRadius: 2, background: props.bg, height: 30, width: 86, alignItems: 'center', justifyContent: 'center'
                }}>
                <p style={{ fontSize: 12, color: props.titleColor }}>{props.title}</p>
            </div>
            {props.unavailable && <p className='unavailable'>Currently unavailable!</p>}
        </div>
    );
};

export default DetailsButton;