import React from 'react';
import './Details.css';
import LogoTop from '../../components/LogoTop';
import Footer from '../../components/Footer/Footer';
import CarDetails from '../../components/CarDetails/CarDetails';
import IconRight from '../../components/buttons/IconRight';

class Dashboard extends React.Component {

    renderBooking() {
        return (
            <div>
                <h3 className='title'>Current Booking</h3>
                <div className='divider' />
                <div className='book'>
                    <p className='table-item'>NAME</p>
                    <p className='table-item'>PHONE NUMBER</p>
                    <p className='table-item'>ISSUE DATE</p>
                    <p className='table-item'>RETURN DATE</p>
                </div>
                <div className='book-entry'>
                    <p className='table-item'>John Doe</p>
                    <p className='table-item'>+91-765448802</p>
                    <p className='table-item'>25th Jan '20</p>
                    <p className='table-item'>28th Jan '20</p>
                </div>
            </div>
        )
    }

    bookNow(car){
        this.props.history.push({
            pathname: '/form',
            state: { carDetails: car }
        })
    }

    render() {
        const car = this.props.location.state.carDetails
        document.title = 'Car Rent Details'
        return (
            <div>
                <div className='master'>
                    <LogoTop />
                    <CarDetails name={car.name} 
                        price={car.price} seater={car.seater}
                        url={car.url} color={car.color}
                        onClick={() => this.bookNow(car)} />
                    <h3 className='title'>Car Details</h3>
                    <div className='divider' />
                    <IconRight title={this.props.unavailable ? 'Not Available' : 'Available'}
                        unavailable={this.props.unavailable} />
                    <p className='txt'>Vehicle number: {car.no}</p>
                    <p className='txt'>{car.type}</p>
                    <p className='txt'>{car.title}</p>
                    <p className='txt'>{car.desc}</p>
                    {this.renderBooking()}
                </div>
                <Footer />
            </div >
        );
    }
}

export default Dashboard;
