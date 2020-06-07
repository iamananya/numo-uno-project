import React from 'react';


function Skill(props) {
    return(
    <div className="container">
        <div id="row1" className="row">
            <div className="col-12">
                <div className="center-heading">
                    <h3>Give it a read & Watch</h3>
                </div>
            </div>
        </div>
                                                  {/* This is the first row */}
        <div  className="row m-auto">              
            <div className="col-12 col-md-5">
                <img width="100%" src="/assets/images/group_tl.png" alt="image not found"></img>
                <img width="100%" src="/assets/images/group_ml.png" alt="image not found"></img>
                <img width="100%" src="/assets/images/group_bl.png" alt="image not found"></img>
                
            </div>
            <div className="col-12 col-md-5 ">
                <img width="100%" src="/assets/images/group_tr.png" alt="image not found"></img>
                <img width="100%" src="/assets/images/group_mr.png" alt="image not found"></img>
                <img width="100%" src="/assets/images/group_br.png" alt="image not found"></img>
            </div>             

        </div>
        


      </div>
    );
}

export default Skill;   