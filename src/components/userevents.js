import React from "react";
import Card from "./Card";
import { Container, Typography, Grid } from "@mui/material";

import "../styles/components/header.css"
import { supabase } from "../function/config/index"
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

// importing redux
import { disp_viewevent, disp_buy} from "../redux"
import {ChevronRight} from "@mui/icons-material"

function TrendingEvents({appState, dispViewEvent}) {


  const state = appState
  let history = useHistory();


 
   const events = () => { 
      if (state.events.length > 0) {
         let userEvent = state.events.filter(e => e.seller_id == state.loggedInUser.id)
         // console.log(userEvent)
      return userEvent.map(events => {
        // console.log(events)
        return (
            <Grid item sm={6} xs={12} md={4} lg={3}>
              {Card(events, dispViewEvent)}
            </Grid>
        )
      })
 
    }
  }
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1A2129",
        padding: "10px 0",
      }}
    >
      {console.log(state)}
      <Container>
        <Typography
          variant="h4"
          style={{ color: "#fff", padding: "40px 0 30px 0" , fontSize:"19px"}}
        >
          Your Events
        </Typography>
        <Grid container spacing={5}>
          
          {events()}
          
          {/* <Grid onClick={()=>{ history.push("/All-events")}} container item xs={12} justifyContent="center">
            <button className="allEvents"  style={{marginLeft: "5%",marginRight: "5%", cursor: "pointer", border: "0.5px solid #1fbff2",  padding:"13px 70px",borderRadius:"3px", fontWeight:" ", fontSize:"17px", }}>Show All Event <ChevronRight /></button>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}
 

const mapStateToProps = state => { 
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch,encoded) => {
  return { 
     dispViewEvent: (payload) => dispatch(disp_viewevent(payload)),
     proceed_buy: (payload) => dispatch(disp_buy(payload)), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingEvents)

