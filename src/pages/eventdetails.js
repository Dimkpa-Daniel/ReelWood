import { Grid, Container, Typography, Button } from "@mui/material";
import React, { useState } from 'react'
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import images from "../image/images";
import Footer from "../components/Footer";
import { connect } from 'react-redux'
import { useHistory, useParams } from "react-router-dom";

import EventCategory from "../components/EventCategory";
import TrendingEvents from "../components/similar";

// importing redux
import { disp_viewevent, disp_buy} from "../redux"
import {ShareSocial} from 'react-share-social'
import { viewSingleEvent } from "../function/controllers/ticket/index"
import {Helmet} from "react-helmet";

import { 
  useMediaQuery,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  SwipeableDrawer,
} from "@mui/material";


import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from 'react-share';

import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram1.png';
import twitter from '../assets/twitter.png';
import dateicon from '../assets/calendar-icon.png';
import locationicon from '../assets/locating.png'









const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};




function SelectTicket({ appState, viewevent, proceed_buy }) {


  const tablet = useMediaQuery("(max-width:900px)");

  const miniLaptop = useMediaQuery("(max-width:140px)");

  const [open, setOpen] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [loading, setLoading] = useState("")
  
   const state = appState
  let history = useHistory();
  const event = state.viewevent 

  const shareUrl = `https://www.reelwoodticket.com/event/${event.id}`;
  // const shareUrl = 'http://localhost:3000/event/171'


   const proceedPay = () => {
      
     let check = state.viewevent.meta.tickets.filter(e => e.picked > 0)
     if (check.length > 0) {
        proceed_buy(state.viewevent.meta.tickets)
        history.push('/PreceedPay') 
     } else {
       alert("You have to select at least one ticket to proceed")
     } 
   }


  const allTickets = () => {
     
      const selectTickets = (ticketToAdd) => {
         let ticket = state.viewevent.meta.tickets
         let clickedTicket = ticket.filter(e => e.category == ticketToAdd)[0]
         let clickedPosition = ticket.findIndex(e=> e.category == ticketToAdd)
         let increament = {
            ...clickedTicket,
            picked:clickedTicket.picked+1
         }
         ticket.splice(clickedPosition, 1, increament)

         viewevent(state.viewevent)
         console.log(state.viewevent.meta.tickets)
      }


      const unSelectTickets = (ticketToAdd) => {
         let ticket = state.viewevent.meta.tickets
         let clickedTicket = ticket.filter(e => e.category == ticketToAdd)[0]
         let clickedPosition = ticket.findIndex(e => e.category == ticketToAdd)
         let increament =''
         if (clickedTicket.picked == 0) {
            increament = {
               ...clickedTicket,
               picked:0
            }
         } else {
            increament = {
               ...clickedTicket,
               picked:clickedTicket.picked-1
            }
         }
         
         ticket.splice(clickedPosition, 1, increament)

         viewevent(state.viewevent)
         console.log(state.viewevent.meta.tickets)
      }

      


      
    return state.viewevent.meta.tickets.map(item => {
      let remains = state.viewevent.tickets.filter(e => e.meta.category == item.category)
      console.log(remains.length)
      console.log(item)
      let actualRemain = parseInt(item.quantity) - parseInt(remains.length)
      let soldOut = null
      if (actualRemain < 1) {
        soldOut = true
      } else {
        soldOut = false
      }


         return (
            <div
                  style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    width: "100%",
                    height: "auto",
                    backgroundColor: "#fff",
                    borderBottom: "1px solid #ccc",
                  }}
                >

                    <table className="table text-center spacing-table" >

                    <thead>
                    <tr>

                        <th>Section</th>
                        <th>Available</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>

                    </thead>

                    <tbody>
                    <tr>
                        <td> {item.category}</td>
                        <td>{soldOut == true ? <small >Sold out</small>:  <small >{actualRemain } left</small>}</td>
                        <td>  ₦{item.cost} </td>

                        <td>
                            <div className="col d-flex btn-increase">
                                <button  onClick = {()=>{ unSelectTickets(item.category)}}> - </button>
                                <p> {item.picked}</p>
                                <button  onClick = {()=>{ soldOut == true ? alert("Ticket category already sold out") : selectTickets(item.category) }}> + </button>
                            </div>
                        </td>
                    </tr>

                    </tbody>

                    </table>







                  {/* <div
                    style={{
                      width: "50%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ paddingLeft: "20px" }}>
                      <Typography
                        variant="h5"
                        style={{ paddingBottom: "15px", paddingTop: "20px", fontSize:"14px", fontWeight:"bold" }}
                      >
                        {item.category} {soldOut == true ? <small style={{fontWeight:"bold", fontSize:"9px", color:'white', background:"crimson", borderRadius:"5px", padding:"4px"}}>Sold out</small>:  <small style={{fontWeight:"bold", fontSize:"9px", color:'black', background:"rgb(31, 191, 242)", borderRadius:"5px", padding:"4px"}}>{actualRemain } left</small>}
                      </Typography>
                      <Typography variant="body1" style={{color:"#1fbff2"}}><b>₦{item.cost}</b></Typography>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        paddingRight: "20px",
                      }}
                    >
                     <button
                        onClick = {()=>{ unSelectTickets(item.category)}}
                        style={{
                          padding: "0px 13px",
                          borderRadius: "100%",
                          border: "1px solid white",
                          fontSize: "25px",
                          cursor: "pointer",
                          background:"#1fbff2",
                          color:"white",
                          fontWeight:"bold"
                        }}
                      >
                        -
                      </button>
                      <Typography variant="body1" style={{ padding: "0 10px" }}>
                        {item.picked}
                      </Typography>
                     <button
                        onClick = {()=>{ soldOut == true ? alert("Ticket category already sold out") : selectTickets(item.category) }}
                        style={{
                          padding: "2px 11px",
                          borderRadius: "100%",
                          border: "1px solid white",
                          fontSize: "21px",
                          cursor:"pointer",
                          background:"#1fbff2",
                          color:"white",
                          fontWeight:"bold"
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div> */}
                </div>
         )
      })
   }
   
   React.useEffect(() => {  
     window.scrollTo(0, 0);
     setLoading(true)
      resolveEvents()  
     
   }, []);
  
  let { id } = useParams()
  
  const resolveEvents = () => {
    viewSingleEvent(id).then(events => {
        let data = events.data[0]
      // viewevent(data)
      console.log(events)
      if (events.success == false) {
        alert(events.message)
        history.push("/")
      } else {
        viewevent(data)
      }
      setLoading(false)
    })
  }

   
  return (
    <>
      
      <Helmet>
        <meta charSet="utf-8" />
       <title>{event.event_title}</title>
        {/*  <link rel="canonical" href={`https://www.reelwoodticket.com/event/${event.id}`} />
        <link rel="image_src" href={`https://ogabike.com/reelwood/images/tickets/${event.ticket_image}`} />*/}
        {/* <meta name="description" content={event.meta.desc} />
        <meta property="og:title" content={event.meta.desc} /> 
        <meta name="description" property="og:description" content={event.meta.desc} />
        <meta name="image_src" property="og:image" content={`https://ogabike.com/reelwood/images/tickets/${event.ticket_image}`} />
        <meta name="canonical" property="og:url" content={`https://ogabike.com/reelwood/images/tickets/${event.ticket_image}`} />  */}
      </Helmet>
      


      {loading == true && <div style={{ backgroundColor: "rgb(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%", top: "0px", zIndex: "3000", paddingTop:tablet ? "50%" : "20%", textAlign:"center", color:"white" }}>
      Please wait......
    </div>}
        
      
      {state.viewevent.length < 1 ? <div style={{ backgroundColor: "rgb(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%", top: "0px", zIndex: "3000", paddingTop:tablet ? "50%" : "20%", textAlign:"center", color:"white" }}>
      Please wait......
    </div> :

        <div className='ticket-variation'>

          <Header />
        {console.log(state)} 



        <div className="row ">
    
    <div className="col  Ticket-col">
    
    {tablet ? <h1>{event.event_title}</h1> : <h4>{event.event_title}</h4>}
    <p>Share Events:</p>
    <div className="col social-icon">
    <img src={facebook} alt="" className='facebook'/>
    <img src={twitter} alt="" className='twitter'/>
    <img src={instagram} alt="" className='instagram'/>
    
    </div>
    
    
    </div>
    <div className="col  Ticket-col2 text-center">
        
        <img src={`https://ogabike.com/reelwood/images/tickets/${event.ticket_image}`} alt="" className='col-img'/>
        
        </div>
    
    </div>
    
    <div className="event">
        <p className='event-d'>Event Description</p>
    
        <p className="description">
        {event.meta.desc}
        </p>
    </div>



        <div className="row variation">

<div className="col-8  ">



<div className="table-div  ">
<p className='select-ticket text-center'>Select Ticket</p>

                       {/* all tickets */} 
                       {event.meta.type == "FREE" ? <div style={{textAlign:"center"}}> This event is free </div>: <div>{allTickets()}</div>}

<div class="col-md-12 text-center ">
<button onClick={()=>{proceedPay()}} type="submit" class=" btn btn-block   mb-3 ticket-btn">
  
{event.meta.type == "FREE" ? "Get Free Ticket":"Buy Ticket"}
  
  </button> 
    </div>

</div>




</div>

<div className="col-4  details">

    <div className="venue d-flex">
    <img src={locationicon} alt="" className='img-fluid' />
    <p className='venue-p'>

    {event.meta.location}
    </p>

    </div>

    <div className="date d-flex">
        <img src={dateicon} alt=""  className='img-fluid'/>
        <p>{event.meta.endDate} @ {event.meta.endTime}</p>
    </div>

    <p className="organisers">
        Event Organisers
    </p>

    <h6>{event.meta.host}</h6>
    
</div>
</div>













        {/* <Container style={{marginTop:"50px"}}>
          <Grid container spacing={ tablet ? 4 : -10} >
             <div style={{width:"80%", position:"relative", left:"10% ", marginBottom:"10px", textAlign:"center", background:" ", color:"white", padding:"7px", borderRadius:"7px 7px 0px px ", marginTop:" "}}>
                 {tablet ? <h4>{event.event_title}</h4> : <h1>{event.event_title}</h1>}
              </div>
            <Grid item md={6} sm={12} xs={12}>
            <div style={{ width: "100%", height: " ", background: " ", textAlign: "right", paddingRight:tablet ? "": '20px' , color:"white"}}>
              
              <img
                src={`https://ogabike.com/reelwood/images/tickets/${event.ticket_image}`}
                alt={event.event_title}
                style={{ width: tablet ? '100%':'80%', height: "100%", objectFit: "cover" }}
              />


            </div>
            </Grid>


            <Grid item md={6} sm={12} xs={12}>
              <div className="select-ticket"
                style={{
                  width: tablet ? '100%':'80%', 
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
                  padding: "20px 0",
                  maxHeight: "500px"
                  
                  
                }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  style={{ color: "#124ac3", paddingBottom: "20px", fontSize:"15px", color:"#1fbff2" }}
                >
                  Select Ticket
                </Typography> 

                
                
                       all tickets 
              {event.meta.type == "FREE" ? <div style={{textAlign:"center"}}> This event is free </div>: <div>{allTickets()}</div>}
                

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#1fbff2", color: "#fff" }}
                    onClick={()=>{proceedPay()}}
                >
                  {event.meta.type == "FREE" ? "Get Free Ticket":"Buy Now"}
                    
                  </Button>
                </div>
              </div>

              
               
            </Grid>
            

          </Grid>
          
          <div style={{ height: " ", background: " ",marginTop:"70px", marginBottom:"70px" }} >
              <div
          style={{ width: "100%", height: "auto", backgroundColor: "#1f1d23" }}
        >
              <Container>
                <Typography
                  style={{ padding: "20px 0", color: "#fff" }}
                  variant="h5"
                >
                  Event Description
                </Typography>
              </Container>
            </div>
            <Container>
              <Grid container spacing={5}>
                <Grid item md={6} sm={12} xs={12}>
                  <Typography
                    variant="body1"
                    style={{
                      paddingTop: "40px",
                      color: "#fff",
                      paddingBottom: "30px",
                    }}
                  >
                    {event.meta.desc}
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{ color: "#fff", paddingBottom: "20px" }}
                  >
                    Date and Time
                  </Typography>
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      flexFlow: "row wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", paddingBottom: "10px" }}
                      >
                      Sale starts
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ color: "orange", paddingBottom: "20px" }}
                      >
                        <CalendarTodayIcon style={{color:"white" }} /> {event.meta.startDate} &nbsp;  &nbsp; <WatchLaterIcon style={{color:"white" }} /> {event.meta.startTime}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", paddingBottom: "10px" }}
                      >
                        Event Date
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ color: "orange", paddingBottom: "20px" }}
                      >
                        <CalendarTodayIcon style={{color:"white" }} /> {event.meta.endDate} &nbsp; &nbsp; <WatchLaterIcon style={{color:"white" }} /> {event.meta.endTime}
                    </Typography>
                    
                    </div>
                  </div> 
                  <Typography
                    variant="h6"
                    style={{ color: "#fff", paddingBottom: "10px" }}
                  >
                    Location
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ color: "orange", paddingBottom: "20px" }}
                  >
                     <LocationOnIcon style={{color:"white" }} /> {event.meta.location}
                </Typography> <br />
                

                  {tablet ? 
                      <>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", paddingBottom: "10px" }}
                      >
                        EVENT ORGANISER
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ color: "orange", paddingBottom: "20px" }}
                      >
                        {event.meta.host}
                    </Typography>
                      </> :
                ""} <br />
                
                    
                     {tablet ? 
                      <>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", paddingBottom: "10px" }}
                      >
                        SHARE EVENT
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ color: "orange", paddingBottom: "20px" }}
                      >
                         <FacebookShareButton
                          url={shareUrl}
                          quote={` ${event.event_title}.  ${event.meta.desc}`}
                            hashtag={`#Reelwoodticket #Reelwoodticket`} 
                        >
                          <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>

                        <WhatsappShareButton
                          url={shareUrl}
                          quote={` ${event.event_title}.  ${event.meta.desc}`}
                            hashtag={`#Reelwoodticket #Reelwoodticket`} 
                        >
                          <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                    </Typography>
                      </> :
                ""}
                
                
              </Grid>
              

              {tablet ? "":
              <Grid item md={6} sm={12} xs={12}>
                  <div
                    style={{
                      width: "25%",
                      height: "auto",
                     
                      borderRadius: 10,
                      
                      padding: "20px 0",
                       margin: "40px 0",
                      right:"15%",
                      position:"absolute"
                    }} >
                      <h2 style={{color:"white"}}>EVENT ORGANISER</h2> <br /><br />

                      <h1 style={{color:"orange", marginTop:"-20px", fontSize:"20px"}}>
                    {event.meta.host}
                        </h1>
                        
                        <br /><br />
                        <h2 style={{ color: "white" }}>SHARE EVENT</h2> <br /><br />

                      <h1 style={{color:"orange", marginTop:"-20px", fontSize:"20px"}}>
                        <FacebookShareButton
                          url={shareUrl}
                          quote={` ${event.event_title}.  ${event.meta.desc}`}
                            hashtag={`#Reelwoodticket #Reelwoodticket`} 
                        >
                          <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>

                        <WhatsappShareButton
                          url={shareUrl}
                          quote={` ${event.event_title}.  ${event.meta.desc}`}
                            hashtag={`#Reelwoodticket #Reelwoodticket`} 
                        >
                          <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                        </h1>
                        

                      </div> 
                      

                    </Grid>}
                  

                  
              


              </Grid>
            </Container>
        </div>
        

        
      </Container> */}
        <TrendingEvents />

        <EventCategory/>
          <Footer />
          
        </div>
      }
      
      {console.log(state)}
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
     viewevent: (payload) => dispatch(disp_viewevent(payload)),
    proceed_buy: (payload) => dispatch(disp_buy(payload)), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTicket)


