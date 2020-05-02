import React from 'react';
import './Dashboard.css';
import CarItem from '../../components/CarItem/CarItem';
import LogoTop from '../../components/LogoTop';
import Footer from '../../components/Footer/Footer';

const cars = [
    {
        name: 'Hyndai Grand i10',
        color: 'White',
        seater: '4',
        price: '350',
        url: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-hlt0rgpgj76b3rr2e2746rq336-20190810160949.Medi.jpeg'
    },
    {
        name: 'Ford EcoSport',
        color: 'Deep Blue',
        seater: '4',
        price: '1350',
        url: 'https://images.financialexpress.com/2017/11/Ford-EcoSport-main-large.jpg?w=420&h=280&imflag=true'
    },
    {
        name: 'Maruti Suzuki XL6',
        color: 'Glossy Black',
        seater: '6',
        price: '850',
        url: 'https://www.motoroids.com/wp-content/uploads/2019/08/Maruti-Suzuki-XL6-accessories-featured.jpg'
    },
    {
        name: 'Honda CR-V',
        color: 'Blue',
        seater: '4',
        price: '450',
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
                <CarItem name={cars[0].name}
                    color={cars[0].color} seater={cars[0].seater} price={cars[0].price}
                    onDetails={() => this.onDetailsClick(cars[0])}
                    url={cars[0].url} />
                <CarItem name={cars[1].name}
                    color={cars[1].color} seater={cars[1].seater} price={cars[1].price}
                    onDetails={() => this.onDetailsClick(cars[1])}
                    url={cars[1].url} />
                <CarItem name={cars[2].name} unavailable
                    color={cars[2].color} seater={cars[2].seater} price={cars[2].price}
                    onDetails={() => this.onDetailsClick(cars[2])}
                    url={cars[2].url} />
                <CarItem name={cars[3].name}
                    color={cars[3].color} seater={cars[3].seater} price={cars[3].price}
                    onDetails={() => this.onDetailsClick(cars[3])}
                    url={cars[3].url} />
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
