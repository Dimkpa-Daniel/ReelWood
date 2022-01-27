import React, { useState } from "react";
import { connect } from 'react-redux'
import {useHistory, Link } from "react-router-dom";
// importing redux
import { login ,logout,disp_search} from "../redux"
import reel from "../image/reel.png"
// import "../styles/components/header.css"

// import {
//   Container,
//   Grid,
//   useMediaQuery,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   SwipeableDrawer,
// } from "@mui/material";
// import images from "../image/images";
// import { Menu,Search } from "@mui/icons-material";


import {supabase} from "../function/config/index"

import logo from '../assets/logo.png'
import Searchicon from '../assets/Search-icon.png'


function Header({appState, log_out, dispSearch}) {
  const state = appState
  let history = useHistory();
  

  // const tablet = useMediaQuery("(max-width:900px)");

  // const miniLaptop = useMediaQuery("(max-width:140px)");

  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("")
  
  const [compState, setCompState] = useState("")

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const searchFunction = (e) => {
    e.preventDefault()
    if (search.length < 1 || !search) {
       alert("Empty search")
    } else {
      setCompState({
        ...compState, loading:true,
      })
      supabase.from("event").select("*").ilike('event_title', `%${search}%`).then(res => {
        dispSearch(res.body)
        history.push(`/search`)
        
        setCompState({
        ...compState, loading:false,
      })
      })

     }
  }

  return (
    <>
      {compState.loading == true && <div style={{ backgroundColor: "rgb(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%", top: "0px", zIndex: "3000", paddingTop:"20%", textAlign:"center", color:"white" }}>
      Loading......
      </div>}

      <nav class="navbar navbar-expand-lg navbar-light bg-dark d-nav fixed-top"  >
      {state.loggedIn == true && <span> {state.loggedInUser.role == "SUPAADMIN" &&  <button onClick={() => { history.push("/super-admin") }} style={{marginLeft: "5%", color: "#000", marginRight: "%", cursor: "pointer", border:"none", background:"rgb(1, 3, 6)", padding:"4px 9px",borderRadius:"6px", fontSize:"14px" }}>Control</button>} </span>}
       
   <Link to="/">   <a href="/" className="navbar-brand "><img src={logo} alt="The logo" /></a> </Link>
      <button className="navbar-toggler" type='button'
        data-bs-toggle='collapse'
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
       
        <ul className='navbar-nav me-auto my-2 my-lg-0 d-ul'>
           <li className="nav-item"><Link to ="/">Home</Link></li>
           <li className="nav-item"><Link to ="/about">About us</Link></li>
           <li className="nav-item"><Link to ="/contact">Contact us</Link></li>


         <form onSubmit = {(e)=>{  searchFunction(e) }} method="POST">
         <div class="input-group">
                       <div class="input-group-addon">
                         <img src={Searchicon} alt="" />
                      </div>
    <input onChange={(e)=>{setSearch(e.target.value)}} class="form-control me-2" type="search" placeholder="Search Events" aria-label="Search"/>
   </div>
    </form>

        </ul>
       
  
     
            {/* <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>
            </ul> */}

            
            <div className="col-sm-4 bg-light d-div d-flex justify-content-center">
            {
            state.loggedIn == true ?
            <span className="d-flex">
            <button className="btn  btn-outline-dark  me-3 d-btn" onClick={() => { log_out() }} >Logout</button>
            <button className="btn  btn-outline-dark  me-3 d-btn" onClick={() => { history.push("/dashboard") }} >Dashboard</button>
            <button className="btn  btn-outline-dark  me-3 d-btn1" onClick={() => { setOpen(false); history.push("/create-event"); }} >Sell Ticket</button>

          </span> :
          
                <button onClick={() => { history.push("/login") }} class="btn  btn-outline-dark  me-3 d-btn" type="submit">Login</button> }
                
            </div>
        
      </div>
     
  </nav>






      <div style={{ backgroundColor: "#010306", padding: "17px 0", position: "sticky", top: 0, zIndex: 10 }}>
        {/* {console.log(state)} */}
        {/* <Container>
          <Grid container className="header" style={{height:tablet ? "50px": ""}}>
            <Grid
              item
              md={4}
              sm={6}
              xs={6}
              style={{ display: "flex", justifyContent: "flex-start",background:"  ",position:"absolute",left:"0px" }}
            >
             <img style={{ height: "30px", marginLeft:tablet ? "20px": "45%", marginTop:tablet ? "2px": "2px", cursor:"pointer" }} src={reel} alt="" onClick={() => { setOpen(false); history.push("/"); window.scrollTo(0, 0); }} />
              
             
            </Grid>
             
            
            <form onSubmit = {(e)=>{  searchFunction(e) }} method="POST" style={{ display: tablet ? "none" : "block", position: "relative", width: "27%", left:"190px", height: "35px", marginTop: " ", color: "black",backgroundColor:"lightgray",  borderRadius: "20px", }} >
               <input onChange={(e)=>{setSearch(e.target.value)}} style={{ display: tablet ? "none" : "block",  width:"100%", height:"100%",backgroundColor:"lightgray", marginTop:"0px",padding:"15px",  borderRadius: "5px", border: "none", color:"black", outline:"none"}} placeholder="Search for events..." />
               <Search type="submit" onClick={(e) => { setOpen(false); searchFunction(e) }} style={{ display: tablet ? "none" : "block",  position: "absolute" ,  color: "rgb(31, 191, 242)", cursor: "pointer", border: "none", fontSize:"25px", right:"9px", top:"5px",fontWeight:"bold" }}/>
            </form>

           
              <div
                style={{
                  display: tablet ? "none" : "inline-block",
                  listStyle: "none", 
                 
                  width: "45%",
              
                  position:"absolute",
                  right: "0%",
                  top: "0px",
                  paddingTop: "10px",
                  textAlign: "right",
                  color: "white" 
                }}
            >
              
              {state.loggedIn == true && <span> {state.loggedInUser.role == "SUPAADMIN" &&  <button onClick={() => { history.push("/super-admin") }} style={{marginLeft: "5%", color: "#fff", marginRight: "%", cursor: "pointer", border:"none", background:"rgb(1, 3, 6)", padding:"4px 9px",borderRadius:"6px", fontSize:"14px" }}>Control</button>} </span>}
              

              <button onClick={() => { setOpen(false); history.push("/"); }} style={{ color: "#fff", cursor: "pointer", border: "none", background: "rgb(1, 3, 6)", padding: "4px 9px", borderRadius: "6px", fontSize: "14px" }}>Home</button>
              
             

              {state.loggedIn == true ?
                <span>
                  <button onClick={() => { log_out() }} style={{marginLeft: "5%", color: "#fff", marginRight: "%", cursor: "pointer", border:"none", background:"rgb(1, 3, 6)", padding:"4px 9px",borderRadius:"6px", fontSize:"14px" }}>Logout</button>
                  <button onClick={() => { history.push("/dashboard") }} style={{marginLeft: "5%", color: "#fff", marginRight: "%", cursor: "pointer", border:"none", background:"rgb(1, 3, 6)", padding:"4px 9px",borderRadius:"6px", fontSize:"14px" }}>Dashboard</button>
                </span> :
                  <button onClick={() => { history.push("/login") }} style={{marginRight: "",  color: "#fff",  cursor: "pointer", border:"none", background:"rgb(1, 3, 6)",   padding:"4px 9px",borderRadius:"6px", fontSize:"12px" }}>Login</button>}
              
              <button className="createEvent" onClick={() => { setOpen(false); history.push("/create-event"); }} style={{ marginLeft: "5%", marginRight: "3%", cursor: "pointer", border: "1px solid #1fbff2", padding: "10px 20px", borderRadius: "6px", fontWeight: "bold", fontSize: "14px" }}>Sell Ticket</button>
              
              
              
              
                
              </div>
              
              <IconButton
                style={{
                  display: tablet ? "block" : "none", float:"right",position:"absolute",right:"0px"
                }}
                onClick={() => setOpen(true)}
              >
                <Menu style={{ color: "#fff" }} />
              </IconButton> 
            <div>
              <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                
              
              >
                <div style={{ width: "auto", height: "60%",  }}>
                  <div>
                    <div
                      style={{
                        padding: "10px 30px 10px 20px",
                        height: tablet ? "40%" : "60%",
                        backgroundColor: "#010306",
                        
                        background: "#010306",
                        border:"none"
                      }}
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <img src={reel} alt="" height="30px" width="auto" />
                    </div>
                  </div>
                  <Divider />


                  

                  <List>
                  <form style={{ display: tablet ? "block" : "block", position: "relative", width: "100%", left:"0px", height: "45px", marginTop: "0px", color: "black",backgroundColor:"lightgray",  borderRadius: " ", }} >
                    <input onChange={(e)=>{setSearch(e.target.value)}} style={{ display: tablet ? "block" : "block",  width:"100%", height:"100%",backgroundColor:"lightgray", marginTop:"0px",padding:"15px",  borderRadius: "5px", border: "none", color:"black", outline:"none"}} placeholder="Search for events..." />
                    <Search type="submit" onClick={() => { setOpen(false); searchFunction() }} style={{ display: tablet ? "block" : "block",  position: "absolute" ,  color: "rgb(31, 191, 242)", cursor: "pointer", border: "none", fontSize:"25px", right:"9px", top:"9px",fontWeight:"bold" }}/>
                  </form>

                    <ListItem
                      button
                      onClick={() => {
                        setOpen(false);
                        history.push("/");
                      }}
                      style={{ color: "#124ac3", fontWeight:"bold", fontSize:"20px" }}
                    >
                      <ListItemText primary={"Home"} />
                    </ListItem>

                     <ListItem
                      button
                      onClick={() => {
                        setOpen(false);
                        history.push("/create-event");
                      }}
                      style={{ color: "#124ac3", fontWeight:"bold", fontSize:"20px" }}
                    >
                      <ListItemText primary={"Sell Ticket"} />
                      </ListItem>


                   
                    <ListItem
                      button
                      onClick={() => {
                        setOpen(false);
                        alert("Coming soon")
                      }}
                      style={{ color: "#124ac3", fontWeight:"bold", fontSize:"20px" }}
                    >
                      <ListItemText primary={"Blog"} />
                    </ListItem>
                  
                    

                    {state.loggedIn == true ?
                      <span>
                        <ListItem
                        button
                        onClick={() => {
                          setOpen(false);
                          history.push("/dashboard")
                        }}
                        style={{ color: "#124ac3", fontWeight:"bold", fontSize:"20px" }}
                      >
                        <ListItemText primary={"Dashboard"} />
                      </ListItem>

                      <ListItem
                        button
                        onClick={() => {
                          setOpen(false);
                          log_out();
                          history.push("/")
                        }}
                        style={{ color: "#124ac3", fontWeight:"bold", fontSize:"20px" }}
                      >
                        <ListItemText style={{fontWeight:"bold", fontSize:"30px"}} primary={"Logout"} />
                      </ListItem>
                      </span>
                    
                      :
                      <ListItem
                        button
                        onClick={() => {
                          setOpen(false);
                          history.push("/login")
                        }}
                        style={{ color: "#124ac3", fontWeight:"bold", fontSize:"20px" }}
                      >
                        <ListItemText primary={"Login"} />
                      </ListItem> 
                      }
                    
                  </List>
                </div>
              </SwipeableDrawer>
            </div>
          </Grid>
        </Container> */}
      </div>
    </>
  );
}

 

const mapStateToProps = state => { 
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch,encoded) => {
  return { 
    log_in: (payload) => dispatch(login(payload)),
    log_out: () => dispatch(logout()),
    dispSearch: (payload) => dispatch(disp_search(payload)), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
