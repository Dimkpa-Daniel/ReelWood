import React, { useState } from 'react'
import { Container,Nav, Row,Navbar, Col, Button, Table, FormControl, InputGroup,} from "react-bootstrap"; 
import logo from "../image/logo.png";
import "../styles/pages/dashboard.css"
import TrendingEvents from "../components/userevents.js";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { connect } from 'react-redux'
import {
  useMediaQuery, 
} from "@mui/material";

import { supabase } from "../function/config/index"

// importing redux
import { disp_viewevent, disp_buy } from "../redux"
import { Category } from '@mui/icons-material';



const textAlign = {
  textAlign:"center"
}

const hei = {
  // height:"160px"
}






 





const Dashboard = ({appState}) => {

  
  
  const tablet = useMediaQuery("(max-width:900px)");

  const miniLaptop = useMediaQuery("(max-width:140px)"); 

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  const [compState, setCompState] = useState({
    loading: false,
    fetched:false
  })

  const [searchInput, setSearchInput] = useState("")

  const userDetails = () => {
    return supabase
      .from('event')
      .select("*")
      .eq('seller_id', state.loggedInUser.id)
      .then(response => { 

         supabase
        .from('tickets')
        .select("*")
        .eq('user', state.loggedInUser.id)
        .then(response2 => {  
           supabase
          .from('event')
          .select("*")
          .eq('seller_id', state.loggedInUser.id)
          .eq('isActive', false)
          .then(response3 => {
            setCompState({
              ...compState, activeTickets:response2.body, events:response.body, inactiveTicket:response3.body
            })
          })
        })
        
        
      })
  }

  const verify = () => {
    if (!searchInput || searchInput.length < 5) {
      alert("Enter a valid ticket ID")
      document.getElementById('search').focus()
    } else {
        setCompState({
        ...compState, loading:true
      })
      return supabase
      .from('tickets')
      .select("*")
      .eq('ticketId', searchInput)
      .eq('isActive', true)
        .then(response => {
        console.log(response)
        if (response.body.length < 1) {
          alert("Invalid ticket ID")
          setCompState({
            ...compState, loading:false, fetched:false
          })
        } else {  
            setCompState({
              ...compState, loading:false, fetched:true,data:response.data[0]
            }) 
        }
      }).catch (error=> {
        alert("An error occured")
        setCompState({
          ...compState, loading:false
        })
      })
    }
  }



  // checkin user

  const checkInUser = (ticketId) => {
    setCompState({
      ...compState, loading:true
    })
    console.log("check in")
    supabase.from("tickets").update([{ isActive: false }]).eq("ticketId", ticketId).then(done => {
      alert("Checked in successfully")
      setCompState({
          ...compState, loading:false, fetched:false
        })
    }).catch(error => {
      alert("A network error occured")
      setCompState({
          ...compState, loading:false,
        })
    })
  }




  const state = appState
  let history = useHistory();
  const event = state.viewevent
  

  React.useEffect(() => {  
    userDetails();
     window.scrollTo(0, 0);
  }, []);

  return state.loggedIn == false ? (<span>{history.push("/")}</span>) : (
    <>
      {compState.loading == true && <div style={{ backgroundColor: "rgb(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%", top: "0px", zIndex: "3000", paddingTop:tablet ? '70%':"20%", textAlign:"center", color:"white" }}>
        Proccessing......
      </div>}
    <Header/>
    <div style={{ color: "white",background: "#010306",width: tablet ? "90%": '60%', marginLeft:tablet ? "5%":'20%', padding:"10px 3px", marginTop:tablet ? "60px":'60px' }}>
        {console.log(state)}
        {console.log(compState)}
    <Container className="container" > 
          <span onClick={() => { document.getElementById('mtEvents').scrollIntoView();  setCompState({
          ...compState, loading:false, showEvents:true
          })
          }} style={{ float: "right", cursor: "pointer", color: "rgb(31, 191, 242)", }}>My events</span>
          
      <Row>
        <h4>{state.loggedInUser.name}</h4>
      </Row> <br />
      <div style={textAlign} >
        <div className="count" style={{padding:""}}>
          <p>{compState.events ? <div>{compState.events.length}</div>:"wait.."}</p>
          <p>All Events</p>
        </div>
        <div className="count" style={{padding:""}}>
          <p>{compState.events ? <div>{compState.activeTickets.length}</div>:"wait.."}</p>
          <p>Event tickets sold.</p>
        </div>
        <div className="count" style={{padding:""}}>
          <p>{compState.events ? <div>{compState.inactiveTicket.length}</div>:"wait.."}</p>
          <p>Inactive Events</p>
        </div>
      </div>
      <Row>
        <InputGroup className="mb-3"  style={{ color: "white", }}>
          <FormControl id="search" onChange={(e)=> setSearchInput(e.target.value)} value={searchInput} placeholder="Enter the ticket ID here for verification" aria-label="Username" aria-describedby="basic-addon1" />
        </InputGroup>
      </Row>

       <div> {compState.loading == true ? <Button className=" " style={{outline:"none", opacity:"0.3", cursor:"no-drop"}} >Verifying.....</Button> : <Button className=" " style={{outline:"none"}} onClick={()=>{verify()}} >Verify</Button>} </div>
      
          
      
       
      {compState.fetched == true && 
      <Table responsive="sm"  style={{ color: "white",display:"",marginTop:"70px" }}>
        <thead>
          <tr>
            <th>Buyer</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
            </thead>
            {compState.fetched == true && 
            <tbody>
          <tr>
            <td>{compState.data.ticketId}</td>
            <td>{compState.data.meta.cost}</td>
            <td>{compState.data.meta.category}</td>
            <td>{compState.data.isActive == true ? "Active": "Inactive"}</td>
          </tr>
        </tbody>}
            <br />


      <span> {compState.loading == true ? <Button className=" " style={{outline:"none", opacity:"0.3", cursor:"no-drop"}} >Verifying.....</Button> : <span>{compState.data.isActive == true ? <Button className=" " onClick={()=>{checkInUser(compState.data.ticketId)}} >Check In</Button>: "Inactive"}</span>} </span>
        
      
      </Table>}
    </Container> 
      </div>

     {/* {compState.showEvents == true &&  <TrendingEvents  />} */}
      <div id="mtEvents"></div>
      <TrendingEvents  />
      
      
      </>
  );
};
 

const mapStateToProps = state => { 
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch,encoded) => {
  return { 
     viewevent: (payload) => dispatch(disp_viewevent(payload)),
     proceed_buy: (payload) => dispatch(disp_buy(payload)), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
