import React from 'react';
import './Details.css';
import LogoTop from '../../components/LogoTop';
import Footer from '../../components/Footer/Footer';
import CarDetails from '../../components/CarDetails/CarDetails';
import IconRight from '../../components/buttons/IconRight';
import { connect } from 'react-redux';
import { format } from 'date-fns'

class Dashboard extends React.Component {

    renderBooking(car, unavailable) {
        if (unavailable) {
            let name, cont, issue, ret;
            switch (car.id) {
                case 1: name = this.props.car1Name;
                    cont = this.props.car1Cont;
                    issue = format(new Date(this.props.car1Issue), 'dd MMM yy')
                    ret = format(new Date(this.props.car1Ret), 'dd MMM yy')
                    break;
                case 2: name = this.props.car2Name;
                    cont = this.props.car2Cont;
                    issue = format(new Date(this.props.car2Issue), 'dd MMM yy')
                    ret = format(new Date(this.props.car2Ret), 'dd MMM yy')
                    break;
                case 3: name = this.props.car3Name;
                    cont = this.props.car3Cont;
                    issue = format(new Date(this.props.car3Issue), 'dd MMM yy')
                    ret = format(new Date(this.props.car3Ret), 'dd MMM yy')
                    break;
                case 4: name = this.props.car4Name;
                    cont = this.props.car4Cont;
                    issue = format(new Date(this.props.car4Issue), 'dd MMM yy')
                    ret = format(new Date(this.props.car4Ret), 'dd MMM yy')
                    break;
            }
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
                        <p className='table-item'>{name}</p>
                        <p className='table-item'>+91-{cont}</p>
                        <p className='table-item'>{issue}</p>
                        <p className='table-item'>{ret}</p>
                    </div>
                </div>
            )
        }
    }

    bookNow(car, unavailable) {
        if (!unavailable)
            this.props.history.push({
                pathname: '/form',
                state: { carDetails: car }
            })
    }

    render() {
        const car = this.props.location.state.carDetails
        let unavailable = false;

        switch (car.id) {
            case 1: unavailable = !this.props.car1Avail; break;
            case 2: unavailable = !this.props.car2Avail; break;
            case 3: unavailable = !this.props.car3Avail; break;
            case 4: unavailable = !this.props.car4Avail; break;
        }

        document.title = 'Car Rent Details'
        return (
            <div>
                <div className='master'>
                    <LogoTop />
                    <CarDetails name={car.name}
                        price={car.price} seater={car.seater}
                        url={car.url} color={car.color}
                        onClick={() => this.bookNow(car, unavailable)}
                        unavailable={unavailable} />
                    <h3 className='title'>Car Details</h3>
                    <div className='divider' />
                    <IconRight title={unavailable ? 'Not Available' : 'Available'}
                        unavailable={unavailable} />
                    <p className='txt'>Vehicle number: {car.no}</p>
                    <p className='txt'>{car.type}</p>
                    <p className='txt'>{car.title}</p>
                    <p className='txt'>{car.desc}</p>
                    {this.renderBooking(car, unavailable)}
                </div>
                <Footer />
            </div >
        );
    }
}

const mapStateToProps = state => ({
    car1Avail: state.car1Avail,
    car1Name: state.car1Name,
    car1Cont: state.car1Cont,
    car1Issue: state.car1Issue,
    car1Ret: state.car1Ret,

    car2Avail: state.car2Avail,
    car2Name: state.car2Name,
    car2Cont: state.car2Cont,
    car2Issue: state.car2Issue,
    car2Ret: state.car2Ret,

    car3Avail: state.car3Avail,
    car3Name: state.car3Name,
    car3Cont: state.car3Cont,
    car3Issue: state.car3Issue,
    car3Ret: state.car3Ret,

    car4Avail: state.car4Avail,
    car4Name: state.car4Name,
    car4Cont: state.car4Cont,
    car4Issue: state.car4Issue,
    car4Ret: state.car4Ret,
});

export default connect(mapStateToProps, null)(Dashboard);
