import React, { useState } from 'react'
import {useHistory } from "react-router-dom";
import { Container, Row, Col, Button, FormControl, InputGroup } from "react-bootstrap";

import { connect } from 'react-redux' 
import {signUp, logIn, logout} from "../function/controllers/auth/index" 


// importing redux
import { login } from "../redux"


import Usericon from '../assets/User-icon.png';
import Emailicon from '../assets/Email-icon.png';
import Passwordicon from '../assets/Password-icon.png';
import logo from '../assets/logo.png';
import phoneicon from '../assets/phoneicon.png'







// const bg = {
//    backgroundColor:"white"
// }

const errorPop = {
   backgroundColor: "crimson",
   padding: "2px 10px",
   marginTop: "10px",
   color: "white",
   borderRadius:"6px"
}

const successPop = {
   backgroundColor: "mediumseagreen",
   padding: "2px 10px",
   marginTop: "10px",
   color: "white",
   borderRadius:"6px"
}

const loading = {
   opacity: "0.2",
   cursor:"no-drop"
}



const Register = ({appState, log_in}) => {
   let history = useHistory();
   const state = appState
   const [compState, setCompState] = useState({
      loading: false, 
   })
   
   const [name, setName] = useState("")
   const [phone, setPhone] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirm_password, setPassword2] = useState("")
   


   const triggerRegister = () => {
      setCompState({ ...compState, loading: true })
      let signupPayload = {
         name , phone , email ,  password ,  confirm_password 
      } 
      
      signUp(signupPayload).then(response => {
         console.log(response)
         if (response.success == false) {
            alert("Fill out all fields")
            setCompState({ ...compState, error:true,  error_msg: response.message })
            setTimeout(() => setCompState({ ...compState, error: false, loading:false }), 3000);
         } else {
            log_in(response.data)
            setCompState({ ...compState, error:false, success:true,  success_msg: response.message })
            setTimeout(() => setCompState({ ...compState, error: false, loading:false }), 3000);
         }
      }) 
   }

   return state.loggedIn === true ? (
     <span>{history.push("/")}</span>
  ): ( 

   <div className='signup'>


<nav class="navbar navbar-expand-lg navbar-light bg-dark d-nav sticky-top"  >
      
       
      <a href="/" className="navbar-brand "><img src={logo} alt="The logo" /></a>
     
     
  </nav>

<div className="container-fluid">
<div className="container">
<div className="row">
          <div className="col-sm signup-sm text-center">
           <img src={logo} alt="" />
           <p className='mt-4'>The Quickest and Safest Way <br />
           To Buy Your Event Tickets.</p>

                 <div class="form-group">
                <b> <p class="text-center">Already have an account? </p> </b>
                </div>
                <div class="col-md-12 text-center ">
                <button  onClick={()=>{ history.push("/login")}} type="submit" class=" btn btn-block  btn-primary login-btn">Login</button> 
                </div>

          </div>

          <div className="col-sm  signup-sm2">
       <h3 className='text-center text-light'>Create Account</h3>

       <form onClick={(e)=>{e.preventDefault()}}>
                            {/* User Name */}
                           <div class="form-group mt-2">

                           <div class="input-group">
                           <div class="input-group-addon">
                             <img src={Usericon} alt="" />
                          </div>
                              <input onChange={(e) => { setName(e.target.value)  }} value={name} type="text" name="text"  class="form-control" id="fullname" aria-describedby="fullname" placeholder="Full Name" required />
                           </div>

                           </div>
                           {/*User email  */}
                           <div class="form-group mt-2">

                           <div class="input-group">
                           <div class="input-group-addon">
                             <img src={Emailicon} alt="" />
                          </div>
                              <input  onChange={(e) => { setEmail(e.target.value)  }} value={email} type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                          </div>

                           </div>

                           {/* User Phone Number */}
                              <div class="form-group mt-2">

                              <div class="input-group">
                              <div class="input-group-addon">
                              <img src={phoneicon} alt="" />
                              </div>
                                 <input type="number" onChange={(e) => { setPhone(e.target.value)  }} value={phone}  name="phone"  class="form-control" id="phone" aria-describedby="phonenumber" placeholder="Phone Number" maxLength="11" required />
                              </div>

                              </div>

                              {/* User Password */}

                           <div class="form-group mt-2">
                              
                           <div class="input-group">
                           <div class="input-group-addon">
                             <img src={Passwordicon} alt="" />
                          </div>
                              <input  onChange={(e) => { setPassword(e.target.value)  }} value={password} type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password" required/>
                         </div>
                           </div>

                              {/* User  Password Check */}
                           <div class="form-group mt-2">
                              
                           <div class="input-group">
                           <div class="input-group-addon">
                             <img src={Passwordicon} alt="" />
                          </div>
                              <input onChange={(e) => { setPassword2(e.target.value)  }} value={confirm_password} type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Confirm Password" required/>
                         </div>
                           </div>

                           <div class="form-group mt-2">
                              <p class="text-center text-light">By signing up you accept our <a href="/">Terms Of Use</a></p>
                           </div>

                           {/* Sign up Button */}
                           <div class="col-md-12 text-center ">

                           
                     {" "}
                     
                     {compState.loading == true ? <button style={loading} className="d-block w-100" > {compState.loading == true ? "Please wait":"Register"}</button>
                     :
                     <button type="submit" class=" btn btn-block  btn-primary mb-3 signup-btn" onClick={()=>{ triggerRegister()}}> Sign up</button>}
                     <div>
                        <span>{compState.error == true && <div style={errorPop}>{compState.error_msg}<br /></div> }</span>
                        <span>{compState.success == true && <div style={successPop}>{compState.success_msg}<br /></div> }</span>
                     </div> 
               
                            {/* <button type="submit" class=" btn btn-block  btn-primary mb-3 signup-btn">Sign up</button>  */}
                           </div>
                           
                          
             
                        </form>


          </div>

        </div>
</div>
</div>











      {/* <div className="hero py-4">
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>  
            <div  style={bg}>
               <h3 className="auth-header text-center my-auto py-3">Register with Reelwood</h3>
               <Container className="mt-5 px-5 auth">
               {console.log(state)} 
               <InputGroup className="mb-3">
                  <FormControl  onChange={(e) => { setName(e.target.value)  }} value={name} className="p-2" placeholder="Your Name" aria-describedby="basic-addon1" />
               </InputGroup>
               <InputGroup className="mb-3">
                  <FormControl  onChange={(e) => { setPhone(e.target.value)  }} value={phone} placeholder="Phone Number" type="text" className="p-2" aria-describedby="basic-addon1" />
               </InputGroup>
               <InputGroup className="mb-3">
                  <FormControl  onChange={(e) => { setEmail(e.target.value)  }} value={email} placeholder="Email Address" className="p-2" type="email" aria-describedby="basic-addon1" />
               </InputGroup>
               <InputGroup className="mb-3">
                  <FormControl  onChange={(e) => { setPassword(e.target.value)  }} value={password} placeholder="Password" className="p-2" type="password" aria-describedby="basic-addon1" />
               </InputGroup>
               <InputGroup className="mb-3">
                  <FormControl   onChange={(e) => { setPassword2(e.target.value)  }} value={confirm_password} placeholder="Confirm Password" className="p-2" type="password" aria-describedby="basic-addon1" />
               </InputGroup>
               <div className="d-flex justify-content-center mt-5">
                  <div className="d-block w-75">
                     {" "}
                     
                     {compState.loading == true ? <Button style={loading} className="d-block w-100" > {compState.loading == true ? "Please wait":"Register"}</Button>
                     :
                     <Button className="d-block w-100" onClick={()=>{ triggerRegister()}}> Register</Button>}
                     <div>
                        <span>{compState.error == true && <div style={errorPop}>{compState.error_msg}<br /></div> }</span>
                        <span>{compState.success == true && <div style={successPop}>{compState.success_msg}<br /></div> }</span>
                     </div> 
                  </div>
               </div>
               <p className="text-center"> <br /> <br />
                  Already have an Account?{" "}
                  <b className="blue-text pointer" style={{cursor:"pointer"}}  onClick={()=>{ history.push("/login")}}>
                     Log In
                  </b>

                  <br />
                  <div style={{textAlign:"center"}}>
                      <br/>OR <br/> <br/>
                     <b style={{color:"#0d6efd", cursor:"pointer"}} onClick={()=>{ history.push("/")}}>BACK TO HOME</b>
                  </div>
               </p>
               </Container> <br />
               
            </div>
          </Col>
        </Row>
      </Container>
    </div>  */}

    </div>
  );
};


const mapStateToProps = state => { 
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch,encoded) => {
  return { 
     log_in: (payload) => dispatch(login(payload)),
     log_out: () => dispatch(logout()), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
