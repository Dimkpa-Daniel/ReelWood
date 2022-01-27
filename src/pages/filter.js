import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header"; 
import {useMediaQuery } from "@mui/material";  
import SimilarEvents from "../components/similar";

// import slifdding banner 
import Banner from "../components/sliddingbanner"
import EventCategory from "../components/EventCategory";

import Card from "../components/Card";
import { Container, Typography, Grid } from "@mui/material";

import { allEvents } from "../function/controllers/ticket/index"

import { connect } from 'react-redux'
import { useHistory, useParams } from "react-router-dom";

// importing redux
import { disp_viewevent, disp_events, disp_buy} from "../redux"


import CategoryButton from "../components/CategoryButton";



function Slider({appState, dispEvents, dispViewEvent}) {
  const state = appState
  let history = useHistory();

   const { category } = useParams()
   
   const [compState, setStates] = useState({
      filtered:true
   })



  React.useEffect(() => {
     resolveEvents();
     window.scrollTo(0, 0);
     setStates({
        loading:false
     })
     
  }, []);


  const resolveEvents = () => {
    allEvents().then(events => {
        let data = events.data 
      dispEvents(data)
    })
   }
   
   const events = () => {
      if (state.events.length > 0) {
       
         let filtered = state.events.filter(e => e.meta.category == category || e.meta.category == category)
         if (filtered.length > 0) {
            return filtered.map(events => {
               // console.log(events)
               return (
                  <Grid item sm={6} xs={12} md={4} lg={3}>
                  {Card(events, dispViewEvent)}
                  </Grid>
               )
            })
         } else {
              
         } 
 
    }
   }
   

   const notFiltered = () => {
      if (state.events.length > 0) {
       
         let filtered = state.events.filter(e => e.meta.category == category)
         if (filtered.length < 1) {
            return (
                <div item sm={6} xs={12} md={4} lg={3} style={{
                   color: "white",
                width:"", textAlign:"center", position:"relative",left:" ",height:"", top:"50px"}}>
              <div style={{ background:"orange", padding:"30px"}}> No category found</div>
               </div>
            )
         } else {
            window.scrollTo(0, 0);
            return "Filtered Event(s)"
         }
      }
   }


  const slidding_banner = () => {
     if (state.events.length > 0) {
        
      return state.events.map(event => {
        return (
          <Carousel.Item style={{ position: "relative" }}>
            {Banner(event,dispViewEvent)}
          </Carousel.Item>
        )
      })
    }
   } 

  const Category = () => {
    let cats = [{ name: "Comedy" }, { name: "Techtalk" }, { name: "Fashion" }, { name: "Music" }, { name: "Party" }, { name: "Social" },
      { name: "Business" },{ name: "Sport" },{ name: "Exhibition" },{ name: "Play" },{ name: "Gallery" },
    { name: "Live Show" }]
  
  return cats.map(cats => {
    return (
       <Grid onClick={() => { window.scrollTo(0, 0); history.push(`/filter/${cats.name}`)}} item xs={4} md={2}>
        <CategoryButton category={`${cats.name}`}/>
    </Grid>
    );
    
  })
  };


    const tablet = useMediaQuery("(max-width:900px)") 

  return (
    <>
      <Header />
      {console.log(state)}
      {/* <Carousel interval={2000}>
      {slidding_banner()} 
      </Carousel> */}

      {/* <FeaturedEvents/> */}
      {/* <TrendingEvents/> */}
      <div
         style={{
         width: "100%",
         height: "auto",
         backgroundColor: "#1A2129",
         padding: "50px 0",
         }}
      >
         {console.log(state)}
         <Container>
         <Typography
            variant="h4"
            style={{ color: "#fff", padding: "40px 0 30px 0" }}
         >
            
            {notFiltered()}
         </Typography>
         <Grid container spacing={5}>

                 {/* {compState.filtered == false && "not found"} */}
            
                 {events()}
                 
         </Grid>
         </Container>
      </div>

        
        <SimilarEvents/>
        

         <EventCategory/>
        
        

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
