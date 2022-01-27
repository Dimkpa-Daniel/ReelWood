import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header"; 
import {useMediaQuery } from "@mui/material";  
import FeaturedEvents from "../components/FeaturedEvents";
import TrendingEvents from "../components/TrendingEvents";
import EventCategory from "../components/EventCategory";
import Newsletter from "../components/Newsletter";
import { Container, Typography, Grid } from "@mui/material";
import '../styles/Homepage/BackgroundCarousel.scss';
import '../styles/Homepage/Card.scss';
import '../styles/Homepage/TrendingEvents.scss';
import '../styles/Homepage/Footer.scss';
import '../styles/Homepage/Newsletter.scss';
import '../styles/Homepage/EventCategory.scss';
import '../styles/Homepage/login.scss';
import '../styles/Homepage/register.scss';
import '../styles/pages/eventdetails.scss';


// importing sliders
import slide1 from "../image/slider/slide5.jpeg"


// import slifdding banner 
import Banner from "../components/sliddingbanner"


import { allEvents } from "../function/controllers/ticket/index"

import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

// importing redux
import { disp_viewevent, disp_events} from "../redux"
import BackgroundCarousel from "../components/BackgroundCarousel";





function Slider({appState, dispEvents, dispViewEvent}) {
  const state = appState
  let history = useHistory();

  React.useEffect(() => {
    resolveEvents();
    window.scrollTo(0, 0);
     
  }, []);


  const resolveEvents = () => {
    allEvents().then(events => {
        let data = events.data 
      dispEvents(data)
    })
  }


  // const slidding_banner = () => {
  //   if (state.events.length > 0) {
  //     return state.events.map(event => {
  //       return (
  //         <Carousel.Item style={{ position: "relative" }}>
  //           {Banner(event,dispViewEvent)}
  //         </Carousel.Item>
  //       )
  //     })
  //   }
  // }

  const slidding_banner = () => {
    if (state.events.length > 0) {
      return state.events.map(event => {
        return (
          <Carousel.Item style={{ position: " " , objectFit: "cover",}}>
            <img src={slide1} style={{objectFit: "cover",}}/>
          </Carousel.Item>
        )
      })
    }
  }

  const next = () => {
    return (
      <div style={{ position: "absolute", height: "50px", width: "50px", background: "rgb(26, 33, 41)", right: "30px", borderRadius: "50px", zIndex: "10000", top: "30%" }}></div>
    )
  }


    const tablet = useMediaQuery("(max-width:900px)") 

  return (
    <>
      <Header />
      {console.log(state)}
   

      {/* <Container style={{ background: " ", height: "", marginTop: "30px", alignItems: "center", position: "relative", paddingLeft: tablet ? '' : '60px' }}>
        
        
        
        <Carousel
        
          indicators={false} interval={4000} style={{ objectFit: "cover", }}>
          {slidding_banner()} 
        </Carousel>
      </Container>   */}
      <BackgroundCarousel />
      <FeaturedEvents/>
      <TrendingEvents />
      <EventCategory/>
      <Newsletter />
      <Footer />
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
      dispEvents: (payload) => dispatch(disp_events(payload)), 
    viewevent: (payload) => dispatch(disp_viewevent(payload)),
     dispViewEvent: (payload) => dispatch(disp_viewevent(payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)
