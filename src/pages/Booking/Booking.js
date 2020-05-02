import React from 'react';
import './Booking.css';
import LogoTop from '../../components/LogoTop';
import InputDetails from '../../components/InputDetails/InputDetails';
import BookCar from '../../components/buttons/BookCar';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

class Booking extends React.Component {

    state = {
        dialogVisible: false,
        nameEr: false,
        contactEr: false,
        issueEr: false,
        returnEr: false
    }

    handleClose() {
        this.setState({ dialogVisible: false })
    };

    onContinue() {
        this.handleClose()
    }

    renderDialog(car) {
        return (
            <div>
                <Dialog aria-labelledby="customized-dialog-title" open={this.state.dialogVisible}>
                    <div style={{ display: 'flex' }}>
                        <img src='https://cdn.pixabay.com/photo/2015/11/03/08/54/laptop-1019763_960_720.jpg'
                            width={200} height={210} style={{ objectFit: 'stretch', alignSelf: 'left' }} />
                        <div className='dialog'>
                            <h2 id="customized-dialog-title" onClose={() => this.handleClose()}
                                style={{ fontWeight: '600', color: 'black', alignSelf: 'center', paddingTop: 50, paddingRight: 50 }}>
                                Booking Confirmed !
                         </h2>
                            <Typography style={{fontSize: 12}}>
                                You have booked <strong>{car.name}</strong><br></br>
                                for the duration
                          </Typography>
                            <h5 onClick={() => this.onContinue()}
                                style={{ color: 'black', padding: 6, cursor: 'pointer', textAlign: 'right', marginRight: 20}}>
                                Continue
                             </h5>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }

    submitForm() {
        this.setState({ dialogVisible: true })
    }

    render() {
        const car = this.props.location.state.carDetails
        document.title = 'Car Rent Form'
        return (
            <div>
                <img src='https://ae01.alicdn.com/kf/HTB1JNbHOXXXXXXBaXXXq6xXFXXXm/Visionking-360X50mm-Binoculars-Monocular-Astronomical-Telescope-For-Kids-18-x-To-90-x-Magnification-Astronomy-Telescope.jpg_960x960.jpg'
                    width={340} height={600} style={{ objectFit: 'stretch', position: 'absolute', left: 0 }} />

                <div className='master'>

                    <div className='top'
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h2 className="heading">Booking details</h2>
                        <LogoTop />
                    </div>

                    <div className="body">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <InputDetails title='Name' hint='Jane Doe' error={this.state.nameEr}/>
                            <InputDetails title='Contact Number' hint='+91' type='tel' error={this.state.contactEr}/>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
                            <InputDetails title='Issue Date' hint='DD/MM/YYYY' type='date' error={this.state.issueEr}/>
                            <InputDetails title='Return Date' hint='DD/MM/YYYY' type='date' error={this.state.returnEr}/>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 50 }}>
                            <h5 style={{ marginLeft: 20, cursor: 'pointer' }} onClick={() => this.props.history.goBack()}>Back</h5>
                            <BookCar title='Book Car' onClick={() => this.submitForm()} />
                        </div>
                    </div>

                    {this.renderDialog(car)}
                </div>
            </div >
        );
    }
}

export default Booking;
