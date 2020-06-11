import React from 'react';


function Skill(props) {
    return(
    <div className="container">
        
        <div className="col-12">
            <div className="center-heading">
                <h3 id="yellow-heading">WHAT WE OFFER?</h3>
            </div>
        </div>
        
        <div className="col-12">
            <div  >
                <h3 className="center-heading">Our Provided Services & Features</h3>
            </div>
        </div>
                                                  {/* This is the first row */}
        <div  className="row m-auto">              
            <div className="col-12 col-md-6">
                <img width="100%" src="/assets/images/group_tl.png" alt="not found"/>
                <img width="100%" src="/assets/images/group_ml.png" alt=" not found"/>
                <img width="100%" src="/assets/images/group_bl.png" alt=" not found"/>
                
            </div>
            <div className="col-12 col-md-6 ">
                <img width="100%" src="/assets/images/group_tr.png" alt=" not found"/>
                <img width="100%" src="/assets/images/group_mr.png" alt=" not found"/>
                <img width="100%" src="/assets/images/group_br.png" alt="not found"/>
            </div>             

        </div>
        


      </div>
    );
}

export default Skill;   