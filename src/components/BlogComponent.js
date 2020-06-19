import React from 'react';


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
            <div className="col-12 col-md-8">
                <img id="blog-main"width="100%" src="/assets/images/img_lake.png" alt="notfound"
                 style={{ boxShadow: "-1px 3px 20px rgba(0,0,0,.16)",padding:"0px",margin:"0px"}}/>
                <div style={{position:"absolute",bottom:"20px",left:"50px"}}>
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
                <div style={{ boxShadow: "-1px 3px 20px rgba(0,0,0,.16)",padding:"0px",margin:"0px"}} >
                <img width="100%" src="/assets/images/side_blog.png" alt="notfound"/>
                <p></p>
                
                </div>
            </div>
        </div>
                                                   {/* This is the second row */}        
        <div  className="row">              
            <div className="col-12 col-md-8">
                <img width="100%" src="/assets/images/group_391.png" alt="notfound"/>
                <p id="side-blog">Surfing in Maldives</p>
            </div>
            <div className="col-12 col-md-4 ">
                <img width="100%" src="/assets/images/group_393.png" alt="notfound"/>
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