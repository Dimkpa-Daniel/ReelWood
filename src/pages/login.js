import React, { useState } from 'react'
import {useHistory } from "react-router-dom";
import { Container, Row, Col, Button, FormControl, InputGroup } from "react-bootstrap";

import { connect } from 'react-redux' 
import {logIn} from "../function/controllers/auth/index" 



import logo from '../assets/logo.png';
import Emailicon from '../assets/Email-icon.png';
import Passwordicon from '../assets/Password-icon.png';



// importing redux
import { login } from "../redux"




const bg = {
   backgroundColor:"white"
}

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





const Home = ({appState, log_in}) => {
   const state = appState
   let history = useHistory();
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [compState, setCompState] = useState({
      loading: false, 
   })

   const triggerLogin = () => {
      setCompState({ ...compState, loading: true })
      let loginPayload = {
        email ,  password 
      } 
      
      if(!email || !password || email.length < 1 || password.length < 1){
         alert("Kindly fill out all fields")
         setCompState({ ...compState, loading:false })
      }else{
         logIn(loginPayload).then(response => {
         console.log(response)
         if (response.body.length < 1) {
            setCompState({ ...compState, error: true, error_msg: "Incorrect login credentials" })
            setTimeout(() => setCompState({ ...compState, error: false, loading:false }), 3000);
         } else { 
            // 
            if (response.body[0].meta.password != password) {
                setCompState({ ...compState, error: true, error_msg: "Incorrect login credentials" })
               setTimeout(() => setCompState({ ...compState, error: false, loading:false }), 3000);
            } else {
               setCompState({ ...compState, error:false, success:true,  success_msg: response.message })
               setTimeout(() => setCompState({ ...compState, error: false, loading:false }), 3000);
               log_in(response.data[0])
            }
         }
      }).catch(error => {
         setCompState({ ...compState, error: true, error_msg: "A network error occured" })
         setTimeout(() => setCompState({ ...compState, error: false, loading:false }), 3000);
      })
      }
   }

  return state.loggedIn === true ? (
     <span>{history.push("/")}</span>
  ): ( 

   <div className='login'>

<nav class="navbar navbar-expand-lg navbar-light bg-dark d-nav sticky-top"  >
      
       
      <a href="/" className="navbar-brand "><img src={logo} alt="The logo" /></a> 
  </nav>


  <div className="container-fluid">
<div className="container">
<div className="row">
          <div className="col-sm login-sm text-center">
           <img src={logo} alt="" />
           <p className='mt-4'>The Quickest and Safest Way <br />
           To Buy Your Event Tickets.</p>

                 <div class="form-group">
                <b> <p class="text-center">Don't have an account? </p> </b>
                </div>
                <div class="col-md-12 text-center ">
               <button onClick={()=>{ history.push("/register")}} type="submit" class=" btn btn-block  btn-primary signup-btn">Sign up</button> 
                </div>

          </div>

          <div className="col-sm  login-sm2">
       <h3 className='text-center text-light'>Welcome</h3>

       <form onSubmit={(e)=>{e.preventDefault()}}>
                           <div class="form-group mt-2">

                           <div class="input-group">
                           <div class="input-group-addon">
                             <img src={Emailicon} alt="" />
                          </div>
                              <input  onChange={(e) => { setEmail(e.target.value)  }} value={email}  type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                          </div>

                           </div>
                           <div class="form-group mt-2">
                              
                           <div class="input-group">
                           <div class="input-group-addon">
                             <img src={Passwordicon} alt="" />
                          </div>
                              <input onChange={(e) => { setPassword(e.target.value)  }} value={password} type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password" required/>
                         </div>
                           </div>
                           <div class="col-xs-12 col-sm-12 col-md-12 d-flex justify-content-between">
                                 <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group text-light mt-2">
                                       <input type="checkbox" name="check" /> Remember Me
                                    </div>
                                 </div>

                                  <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group mt-2">
                                       <a href="#forgot" data-toggle="modal"> Forgot Password? </a>
                                    </div>
                                 </div>
                              </div>
                           
                           <div class="col-md-12 text-center ">

                           
                      
                      {compState.loading == true ? <button style={loading} className="d-block w-100" > {compState.loading == true ? "Please wait":"Login"}</button>
                      :
                      <button type="submit" class=" btn btn-block  btn-primary mb-3 login-btn" onClick={()=>{ triggerLogin()}}> Login</button>}
                      <div>
                         <span>{compState.error == true && <div style={errorPop}>{compState.error_msg}<br /></div> }</span>
                         <span>{compState.success == true && <div style={successPop}>{compState.success_msg}<br /></div> }</span>
                      </div>

                   

                            {/* <button type="submit" class=" btn btn-block  btn-primary mb-3 login-btn">Log in</button>  */}
                          
                          
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
              <h3 className="auth-header text-center my-auto py-3">Login with Reelwood</h3>
               <Container className="mt-5 px-5 auth">
               <InputGroup className="mb-3">
                  <FormControl  onChange={(e) => { setEmail(e.target.value)  }} value={email} placeholder="Email Address" className="p-2" type="email" aria-describedby="basic-addon1" />
               </InputGroup>
               <InputGroup className="mb-3">
                  <FormControl  onChange={(e) => { setPassword(e.target.value)  }} value={password} placeholder="Password" className="p-2" type="password" aria-describedby="basic-addon1" />
               </InputGroup>
               <span className="blue-text text-right pointer"  >
                  Forgot Password?
               </span>
               <div className="d-flex justify-content-center mt-5">
                  <div className="d-block w-75">
                      
                     {compState.loading == true ? <Button style={loading} className="d-block w-100" > {compState.loading == true ? "Please wait":"Login"}</Button>
                     :
                     <Button className="d-block w-100" onClick={()=>{ triggerLogin()}}> Login</Button>}
                     <div>
                        <span>{compState.error == true && <div style={errorPop}>{compState.error_msg}<br /></div> }</span>
                        <span>{compState.success == true && <div style={successPop}>{compState.success_msg}<br /></div> }</span>
                     </div>
                  </div>
               </div>
               <p className="text-center" styele={{marginTop:"20px"}}> <br /> <br />
                  Don't have an Account?{" "}
                  <b className="blue-text pointer" style={{cursor:"pointer"}}  onClick={()=>{ history.push("/register")}}>
                     Register
                  </b>{" "}
                  <br />
                  <div style={{textAlign:"center"}}>
                      <br/>OR <br/> <br/>
                     <b style={{color:"#0d6efd", cursor:"pointer"}} onClick={()=>{ history.push("/")}}>BACK TO HOME</b>
                  </div>
               </p>
               </Container><br />
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
