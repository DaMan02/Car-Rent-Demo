import React from 'react';
import './Details.css';
import LogoTop from '../../components/LogoTop';
import Footer from '../../components/Footer/Footer';
import CarDetails from '../../components/CarDetails/CarDetails';

class Dashboard extends React.Component {

    render() {
        const car = this.props.location.state.carDetails

        document.title = 'Car Rent Details'
        return (
            <div>
                <LogoTop />
                <CarDetails name={car.name} unavailable
                    price={car.price} seater={car.seater}
                    url={car.url} color={car.color} />
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
