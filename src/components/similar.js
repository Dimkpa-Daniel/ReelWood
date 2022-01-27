import React from "react";
import { Container, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "./Card";



import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

// importing redux
import { disp_viewevent, disp_buy } from "../redux"



function FeaturedEvents({appState, dispViewEvent}) {


  const events = () => {
    if (state.events.length > 0) {
      return state.events.map(events => {
        // console.log(events)
        return (
          <div>
            {Card(events, dispViewEvent)}
          </div>
        )
      })
 
    }
  }


  const state = appState
  let history = useHistory();


  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1A2129",
        paddingBottom: "20px",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          style={{ color: "#fff", padding: "40px 0 30px 0", fontSize:"19px"}}
        >
          Similar Events
        </Typography>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={30}
          autoplay
          autoplayHoverPause={true}
          autoplayTimeout={3000}
          autoplaySpeed={2000}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            900: {
              items: 3,
            },
            1200:{
              items:4
            }
          }}
        >
          {/* <Card/>  */}
          {events()}
        </OwlCarousel>
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
)(FeaturedEvents)

