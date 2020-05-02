import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <h2 className="text-start" style={{ fontWeight: '600', marginBottom: 30 }}>Rent Vroom</h2>
            <p className="small">Rentvroom Pvt. Ltd.</p>
            <p className="small">No. 296, 3rd Cross Road, Jakkasandra, 1st Block, Koramangle<br></br>
                Bengaluru, Karnataka</p>
            <div style={{ display: 'flex', marginLeft: '10%', marginBottom: 20 }}>
                <h5 className='footer'>Home</h5>
                <h5 className='footer'>Contact</h5>
                <h5 className='footer'>About</h5>
                <div className="footer-right">
                    <h6 className="footer-r-tx">Privacy Policy</h6>
                    <h6 className="footer-r-tx">Terms of service</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;



