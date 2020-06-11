import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isMdodalOpen: false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    toggleModal(){
        this.setState({
            isMdodalOpen: !this.state.isMdodalOpen
        });
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }
    render() {
        
        return(
            <div className="keep-fixed">
                <Navbar className="custom-nav" color="white" light expand="md">
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="45" width="auto" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home' > Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'> Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'> About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'> Pod Casts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'> Contact Us</NavLink>
                            </NavItem>
                            
                            <NavItem className="ml-5 ">
                                <NavLink className="nav-link" to='/contactus' id="login"> Login</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 ">
                                <button className="custom-button" onClick={this.toggleModal}>
                                     Join
                                </button>
                            </NavItem>
                            </Nav>
                            
                           
                        </Collapse>
                    </div>
                </Navbar>
                
                <Modal id="modal" isOpen={this.state.isMdodalOpen} toggle={this.toggleModal}>
           
           <center>
                    <div className="container">			
                    <form className="cd-signin-modal__form">
	                <p style={{fontSize:"35px" , textAlign:"center" ,fontFamily:"Josefin Sans", color:"black"}}> Welcome Back</p><br/>
                    <p style={{fontSize:"14px", fontFamily:"Montserrat",textAlign:"center",lineHeight:"18px"}}>Signin to access personalized articles, podcasts, career enhancement services along with interest based professional communication groups.</p><br/>

 	<center><a  src="./img/cd-logo.svg" className="fb btn">
		<div className="b">
            	<p>.</p></div>
		<div className="f">
		<img src="un.png" style={{width: "10%"}} /></div>
		<div className="e">
		Signin with Linkedin</div>
        	</a></center>
       <center><a  src="http://google.com/" className="twitter btn">
		<div className="b">
            	<p>.</p></div>
		<div className="f">
          	<img src="abc.svg"  style={{width: "10%"}}/></div>
		<div className="e">
 		Signin with Google</div>
        	</a></center>

        <center><a  src="http://apple.com/" className="google btn">
		<div className="b">
            	<p>.</p></div>
		<div className="f">
           	<img src="apple.webp" style={{width: "10%"}}/></div>
		<div className="e">
		Signin with Apple</div>
        	</a></center>
		<p  style={{margin:"1em 0"}}>
            <center>
		or</center></p> 
 
					<p style={{margin:"1em 0"}}>
						<center>
						<input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-email" type="email" placeholder="E-mail"/>
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>

					<p style={{margin:"1em 0"}}>  
						<center>
						<input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-password" type="text"  placeholder="Password"/>
						
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>
					<div className="row">
						<div className="b"><p>.</p></div>
						<div className="c">
						<p  style={{margin:"1em 0"}}>
							<input type="checkbox" id="remember-me" checked className="cd-signin-modal__input "/>
							<label for="remember-me">Remember me</label>
					</p></div></div>

					<p style={{margin:"1em 0"}}>
						<center><a href="#" className="twitter btn" style={{backgroundColor: "black",color:"#ffd700",
                         padding:"8px 12px",fontSize: "20px", textAlign:"center",  fontFamily:"Josefin Sans"}}>
          								 Continue
       							 </a></center>
					</p>

					<center><a href="#" style={{fontSize: "14px", fontFamily: "Montserrat;"}}>Forgot Password?</a></center><br/><br/>
					
					<center><p style={{fontSize:"14px" , fontFamily:"Montserrat"}}>No Account?<a href="#0" data-signin="signup" >Create One</a></p></center>

				</form>
				
				</div></center>
       </Modal>
            </div>
        );
    }
  }

export default Header;