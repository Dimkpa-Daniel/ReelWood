import React from "react";
import Card from "./Card";
import { Container, Typography, Grid } from "@mui/material";

import "../styles/components/header.css"

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
      return state.events.map(events => {
        // console.log(events)
        return (
            <div item sm={6} xs={12} md={4} lg={3}>
              {Card(events, dispViewEvent)}
            </div>
        )
      })
 
    }
  }
  return (
    <div className="featured"
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "rgb(39, 37, 37)",
        padding: "0px 0",
      }}
    >
      {console.log(state)}
      {/* <Container>
        <Typography
          variant="h4"
          style={{ color: "#fff", padding: "0px 0 30px 0" , fontSize:"19px"}}
        >
          Latest Events
        </Typography> */}
<div className="container-fluid">
<div className="container  card-heading">
<p className='text-light '><span>.</span>Featured Events</p>

</div>

        <div className="featured-bg-image">

        {events()}

        </div>
        </div>
        {/* <Grid container spacing={5}>
          
          
          
          <Grid onClick={()=>{ history.push("/All-events")}} container item xs={12} justifyContent="center">
            <button className="allEvents btn btn-primary"  style={{marginLeft: "5%",marginRight: "5%", cursor: "pointer", border: "0.5px solid #1fbff2",  padding:"13px 70px",borderRadius:"3px", fontWeight:" ", fontSize:"17px", }}>Show All Event <ChevronRight /></button>
          </Grid>
        </Grid> */}


      {/* </Container> */}
      <div className="container text-center show-all">

      <button class="btn btn-primary me-3 d-btn3" type="submit" onClick={()=>{ history.push("/All-events")}}>Show All Events</button>
        </div>

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

