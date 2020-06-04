import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row">             
                
                <div className="col-12 col-md-4 mr-5" href="/">
                    <img src='assets/images/logo.png' height="auto" width="100%" alt='Ristorante Con Fusion' />
                </div>
                <div className="col-12 col-md-5 ml-auto" href="/">
                    <p>We are digital designer living in United States. 
Apart from eating burger</p>
                </div>
            </div>
            <div className="row">             
                
                <div className="col-12 col-md-4 mr-5" href="/">
                    <p>SENT MAIL<br/>
                    info@portfolio.com
career.portfolio.com</p>
                </div>
                <div className="col-12 col-md-5 ml-auto" href="/">
                    <p>GET IN TOUCH<br/>
                    123/A,</p>
                </div>
            </div>
            <div className="row">             
                
                <div className="col-12 col-md-4 mr-5" href="/">
                    <p>SENT MAIL<br/>
                    info@portfolio.com
career.portfolio.com</p>
                </div>
                <div className="col-12 col-md-5 ml-auto">
                    <div className="social-button">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                    </div>
                 
                </div>
            </div>
                
                
            
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>2020 (c) Numo Uno     All Rights Reserved</p>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Footer;