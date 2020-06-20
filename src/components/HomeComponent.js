import React from 'react';
import { Card,  CardText, CardBody,
  CardTitle } from 'reactstrap';
import ReactPlayer from 'react-player'
import  Header from './HeaderComponent'
import Blog from './BlogComponent';
import Subscribe from './SubscribeComponent';
import Skill from './SkillComponent';
import Footer from './FooterComponent';
function Home(props) {
    return(
      <div>
        <Header/>
      <div className="container-fluid" id="pad">
                                                  {/* This is the first row */}
          <div id="row1" className="row">              
            <div id="row-col-1"className="col-12 col-md-8" style={{margin: "auto"}}>
              <h1 className="main-text">Shaping Careers </h1><h1 className="main-text2"> Through </h1>
              <h1 className="main-text" style={{lineHeight: "1.5"}}>Artificial Intelligence</h1>
              <h2 className="sub-text">Efficient A.I. based hiring solutions </h2>
              <button className="custom-button2" >
                   Get Started
              </button>
            </div>
            <div className="col-12 col-md-4 ">
              <img  id="numounomobile"src={`${process.env.PUBLIC_URL}/assets/images/mobile.png`} alt="not found"/>
            </div>
          </div>

                                                   {/* This is the second row */}
          <div id="row1" className="row">
            <div className="col-12 col-md-5 mx-auto">
                <img width="100%" src={`${process.env.PUBLIC_URL}%assets/images/man.png`} alt="not found"/>
            </div>
            <div id="center-text" className="col-12 col-md-5 ">
              <div  >
                <h3 id="side-heading">What do we do?</h3>
              </div>
                <p id="side-heading-child">We are Creative Director and UI/UX Designer from New York, working in web development and print media. We enjoy turning complex problems into simple, beautiful and intuitive designs.
      <br/>
      <br/>
  Our job is to build your website so that it is functional and user-friendly but at the same time attractive.</p>
                <button className="custom-button2" >
                    Know More
                </button>
              
            </div>
          </div>  
                                               {/* This is the third row */}
          <div id="row2" className="row">             
            <div className="col-12 col-md-5" id="content">
              <div> 
                <h3 id="side-heading">Sneak Peek !</h3>
              </div>
                <p id="side-heading-child">We are Creative Director and UI/UX Designer from New York, working in web development and print media. We enjoy turning complex problems into simple, beautiful and intuitive designs.
                <br/>
      <br/>
Our job is to build your website so that it is functional and user-friendly but at the same time attractive.</p>

              </div>
              
            <div  className="col-12 col-md-6 ml-auto">
                <ReactPlayer height="560px" width="auto" controls url='https://www.youtube.com/watch?v=giYeaKsXnsI.mp4'/>
            </div>
          </div>
              
                                                 {/* This is the Card row */}
        <div id="row1" className="row justify-content-center">                                         
          <div  className="col-12 col-md-6 col-lg-3 ">
            <Card id="card-odd" width="100%">
              <CardBody>
                <img id ="card-img" top src={`${process.env.PUBLIC_URL}/assets/images/grey_rectangle.png`} alt="Grey rectangle not found"/>
                <div id="bottom-text">
                <CardTitle id="card-heading">PARCELS</CardTitle>
                <CardText id="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  </CardText>
                </div>
              </CardBody>
            </Card>
          </div>
          <div  className="col-12 col-md-6 col-lg-3">
            <Card id="card-even" width="100%">
              <CardBody>
                <img id ="card-img" top src={`${process.env.PUBLIC_URL}/assets/images/grey_rectangle.png`} alt="Grey rectangle not found"/>
                <div id="bottom-text">
                <CardTitle id="card-heading">PARCELS</CardTitle>
                <CardText id="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  </CardText>
                </div>
              </CardBody>
            </Card>
          </div>
          <div  className="col-12 col-md-6 col-lg-3">
            <Card id="card-odd" width="100%">
              
              <CardBody>
                <img id ="card-img" top src="%PUBLIC_URL%/assets/images/grey_rectangle.png" alt="Grey rectangle not found"/>
                <div id="bottom-text">
                <CardTitle id="card-heading">PARCELS</CardTitle>
                <CardText id="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  </CardText>
                </div>
              </CardBody>
            </Card>
          </div>
          <div  className="col-12 col-md-6 col-lg-3">
            <Card id="card-even" width="100%">
              <CardBody>
                <img id ="card-img" top src={`${process.env.PUBLIC_URL}/assets/images/grey_rectangle.png`} alt="Grey rectangle not found"/>
                <div id="bottom-text">
                <CardTitle id="card-heading">PARCELS</CardTitle>
                <CardText id="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  </CardText>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Skill/>
        <Blog/>
        <Subscribe/>
        <Footer />
      </div>
    );
}

export default Home;   