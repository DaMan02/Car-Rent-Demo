import React from 'react';
import './Dashboard.css';
import CarItem from '../../components/CarItem/CarItem';
import LogoTop from '../../components/LogoTop';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';

const cars = [
    {
        id: 1,
        name: 'Hyndai Grand i10',
        color: 'White',
        seater: '4',
        price: '350',
        no: '18 D 4356',
        type: 'Petrol Car',
        title: '1.2 Kappa dual VTVT BS6 Petrol Engine',
        desc: 'Hyundai GRAND i10 comes with complete peace of mind with 3 years / 100,000 Km of warranty and Road side assistance for convenience of car owners. The extremely clear instrument panel displays all the important driving information using LCD and TFT technology',
        url: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-hlt0rgpgj76b3rr2e2746rq336-20190810160949.Medi.jpeg'
    },
    {
        id: 2,
        name: 'Ford EcoSport',
        color: 'Deep Blue',
        seater: '4',
        price: '1350',
        no: '15 C 3536',
        type: 'Diesel Car',
        title: 'Lorem ipsum Diesel Engine',
        desc: 'Gear up for more fun, more style, and more thrill with the Ford EcoSport. Experience a whole new perspective, the ease of technology, superior comfort, and a greener tomorrow with BS VI compliant engines. And, set out on a journey that leads you to discover more in you.',
        url: 'https://images.financialexpress.com/2017/11/Ford-EcoSport-main-large.jpg?w=420&h=280&imflag=true'
    },
    {
        id: 3,
        name: 'Maruti Suzuki XL6',
        color: 'Glossy Black',
        seater: '6',
        price: '850',
        no: '31 A 5646',
        type: 'Petrol Car',
        title: '1.2 Kappa dual VTVT BS6 Petrol Engine',
        desc: 'Maruti Suzuki XL6 comes with complete peace of mind with 4 years / 100,000 Km of warranty and Road side assistance for convenience of car owners. The extremely clear instrument panel displays all the important driving information using LCD and TFT technology',
        url: 'https://www.motoroids.com/wp-content/uploads/2019/08/Maruti-Suzuki-XL6-accessories-featured.jpg'
    },
    {
        id: 4,
        name: 'Honda CR-V',
        color: 'Blue',
        seater: '4',
        price: '450',
        no: '11 N 1316',
        type: 'Petrol Car',
        title: '1.2 Kappa dual VTVT BS6 Petrol Engine',
        desc: 'Honda CR-V comes with complete peace of mind with 3 years / 100,000 Km of warranty and Road side assistance for convenience of car owners. The extremely clear instrument panel displays all the important driving information using LCD and TFT technology',
        url: 'https://cnet1.cbsistatic.com/img/YLlxhEe0zNqb3wi-TTrF6AqKPyM=/2020/02/26/71d3cd1d-e43e-4850-8873-dfc2ec865fc7/2020-honda-cr-v-touring-awd-ogi1.jpg'
    },
]


class Dashboard extends React.Component {

    onDetailsClick(car) {
        this.props.history.push({
            pathname: '/details',
            state: { carDetails: car }
        })
    }

    onBook(car, avail) {
        if(avail)
        this.props.history.push({
            pathname: '/form',
            state: { carDetails: car }
        })
    }

    render() {
        document.title = 'Car Rent Dashboard'
        return (
            <div>
                <LogoTop />
                <h2 className="text-start">Cars for rent</h2>
                <div className="index">
                    <p className="text-middle">Car Details</p>
                    <p className="text-middle">RENT PER DAY</p>
                </div>
                <CarItem name={cars[0].name} unavailable={!this.props.car1Avail}
                    color={cars[0].color} seater={cars[0].seater} price={cars[0].price}
                    onDetails={() => this.onDetailsClick(cars[0])}
                    onClick={() => this.onBook(cars[0], this.props.car1Avail)}
                    url={cars[0].url} />
                <CarItem name={cars[1].name} unavailable={!this.props.car2Avail}
                    color={cars[1].color} seater={cars[1].seater} price={cars[1].price}
                    onDetails={() => this.onDetailsClick(cars[1])}
                    onClick={() => this.onBook(cars[1], this.props.car2Avail)}
                    url={cars[1].url} />
                <CarItem name={cars[2].name} unavailable={!this.props.car3Avail}
                    color={cars[2].color} seater={cars[2].seater} price={cars[2].price}
                    onDetails={() => this.onDetailsClick(cars[2])}
                    onClick={() => this.onBook(cars[2], this.props.car3Avail)}
                    url={cars[2].url} />
                <CarItem name={cars[3].name} unavailable={!this.props.car4Avail}
                    color={cars[3].color} seater={cars[3].seater} price={cars[3].price}
                    onDetails={() => this.onDetailsClick(cars[3])}
                    onClick={() => this.onBook(cars[3], this.props.car4Avail)}
                    url={cars[3].url} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    car1Avail: state.car1Avail,
    car2Avail: state.car2Avail,
    car3Avail: state.car3Avail,
    car4Avail: state.car4Avail
});

export default connect(mapStateToProps, null)(Dashboard);
