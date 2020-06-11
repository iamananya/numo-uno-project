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
                <img width="100%" src="/assets/images/group_394.png" alt="notfound"/>
            </div>
            <div className="col-12 col-md-4 ">
                <img width="100%" src="/assets/images/group_392.png" alt="notfound"/>
            </div>
        </div>
                                                   {/* This is the second row */}        
        <div  className="row">              
            <div className="col-12 col-md-8">
                <img width="100%" src="/assets/images/group_391.png" alt="notfound"/>
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