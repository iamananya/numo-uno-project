import React from "react";

function Skill(props) {
  return (
    <div className="container">
      <div className="col-12">
        <div className="center-heading">
          <h3 id="yellow-heading">WHAT WE OFFER?</h3>
        </div>
      </div>

      <div className="col-12">
        <div>
          <h3 className="center-heading">Our Provided Services & Features</h3>
        </div>
      </div>
      {/* This is the first row */}
      <div className="row m-auto" id="skill-box">
        <img
          id="tl"
          
          src={`${process.env.PUBLIC_URL}/images/group_tl.webp`}
          alt="not found"
        />
        <img
          id="tr"
          
          src={`${process.env.PUBLIC_URL}/images/group_tr.webp`}
          alt=" not found"
        />
        <img
          id="ml"

          src={`${process.env.PUBLIC_URL}/images/group_ml.webp`}
          alt=" not found"
        />
        <img
          id="mr"
          
          src={`${process.env.PUBLIC_URL}/images/group_mr.webp`}
          alt=" not found"
        />
        <img
          id="bl"
          src={`${process.env.PUBLIC_URL}/images/group_bl.webp`}
          alt=" not found"
        />
        <img
          id="br"
          
          src={`${process.env.PUBLIC_URL}/images/group_br.webp`}
          alt="not found"
        />
      </div>
    </div>
  );
}

export default Skill;
