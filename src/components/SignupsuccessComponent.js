import React, { Component } from 'react';
import { Form, FormGroup, Input, FormFeedback } from 'reactstrap';

import axios from 'axios';


class Signupsuccess extends Component {

    constructor(props){
        super(props);
        this.state={
           
            password: '',
            confirmPassword: '',
            touched: {
                password: false,
                confirmPassword: false,
              },
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
        this.handleJoin=this.handleJoin.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });
      }
    handleBlur = (field) => (evt) => {
        this.setState({
          touched: { ...this.state.touched, [field]: true },
        });
      };

    validate(telnum,password,confirmPassword,){
        const errors = {
          telnum: "",
          password: "",
          confirmPassword: "",
        };
        
        const reg = /^\d+$/;
        
         if (this.state.touched.password && this.state.password.length < 6)
          errors.password = "Password should be >=6";
        if (this.state.touched.confirmPassword && this.state.confirmPassword.length != this.state.password.length)
          errors.confirmPassword = "Password didn't match";
        return errors;
      }
    
    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }
    handleJoin(event){
        this.toggleModalj();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }
    scrollToFooter(){
        const anchor = document.querySelector('#footer')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    scrollToAbout(){
        const anchor = document.querySelector('#about')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    

    render() {
        const errors = this.validate(
            this.state.password,
            this.state.confirmPassword,
          );
        return(
		    <div className="xyz">
                    <center>
<div class="container" style=" border-radius:15px; background-color:white;">			
<form class="cd-signin-modal__form">
	<div class="hd">
	<p style="font-size:35px , text-align:center ,font-family:Josefin Sans; color:black">Signup Completed</p></div><br/>
	
	<div class="hd1">
        <p style="font-size:16px; font-family:Montserrat;text-align:center;line-height:18px;letter-spacing:1px;">Please check your mail to verify your account.</p></div>

 	
 
					

				</form>
				
				</div></center>
                		</div>

        );
    }
  }

export default Signupsuccess;