import React from "react";

const DefaultButton = (props) => {
    return (
        <div style={{
            marginLeft: 15, marginRight: 15, alignSelf: 'center',
            height: 30, width: 'auto', alignItems: 'center', justifyContent: 'center'
        }}>
            <div onClick={props.onClick}
                style={{
                    cursor: props.cursor, display: 'flex', borderRadius: 2, background: props.bg, height: 30, width: 86, alignItems: 'center', justifyContent: 'center'
                }}>
                <p style={{ fontSize: 12, color: props.titleColor }}>{props.title}</p>
            </div>
            {props.unavailable && <p style={{ fontSize: 10, color: 'red'}}>Currently unavailable!</p>}
        </div>
    );
};

export default DefaultButton;