import React from 'react';
import ClearIcon from '@material-ui/icons/Clear'
import Colors from '../../res/Colors';

  function IconRight(props) {
  
  return (
    <div onClick={props.onClick}
        style={{
            cursor: props.cursor, display: 'flex', borderRadius: 2, 
            background: '#939393', height: 30, width: 'fit-content', alignItems: 'center', 
            justifyContent: 'center', paddingLeft: 10, paddingRight: 10, marginTop: 18, marginBottom: 18
        }}>
        <p style={{ fontSize: 12, fontWeight: '400', color: 'white' }}>{props.title}</p>
        {props.unavailable && <ClearIcon style={{color: 'white'}}/>}
    </div>
  );
}


export default IconRight;