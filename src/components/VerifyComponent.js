import React, { Component } from "react";
import { BACKEND_URL } from "../constants/constants";
import axios from "axios";
class VerifyComponent extends Component {
  componentDidMount() {
    const token = window.location.pathname.split("/")[4];
    console.log("token is ", token)
    const URL = `${BACKEND_URL}/user/verify/${token}/`;

    console.log("URL is ", URL)
    axios
      .get(URL)
      .then((res) => {
        console.log("res.data ", );
        if (res.data.message === "success") {
          console.log("FRONTEND TEAM REDIRECT TO LOGIN PAGE ")
        }
      })
      .catch((err) => {
        console.log("err is ", err);
        console.log("FRONEND TEAM - SHOW SERVER ERROR")
      });
  }
  render() {
    return <h1>LOading ....</h1>;
  }
}

export default VerifyComponent;
