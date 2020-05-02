import React from "react";
import Colors from "../../res/Colors";

const BookCar = (props) => {
    return (
        <div style={{
            marginLeft: 15, marginRight: 15, alignSelf: 'center',
            height: 30, width: 'auto', alignItems: 'center', justifyContent: 'center'
        }}>
            <div onClick={props.onClick}
                style={{
                    cursor: 'pointer', display: 'flex', borderRadius: 2, background: Colors.darkGray, height: 38, width: 140, alignItems: 'center', justifyContent: 'center'
                }}>
                <p style={{ fontSize: 14, fontWeight: '800', color: 'white' }}>{props.title}</p>
            </div>
        </div>
    );
};

export default BookCar;