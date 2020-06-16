import React from 'react';

function Footer(props) {
    return(
        <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 mr-5" href="/">
              <img
                src="../assets/images/logo.png"
                height="auto"
                width="100%"
                alt="Ristorante Con Fusion"
              />
            </div>
            <div className="col-12 col-md-5 ml-auto" href="/">
              <p
                style={{
                  fontSize: "21px",
                  fontWeight: "400",
                  color: "#151D41",
                  margin: "auto",
                  position: "absolute",
                  bottom: "25px",
                }}
              >
                We are digital designer living in United States. Apart from eating
                burger
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mr-5" href="/">
              <p id="footer-heading">SENT MAIL</p>
              <p id="footer-sub">info@portfolio.com</p>
            </div>
            <div className="col-12 col-md-5 ml-auto" href="/">
              <p id="footer-heading">GET IN TOUCH</p>
              <p id="footer-sub">123/A,</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mr-5" href="/">
              <p id="footer-heading">MAKE CALL</p>
              <p id="footer-sub">+1234567890</p>
            </div>
            <div
              className="col-12 col-md-5 ml-auto"
              style={{ marginTop: "30px" }}
            >
              <a
                className="social-button"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a className="social-button" href="http://www.linkedin.com/in/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a className="social-button" href="http://google.com/+">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
  
          <div className="row justify-content-center">
            <div
              className="col-12"
              style={{
                height: "0px",
                border: "1px solid #FFD700",
                margin: "30px 0px 20px 0px",
              }}
            ></div>
            <p id="copyright">2020 (c) Numo Uno All Rights Reserved</p>
          </div>
        </div>
      </div>
    )
}

export default Footer;