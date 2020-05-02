import React from 'react';
import { TextField } from '@material-ui/core'

class InputDetails extends React.Component {
    render() {
        return (
            <div style={{width: 300}}>
             <h3 style={{fontWeight: '500', fontSize: 16}}>{this.props.title}</h3>
             <TextField id="ip" 
             fullWidth 
             placeholder={this.props.hint} 
             type={this.props.type}
             error={this.props.error}
             required/>
            </div>
        );
    }
}

export default InputDetails;
