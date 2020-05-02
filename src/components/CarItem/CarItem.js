import React from 'react';
import './CarItem.css';
import DefaultButton from '../buttons/DefaultButton';
import Colors from '../../res/Colors';

class CarItem extends React.Component {
    render() {
        return (
            <div className="item-card">
                <img src={this.props.url} width={220} height={100} style={{ objectFit: 'stretch', alignSelf: 'center' }} />
                <div style={{ marginLeft: 20, width: 240 }}>
                    <p style={{ fontSize: 13, fontWeight: '600', textAlign: 'left' }}>{this.props.name}</p>
                    <div className="card-row">
                        <p style={{ fontSize: 13, color: Colors.lightGray }}>{this.props.color}</p>
                        <p style={{ fontSize: 13, paddingLeft: 60, color: Colors.lightGray }}>{this.props.seater} seater</p>
                    </div>      
                </div>
                <p style={{ fontSize: 13, marginRight: 80, alignSelf: 'center' }}>₹ {this.props.price}</p>
                
                <DefaultButton title='Book Now' unavailable={this.props.unavailable} 
                bg={this.props.unavailable? Colors.disabled : '#696969'} 
                titleColor='white' 
                cursor={this.props.unavailable? 'no-drop' : 'pointer'}
                onClick={this.props.onClick}/>
               
                <DefaultButton title='Details' bg='#F3F3F3' titleColor='#696969'
                cursor='pointer'
                onClick={this.props.onDetails}/>
            </div>
        );
    }
}

export default CarItem;
