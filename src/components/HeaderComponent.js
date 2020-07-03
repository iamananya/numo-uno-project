import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
   Modal } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { BACKEND_URL } from '../constants/constants';
import Login from './LoginModal';
import axios from 'axios';


class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isMdodalOpen: false,
            isMdodalOpenj:false,
            
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            instiEmail: '',

            loginEmail: '',
            loginPassword: ''
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.toggleModalj=this.toggleModalj.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
        this.handleJoin=this.handleJoin.bind(this);
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
        
        document.getElementById("root").style.filter = "blur(20px)";
        if(this.state.isMdodalOpen){
            document.getElementById("root").style.filter = "blur(0px)";
        }
    }
    toggleModalj(){
        this.setState({
            isMdodalOpenj: !this.state.isMdodalOpenj
        });
        document.getElementById("root").style.filter = "blur(20px)";
        if(this.state.isMdodalOpenj){
            document.getElementById("root").style.filter = "blur(0px)";
        }
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

    handleLoginClick = e => {
        e.preventDefault()

        const data = {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }

        const URL = `${BACKEND_URL}/user/login/`
        console.log("data is ", data)
        console.log("url is ", URL)
        axios
            .post(URL, data)
            .then(res => {
                console.log("res is ", res.data);
                if(res.data.message === "success") {
                    localStorage.setItem("tttoken",res.data.token)
                    console.log("FRONTEND TEAM LOGIN SUCES REDIRECT TO LOGIN PAGE")
                }
            })
            .catch(err => {
                console.log("err is ", err)
                if(err.response.status === 401) {
                    console.log("FRONTEND TEAM SHOW INVALID CREDENTIALS")
                }

            })
    }

    scrollToFooter(){
        const anchor = document.querySelector('#footer')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    handleSubmit = (e) => {
      e.preventDefault()
      
      // check if password and confirm password match, raise error accordingly
      if(this.state.password !== this.state.confirmPassword) {
        console.log("FRONTEND TEAM, please show the error");
        return
      }

      const data = {
        name: this.state.firstName + ' ' + this.state.lastName,
        email: this.state.email,
        password_hash: this.state.password,
        insti_email: this.state.instiEmail
      }

      const URL = BACKEND_URL + '/user/signup/'
      console.log("sending this ", data)
      axios
        .post(URL,data)
        .then(res => {
          console.log("res is ", res.data);
          if (res.message === "success") {
            console.log("FRONTEND TEAM TELL THEM TO SEE THEIR MAIL I")
          }
        })
        .catch(err => {
          if (err.response.status === 400) 
          console.log("FRONTEND TEAM - SHOW WRONG EMAIL ADDRESS GIVEN BOLKE")
          else if (err.response.status === 500) 
          console.log("FRONTEND TEAM - SHOW unable to conect to server GIVEN BOLKE")
          else if (err.response.status === 409)
          console.log("FRONTEND TEAM SHOW USER ALREADY REG")
        })

    }

    render() {
        
        return(
            <div className="keep-fixed">
                <Navbar className="custom-nav" color="white" light expand="md">
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <NavLink className="nav-link"  to='/home'
                            style={{padding:"0px",
                                    margin:"0px"}}>
                                <img src={`${process.env.PUBLIC_URL}/images/logo.webp`}
                                height="50" width="auto" alt='Ristorante Con Fusion' />
                                </NavLink>
                            </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/about'> About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/podcast'> PodCasts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/blog'> Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.scrollToFooter}className="nav-link" to='/'> Contact Us</NavLink>
                            </NavItem>
                            
                            <NavItem className="ml-5 ">
                                <div onClick={this.toggleModal} id="login"> Login </div>
                                <Login isMdodalOpen={this.state.isMdodalOpen}/>
                            </NavItem>
                            <NavItem className="ml-2 ">
                                <button className="custom-button" onClick={this.toggleModalj}>
                                     Join
                                </button>
                            </NavItem> 
                            </Nav>
                            
                           
                        </Collapse>
                    </div>
                </Navbar>
                
                {/* <Modal  isOpen={this.state.isMdodalOpen} toggle={this.toggleModal} centered={true} 
                backdropTransition={{ timeout: 500000 }}
                centered={true}  style={{letterSpacing:"1px"}} >
                    <div className="modal-content" style={{borderRadius:"15px"}}>
           <center>
                    <div className="container" style={{display:"flex",justifyContent:"center",flexDirection:"row",height:"auto",borderRadius:"15px"
                    ,boxShadow: "0 0 6px rgba(0,0,0,.1)",width:"auto",
                }}>			
                    <form className="cd-signin-modal__form" style={{padding:"2em"}}>
	                <p style={{fontSize:"35px" , textAlign:"center" ,fontFamily:"Josefin Sans", color:"black"}}> Welcome Back</p>
                    <p style={{fontSize:"14px", fontFamily:"Montserrat",textAlign:"center",lineHeight:"18px",letterSpacing:"1px"}}>Signin to access personalized articles, podcasts, career enhancement services along with interest based professional communication groups.</p><br/>

 	<center><a  href="./img/cd-logo.svg" className="fb btn" alt="logo missing" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
		<img src={`${process.env.PUBLIC_URL}/assets/images/un.png`} style={{width: "40%",marginTop:"2px"}} alt="Logo missing"/></div>
		<div className="e" style={{textAlign: "left",marginTop:"3px"}}>
		Signin with Linkedin</div>
        	</a></center>
       <center><a  href="http://google.com/" className="twitter btn" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
          	<img src={`${process.env.PUBLIC_URL}/assets/images/abc.svg`}  style={{width: "40%",marginTop:"2px"}} alt=" twitter logo missing"/></div>
		<div className="e" style={{textAlign: "left",marginTop:"3px"}}>
 		Signin with Google</div>
        	</a></center>

        <center><a  href="http://apple.com/" className="google btn" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
           	<img src={`${process.env.PUBLIC_URL}/images/apple.webp`} style={{width: "40%",marginTop:"2px"} } alt=" twitter logo missing"
               /></div>
		<div className="e" style={{textAlign: "left",marginTop:"3px"}}>
		Signin with Apple</div>
        	</a></center>
		<p  style={{margin:"1em 0"}}>
            <center>
		or</center></p> 
 
					<p style={{margin:"1em 0"}}>
						<center>
                        <input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-email" type="email" placeholder="E-mail" 
                        onChange={e => this.setState({ loginEmail: e.target.value })}
                        style={{fontSize:"16px",width: "85%", fontFamily:"Josefin Sans",height:"80%"}}/>
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>

					<p style={{margin:"1em 0 0.5em 0"}}>  
						<center>
						<input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-password" type="password" placeholder="Password"
                        onChange={e => this.setState({ loginPassword: e.target.value })}
                        style={{fontSize:"16px",width: "85%", fontFamily:"Josefin Sans",height:"80%"}}/>
						
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>
					<div className="row">
						<div className="b"><p style={{color:"white"}}>.</p></div>
						<div className="c" style={{textAlign:"left"}}>
                            
						<p  style={{margin:"0.5em 0 0.5em 0.3em"}}>
							<input type="checkbox" id="remember-me" checked className="cd-signin-modal__input "/>
							<label for="remember-me" style={{fontSize:"12px", fontFamily:"Montserrat"}}>Remember me</label>
					</p></div></div>

					<p style={{margin:"0em 0"}}>
						<center><a href="twitter.com" className="twitter btn" style={{backgroundColor: "black",color:"#ffd700",
                         padding:"8px 12px",fontSize: "20px", textAlign:"center",  fontFamily:"Josefin Sans",boxShadow:"0 2",borderRadius:"10px"}}
                         onClick={this.handleLoginClick}
                         >
          								 Continue
       							 </a></center>
					</p>

					<center><a href="google.com" style={{fontSize: "14px", fontFamily: "Montserrat"}}>Forgot Password?</a></center><br/>
					
					<div onClick={this.toggleModalj} style={{fontSize:"12px" , fontFamily:"Montserrat"}}><center>No Account?
                        Create One</center></div>

				</form>
				
				</div></center>
                </div>
       </Modal> */}
       <Modal  isOpen={this.state.isMdodalOpenj} toggle={this.toggleModalj} centered={true} 
       backdropTransition={{ timeout: 500000 }} style={{letterSpacing:"1px"}}>
           <div className="modal-content" style={{borderRadius:"15px"}}>
           <center>
                    <div className="container" style={{display:"flex",justifyContent:"center",flexDirection:"row",height:"auto",borderRadius:"15px"
                    ,boxShadow: "0 0 8px rgba(0,0,0,.1)",width:"auto",
                }}>			
                    <form className="cd-signin-modal__form">
	                <p style={{fontSize:"30px" , textAlign:"center" ,fontFamily:"Josefin Sans", color:"black",marginBottom:"0px"}}>
                    Join Numo Uno</p>
                    <p style={{fontSize:"12px", fontFamily:"Montserrat",textAlign:"center",lineHeight:"18px",marginBottom:".5em"}}>
                    Create an account to access personalized articles, podcasts,
                     career enhancement services along with interest based professional communication groups.</p>

 	<center><a  href="./img/cd-logo.svg" className="fb btn" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
		<img src={`${process.env.PUBLIC_URL}/assets/images/un.png`} style={{width: "40%",marginTop:"2px"}} alt="Logo Missing"/></div>
		<div className="e" style={{textAlign: "left",marginTop:"3px"}}>
		Signin with Linkedin</div>
        	</a></center>
       <center><a  href="http://google.com/" className="twitter btn" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
          	<img src={`${process.env.PUBLIC_URL}/assets/images/abc.svg`}  style={{width: "40%",marginTop:"2px"}} alt="Logo Missing"/></div>
		<div className="e" style={{textAlign: "left" ,marginTop:"3px"}}>
 		Signin with Google</div>
        	</a></center>

        <center><a  href="http://apple.com/" className="google btn" style={{padding:"10px 12px"}}>
		<div className="b">
            	<p style={{color:"white"}}>.</p></div>
		<div className="f">
           	<img src={`${process.env.PUBLIC_URL}/assets/images/apple.webp`} style={{width: "40%",marginTop:"2px"}} alt="Logo Missing"/></div>
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
						
                        <input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signup-userfname" type="text"
                         placeholder="First Name" style={{fontSize: "16px",width: "90%", fontFamily:"Josefin Sans",marginLeft:"5px",height:"70%"}} onChange={(e) => this.setState({firstName: e.target.value})}/>
						
					</p></div>
					<div class="d"><p style={{color:"white"}}>.</p></div>
					<div class="a">
						<p class="cd-signin-modal__fieldset">
                        <input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signup-userlname" type="text"
                         placeholder="Last Name" style={{fontSize: "16px",width: "90%", fontFamily:"Josefin Sans",marginRight:"5px",height:"70%"}} onChange={(e) => this.setState({lastName: e.target.value})}/>
						
					</p></div></div>
					<p style={{margin:"1em 0"}}>
						<center>
                        <input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-email" type="email" placeholder="E-mail" 
                        onChange={(e) => this.setState({email: e.target.value})}
                        style={{fontSize:"16px",width: "80%", fontFamily:"Josefin Sans" ,height:"70%"}}/>
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>
					{/* <p style={{margin:"1em 0"}}>
						<center>
                        <input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-email" type="email" placeholder="Institute E-mail" 
                        onChange={(e) => this.setState({instiEmail: e.target.value})}
                        style={{fontSize:"16px",width: "80%", fontFamily:"Josefin Sans"}}/>
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p> */}

					<p style={{margin:"1em 0"}}>  
						<center>
						<input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-password" type="password"  placeholder="Password"
                        onChange={(e) => this.setState({password: e.target.value})}
                        style={{fontSize:"16px",width: "80%", fontFamily:"Josefin Sans",height:"70%"}}/>
						
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>
				
					<p style={{margin:"1em 0 0.5em 0"}}>  
						<center>
						<input className="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signin-password" type="password"  placeholder="Confirm Password"
                        onChange={(e) => this.setState({confirmPassword: e.target.value})}
                        style={{fontSize:"16px",width: "80%", fontFamily:"Josefin Sans",height:"70%"}}/>
						
						<span className="cd-signin-modal__error">Error message here!</span></center>
					</p>
                    
					<div className="row">
						<div className="b"><p style={{color:"white"}}>.</p></div>
						<div className="c" style={{width: "80%", textAlign:"left"}}>
						<p  style={{margin:"0.5em 0 0.5em 0.3em"}}>
							<input type="checkbox" id="remember-me" checked className="cd-signin-modal__input "/>
							<label for="remember-me" style={{fontSize:"12px", fontFamily:"Montserrat"}}>I agree to Terms and Conditions</label>
					</p></div></div>

					<p style={{margin:"0em 0"}}>
						<center><a  className="twitter btn" style={{backgroundColor: "black",color:"#ffd700",
                         padding:"5px 12px",fontSize: "20px", textAlign:"center",  fontFamily:"Josefin Sans",boxShadow:"0 2",borderRadius:"10px"}}
                         onClick={(e) => this.handleSubmit(e)}
                         >
          								 Continue
       							 </a></center>
					</p>

					<div onClick={this.toggleModal} style={{fontSize:"12px" , fontFamily:"Montserrat"}}><center>Already Have an Account?
                        Signin</center></div>

				</form>
				
				</div></center>
                </div>
       </Modal>
            </div>
        );
    }
  }

export default Header;
