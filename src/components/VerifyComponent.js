import React, { Component } from "react";
import { BACKEND_URL } from "../constants/constants";
import axios from "axios";
class VerifyComponent extends Component {
  componentDidMount() {
    const token = window.location.pathname.split("/")[3];
    const url = `${BACKEND_URL}/user/verify/${token}`;

    axios
      .get(URL)
      .then((res) => {
        console.log("res.data ", res.data);
      })
      .catch((err) => {
        console.log("err is ", err);
      });
  }
  render() {
    return <h1>LOading ....</h1>;
  }
}

export default VerifyComponent;
