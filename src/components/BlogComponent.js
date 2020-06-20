import React from 'react';
import { Card,CardImg, CardBody,CardText,CardTitle } from 'reactstrap';


function Blog(props) {
    return(
    <div className="container">
        <div id="row1" className="row">
            <div className="col-12">
                <div >
                    <h3 className="center-heading">Give it a read & Watch</h3>
                </div>
            </div>
        </div>
                                                  {/* This is the first row */}
        <div  className="row">              
            <div className="col-12 col-md-7" style={{borderRadius:"10px",marginRight:"auto"}}>
                <img id="blog-main"width="100%" src="/assets/images/img_lake.png" alt="notfound"
                 style={{ boxShadow: "-1px 3px 20px rgba(0,0,0,.16)",padding:"0px",margin:"0px",borderRadius:"10px"}}/>
                <div style={{position:"absolute",bottom:"10px",left:"50px"}}>
                   <div id="blog-main">
                        Must see places<br/> for summer
                    </div>
                    <div >
                        <p id="img-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet 
                            elit hendrerit rutrum.
                             Nam egestas laoreet ligula, ac elementum risus. Aliquam 
                             volutpat ex eget elit venenatis, vel luctus arcu pulvinar. </p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 "  >
                <div style={{ boxShadow: "-1px 3px 10px rgba(0,0,0,.16)",padding:"0px",margin:"0px",borderRadius:"10px"}} >
                <img width="100%" src="/assets/images/side_blog.png" alt="notfound"/>
                <p id="travel">TRAVEL</p>
                <p id="side">Surfing in Maldives</p>
                <p id="blog-text">It’s windy. The cool breeze of the ocean.
                 It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder</p>
                
                </div>
            </div>
        </div>
                                                   {/* This is the second row */}        
        <div  className="row" style={{marginTop:"30px"}}>              
            <div className="col-12 col-md-7" style={{ boxShadow: "-1px 3px 20px rgba(0,0,0,.16)",padding:"0px"
            ,marginRight:"auto", borderRadius:"10px",display:"inherit"}} >
                
                <img width="20%"  src="/assets/images/bll.png" alt="notfound" style={{margin:" auto 1.0vw",width:"10vw",height:"10vw"}}/>
                    <div id="blog-bottom-left" style={{fontSize:"1vm",margin: "auto 0px",paddingBottom:" 10px" ,lineHeight:".9"}}> FOOD & LIFESTYLE
                        <p id="blog-text" style={{margin:"0vw",lineHeight:".95"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>    nn

                <img width="20%" src="/assets/images/blr.png" alt="notfound" style={{margin:" auto 1.0vw",width:"10vw",height:"10vw"}}/>
                <div id="blog-bottom-left" style={{fontSize:"1vm",margin: "auto 0px",paddingBottom:" 10px" ,lineHeight:".9"}}> FOOD & LIFESTYLE
                        <p id="blog-text" style={{margin:"0vw",lineHeight:".9"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
            </div>
            <div className="col-12 col-md-4 " style={{ boxShadow: "-1px 3px 20px rgba(0,0,0,.16)",padding:"0px",margin:"0px",borderRadius:"10px"}}>
                <img width="100%" height="100%" src="/assets/images/blrr.png" alt="notfound"/>
            </div>
            <div className="mx-auto">
            <button className="custom-button2" type="submit">
            Blog
            </button>
            <button className="custom-button2" type="submit">
            Pod Casts
            </button>

        </div>
        </div>
        


      </div>
    );
}

export default Blog;   