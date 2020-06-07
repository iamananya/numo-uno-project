import React from 'react';
import { Card,  CardText, CardBody,
  CardTitle } from 'reactstrap';
import ReactPlayer from 'react-player'

function Home(props) {
    return(
      <div className="container">
                                                  {/* This is the first row */}
          <div id="row1" className="row">              
            <div id="row-col-1"className="col-12 col-md-8">
              <h1 className="main-text">Shaping Careers Through Artificial Intelligence</h1>
              <h2 className="sub-text">Efficient A.I. based hiring solutions </h2>
              <button className="custom-button2" >
                   Get Started
              </button>
            </div>
            <div className="col-12 col-md-4 ">
              <img height="500px" src="/assets/images/mobile.png" alt="image not found"></img>
            </div>
          </div>

                                                   {/* This is the second row */}
          <div id="row1" className="row">
            <div id="row-col-1"className="col-12 col-md-7 mr-5">
                <img width="100%" src="/assets/images/man.png" alt="image not found"></img>
            </div>
            <div id="center-text" className="col-12 col-md-4 ">
              <div  className="side-heading">
                <h3>What do we do?</h3>
              </div>
                <p>We are Creative Director and UI/UX Designer from New York, working in web development and print media. We enjoy turning complex problems into simple, beautiful and intuitive designs.

  Our job is to build your website so that it is functional and user-friendly but at the same time attractive.</p>
                <button className="custom-button2" >
                    Know More
                </button>
              
            </div>
                                               {/* This is the third row */}
            <div id="row2" className="row">             
              <div id="center-text" className="col-12 col-md-4 ">
                <div className="side-heading"> 
                  <h3>Sneak Peek !</h3>
                </div>
                  <p>We are Creative Director and UI/UX Designer from New York, working in web development and print media. We enjoy turning complex problems into simple, beautiful and intuitive designs.

  Our job is to build your website so that it is functional and user-friendly but at the same time attractive.</p>

                </div>
                
              <div id="row-col-1"className="col-12 col-md-7 ml-5">
                  <ReactPlayer width="100%" height="auto" controls url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>
              </div>
            </div>
         </div>       
                                                 {/* This is the Card row */}
        <div id="row1" className="row justify-content-center">                                         
        <div  className="col-6 col-md-3 ">
            <Card id="card-odd" width="100%">
              
              <CardBody>
                <img id ="card-img" top src="/assets/images/grey_rectangle.png" alt="Grey rectangle not found"/>
                <CardTitle>Grey Reactangle</CardTitle>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. </CardText>
              </CardBody>
            </Card>
          </div>
          <div  className="col-6 col-md-3">
            <Card id="card-even" width="100%">
              
              <CardBody>
                <div>
                <img id ="card-img" top src="/assets/images/grey_rectangle.png" alt="Grey rectangle not found"/>
                </div>
                <CardTitle>Grey Reactangle</CardTitle>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. </CardText>
              </CardBody>
            </Card>
          </div>
          <div  className="col-6 col-md-3">
            <Card id="card-odd" width="100%">
              
              <CardBody>
                <img id ="card-img" top src="/assets/images/grey_rectangle.png" alt="Grey rectangle not found"/>
                <CardTitle>Grey Reactangle</CardTitle>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. </CardText>
              </CardBody>
            </Card>
          </div>
          <div  className="col-6 col-md-3">
            <Card id="card-even" width="100%">
              
              <CardBody>
                <img id ="card-img" top src="/assets/images/grey_rectangle.png" alt="Grey rectangle not found"/>
                <CardTitle>Grey Reactangle</CardTitle>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
}

export default Home;   