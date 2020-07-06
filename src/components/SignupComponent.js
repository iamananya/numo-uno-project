import React, { Component } from 'react';
import { Form, FormGroup, Input, FormFeedback } from 'reactstrap';

import axios from 'axios';


class Signup extends Component {

    constructor(props){
        super(props);
        this.state={

            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            instiEmail: '',

            touched: {
                firstName: false,
                lastName: false,
                email: false,
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

    validate(firstName, lastName, telnum, email,password,confirmPassword,){
        const errors = {
          firstName: "",
          lastName: "",
          telnum: "",
          email: "",
          password: "",
          confirmPassword: "",
        
        };
        if (this.state.touched.firstName && firstName.length < 3)
          errors.firstName = "Wrong";
        else if (this.state.touched.firstName && firstName.length >= 15)
          errors.firstName = "Wrong";
        if (this.state.touched.lastName && lastName.length < 3)
          errors.lastName = "Wrong";
        else if (this.state.touched.lastName && lastName.length >= 10)
          errors.firstName = "Wrong";
    
        const reg = /^\d+$/;
        
        if (this.state.touched.email && this.state.email.split("").filter((x) => x === "@").length !== 1)
          errors.email = "Email is not correct";
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
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password,
            this.state.confirmPassword,
            
          );
        return(
            <div className="xyz">
            <center>
            <div className="container" style={{display:"flex",justifyContent:"center",flexDirection:"row",height:"auto",borderRadius:"15px"

                    ,boxShadow: "0 0 8px rgba(0,0,0,.1)",width:"36%",backgroundColor:"white",marginTop:"1.7%"

                }}>			
            <Form className="cd-signin-modal__form">
	    		<p style={{fontSize:"30px" , textAlign:"center" ,fontFamily:"Josefin Sans", color:"black",marginBottom:"0px"}}>
                        Join Numo Uno</p>
                    	<p style={{fontSize:"12px", fontFamily:"Montserrat",textAlign:"center",lineHeight:"18px",marginBottom:".5em"}}>
                     	Create an account to access personalized articles, podcasts,
                     	career enhancement services along with interest based professional communication groups.</p>
		<center><a  href="/images/cd-logo.svg" className="fb btn" alt="logo missing" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
		<img src={`${process.env.PUBLIC_URL}/images/un.png`} style={{width: "40%",marginTop:"2px"}} alt="Logo missing"/></div>
		<div className="e" style={{textAlign: "left",marginTop:"3px"}}>
		Signin with Linkedin</div>
        	</a></center>
       <center><a  href="http://google.com/" className="twitter btn" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
          	<img src={`${process.env.PUBLIC_URL}/images/abc.svg`}  style={{width: "40%",marginTop:"2px"}} alt=" twitter logo missing"/></div>
		<div className="e" style={{textAlign: "left",marginTop:"3px"}}>
 		Signin with Google</div>
        	</a></center>

        <center><a  href="http://apple.com/" className="google btn" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
           	<img src={`${process.env.PUBLIC_URL}/images/apple.png`} style={{width: "40%",marginTop:"2px"} } alt=" twitter logo missing"
               /></div>
		<div className="e" style={{textAlign: "left",marginTop:"3px"}}>
		Signin with Apple</div>
        	</a></center>
		<p  style={{margin:".5em 0"}}>
                <center>
		or</center></p> 
            

            <div class="row">
					<div class="b"><p style={{color:"white"}}>.</p></div>
					<div class="a">
					
					<p class="cd-signin-modal__fieldset">
		
                        <input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="firstName" type="text" name="firstName" placeholder="First Name"
                        style={{fontSize: "16px",width: "90%", fontFamily:"Josefin Sans",marginLeft:"5px",height:"70%"}}/>
                 	</p></div>
				<div class="b" style={{width: "2.6%"}}><p style={{color:"white"}}>.</p></div>
					<div class="a">
					
					<p class="cd-signin-modal__fieldset">
		
                        <input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="lastName" type="text" name="lastName" placeholder="Last Name"
                        style={{fontSize: "16px",width: "90%", fontFamily:"Josefin Sans",marginLeft:"5px",height:"70%"}}/>
                 	</p></div></div>
					<p style={{margin:"0.5em 0"}}>
						<center>
                        
                        <FormGroup>
                        <Input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="email" type="email" placeholder="E-mail" 
                        name="email"
                        value={this.state.email} 
			valid={errors.email === ""&&this.state.touched.email}
			invalid={errors.email !== ""}
			onBlur={this.handleBlur("email")}
			onChange={this.handleInputChange}
                        style={{fontSize:"16px",width: "80%", fontFamily:"Josefin Sans",height:"80%"}}/>
						<span className="cd-signin-modal__error">Error message here!</span>
                        
                        <FormFeedback style={{ fontSize: "14px" }}>
                            {errors.email}
                         </FormFeedback>		
                        </FormGroup>
                        </center>
					</p>
					{/* <p style={{margin:"0.5em 0"}}>
						<center>
                        <input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-email" type="email" placeholder="Institute E-mail" 
                      
                        style={{fontSize:"16px",width: "80%", fontFamily:"Josefin Sans"}}/>
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p> */}

					<p style={{margin:"0.5em 0"}}>  
						<center>
                        <FormGroup>
						<Input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="password" type="password"  placeholder="Password"
                        name="password"
                        value={this.state.password} 
			valid={errors.password === "" && this.state.touched.password}
			invalid={errors.password !== ""}
			onBlur={this.handleBlur("password")}
			onChange={this.handleInputChange}
                        
                        style={{fontSize:"16px",width: "80%", fontFamily:"Josefin Sans",height:"70%"}}/>
                        
			<FormFeedback style={{ fontSize: "14px" }}>
                            {errors.password}
                         </FormFeedback>			
                          </FormGroup>
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>
				
					<p style={{margin:"0.5em 0 0.5em 0"}}>  
						<center>
                        <FormGroup>
						<Input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="confirmPassword" type="password"  placeholder="Confirm Password"
                        name="confirmPassword"
                        value={this.state.confirmPassword} 
			valid={errors.confirmPassword === "" && this.state.touched.confirmPassword}
			invalid={errors.confirmPassword !== ""}
			onBlur={this.handleBlur("confirmPassword")}
			onChange={this.handleInputChange}
                        
                        style={{fontSize:"16px",width: "80%", fontFamily:"Josefin Sans",height:"70%"}}/>
                        
		       <FormFeedback style={{ fontSize: "14px" }}>
                            {errors.confirmPassword}
                         </FormFeedback>		
                           </FormGroup>
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>
                    
					<div className="row">
						<div className="b"><p style={{color:"white"}}>.</p></div>
						<div className="c" style={{width: "80%", textAlign:"left"}}>
						<p  style={{margin:"0.5em 0 0.5em 0.3em"}}>
                            <FormGroup>
							<Input type="checkbox" id="remember-me" checked className="cd-signin-modal__input "/>
							<label for="remember-me" style={{fontSize:"13px", fontFamily:"Montserrat"}}> I agree to Terms and Conditions</label>
                            </FormGroup>
                    </p></div></div>

					<p style={{margin:"0em 0"}}>
						<center><a  className="twitter btn" style={{backgroundColor: "black",color:"#ffd700",
                         padding:"5px 12px",fontSize: "20px", textAlign:"center",  fontFamily:"Josefin Sans",boxShadow:"0 2",borderRadius:"10px"}}>
          								 Continue
       							 </a></center>
					</p>

					<p style={{fontSize:"12px" , fontFamily:"Montserrat"}}><center>Already Have an Account?
                        <a href="/login" style={{fontSize:"12px", fontFamily: "Montserrat"}}>Signin</a></center></p>

				</Form>
				
				</div></center>
                        </div>

        );
    }
  }

export default Signup;
