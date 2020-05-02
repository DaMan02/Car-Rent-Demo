import React from 'react';
import './CarDetails.css';
import Colors from '../../res/Colors';
import DetailsButton from '../buttons/DetailsButton';
import IconRight from '../buttons/IconRight';

class CarDetails extends React.Component {
    render() {
        return (
            <div className='master'>
                <div className="item-card">
                    <img src={this.props.url} width={540} height={270} style={{ objectFit: 'stretch', alignSelf: 'center' }} />
                    <div style={{ marginLeft: 25, width: 340, alignSelf: 'center' }}>

                        <p style={{ marginLeft: 25, fontSize: 22, fontWeight: '600' }}>{this.props.name}</p>

                        <div className="card-row">
                            <p style={{ fontSize: 13, color: Colors.lightGray }}>{this.props.color}</p>
                            <p style={{ fontSize: 13, paddingLeft: 60, color: Colors.lightGray }}>{this.props.seater} seater</p>
                        </div>

                        <div className="card-row">
                            <p style={{ fontSize: 13 }}>Rent per day: </p>
                            <p style={{ fontSize: 18, fontWeight: '450', marginLeft: 13, alignSelf: 'center' }}>₹ {this.props.price}</p>
                        </div>

                        <DetailsButton title='Book Now' unavailable={this.props.unavailable}
                            bg={this.props.unavailable ? Colors.disabled : '#696969'}
                            titleColor='white'
                            cursor={this.props.unavailable ? 'no-drop' : 'pointer'}
                            onClick={this.props.onClick} />
                    </div>
                </div>
                <h3 className='title'>Car Details</h3>
                <div className='divider'/>
                {/* <IconRight/> */}
            </div>
        );
    }
}

export default CarDetails;
