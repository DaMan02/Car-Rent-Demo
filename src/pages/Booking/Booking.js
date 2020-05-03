import React from 'react';
import './Booking.css';
import LogoTop from '../../components/LogoTop';
import InputDetails from '../../components/InputDetails/InputDetails';
import BookCar from '../../components/buttons/BookCar';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { isBefore, isPast, isValid, isEqual, format } from 'date-fns'

class Booking extends React.Component {

    state = {
        dialogVisible: false,
        nameEr: false,
        contactEr: false,
        issueEr: false,
        returnEr: false,
        name: '',
        contact: '',
        issueD: '',
        returnD: ''
    }

    handleClose() {
        this.setState({ dialogVisible: false })
    };

    onContinue(car) {
        switch (car.id) {
            case 1: this.props.car1Update(false);
                this.props.car1NameUpdate(this.state.name)
                this.props.car1ContUpdate(this.state.contact)
                this.props.car1IssueUpdate(this.state.issueD)
                this.props.car1RetUpdate(this.state.returnD)
                break;
            case 2: this.props.car2Update(false);
                this.props.car2NameUpdate(this.state.name)
                this.props.car2ContUpdate(this.state.contact)
                this.props.car2IssueUpdate(this.state.issueD)
                this.props.car2RetUpdate(this.state.returnD)
                break;
            case 3: this.props.car3Update(false);
                this.props.car3NameUpdate(this.state.name)
                this.props.car3ContUpdate(this.state.contact)
                this.props.car3IssueUpdate(this.state.issueD)
                this.props.car3RetUpdate(this.state.returnD)
                break;
            case 4: this.props.car4Update(false);
                this.props.car4NameUpdate(this.state.name)
                this.props.car4ContUpdate(this.state.contact)
                this.props.car4IssueUpdate(this.state.issueD)
                this.props.car4RetUpdate(this.state.returnD)
                break;
        }

        this.handleClose()
        this.props.history.push('/')
    }

    renderDialog(car) {
        let iss, ret;
        if(this.state.dialogVisible){
            iss = format(new Date(this.state.issueD), 'dd/MM/yyyy')
            ret = format(new Date(this.state.returnD), 'dd/MM/yyyy')
        }
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
                            <Typography style={{ fontSize: 12 }}>
                                You have booked <strong>{car.name}</strong><br></br>
                                for the duration <strong>{iss}-{ret}</strong>
                            </Typography>
                            <h5 onClick={() => this.onContinue(car)}
                                style={{ color: 'black', padding: 6, cursor: 'pointer', textAlign: 'right', marginRight: 20 }}>
                                Continue
                             </h5>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }

    validPhone() {
        var a = /^\d{10}$/;
        return a.test(this.state.contact);
    }

    validIssueDate() {
        if (this.state.issueD == '') return false
        else {
            var date = new Date(this.state.issueD)
            return isValid(date) && (!isPast(date) || format(new Date(), 'yyyy-MM-dd') === format(new Date(date), 'yyyy-MM-dd'))
        }
    }

    validRetDate() {
        if (this.state.returnD == '') return false
        else {
            var date = new Date(this.state.returnD)
            return isValid(date) && isBefore(new Date(this.state.issueD), date)
        }
    }

    validate() {
        if (this.state.name == '') { this.setState({ nameEr: true }); return false; }
        else this.setState({ nameEr: false });
        if (!this.validPhone()) { this.setState({ contactEr: true }); return false; }
        else this.setState({ contactEr: false });
        if (!this.validIssueDate()) { this.setState({ issueEr: true }); return false; }
        else this.setState({ issueEr: false });
        if (!this.validRetDate()) { this.setState({ returnEr: true }); return false; }
        else this.setState({ returnEr: false });
        return true;
    }

    submitForm() {
        if (this.validate())
            this.setState({ dialogVisible: true })
    }

    onChangeName(t) {
        this.setState({ name: t.target.value })
    }

    onChangeContact(t) {
        this.setState({ contact: t.target.value })
    }

    onChangeIssue(t) {
        this.setState({ issueD: t.target.value })
    }

    onChangeRet(t) {
        this.setState({ returnD: t.target.value })
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
                            <InputDetails title='Name' hint='Jane Doe'
                                value={this.state.name}
                                onChange={t => this.onChangeName(t)}
                                error={this.state.nameEr} />
                            <InputDetails title='Contact Number' hint='+91' type='tel'
                                value={this.state.contact}
                                onChange={t => this.onChangeContact(t)}
                                error={this.state.contactEr} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
                            <InputDetails title='Issue Date' hint='DD/MM/YYYY' type='date'
                                value={this.state.issueD}
                                onChange={t => this.onChangeIssue(t)}
                                error={this.state.issueEr} />
                            <InputDetails title='Return Date' hint='DD/MM/YYYY' type='date'
                                value={this.state.returnD}
                                onChange={t => this.onChangeRet(t)}
                                error={this.state.returnEr} />
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

const mapDispatchToProps = dispatch => ({
    car1Update: val => dispatch({ type: 'RENT1', car1Avail: val }),
    car1NameUpdate: val => dispatch({ type: 'NAME1', car1Name: val }),
    car1ContUpdate: val => dispatch({ type: 'CONTACT1', car1Cont: val }),
    car1IssueUpdate: val => dispatch({ type: 'ISSUE1', car1Issue: val }),
    car1RetUpdate: val => dispatch({ type: 'RETURN1', car1Ret: val }),

    car2Update: val => dispatch({ type: 'RENT2', car2Avail: val }),
    car2NameUpdate: val => dispatch({ type: 'NAME2', car2Name: val }),
    car2ContUpdate: val => dispatch({ type: 'CONTACT2', car2Cont: val }),
    car2IssueUpdate: val => dispatch({ type: 'ISSUE2', car2Issue: val }),
    car2RetUpdate: val => dispatch({ type: 'RETURN2', car2Ret: val }),

    car3Update: val => dispatch({ type: 'RENT3', car3Avail: val }),
    car3NameUpdate: val => dispatch({ type: 'NAME3', car3Name: val }),
    car3ContUpdate: val => dispatch({ type: 'CONTACT3', car3Cont: val }),
    car3IssueUpdate: val => dispatch({ type: 'ISSUE3', car3Issue: val }),
    car3RetUpdate: val => dispatch({ type: 'RETURN3', car3Ret: val }),

    car4Update: val => dispatch({ type: 'RENT4', car4Avail: val }),
    car4NameUpdate: val => dispatch({ type: 'NAME4', car4Name: val }),
    car4ContUpdate: val => dispatch({ type: 'CONTACT4', car4Cont: val }),
    car4IssueUpdate: val => dispatch({ type: 'ISSUE4', car4Issue: val }),
    car4RetUpdate: val => dispatch({ type: 'RETURN4', car4Ret: val }),
});

export default connect(null, mapDispatchToProps)(Booking);
