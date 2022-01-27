import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { Typography } from "@mui/material";
import { useHistory,Link } from "react-router-dom";
// import "../styles/components/header.css"
// import '../styles/Homepage/Card.scss';
import locating from '../assets/locating.png';
import pricetag from '../assets/pricetag.png'








function Card(event, dispViewEvent) {

  let history = useHistory();

  let location = ""
  if (event.meta.location.length > 16) {
    location = event.meta.location.substring(0, 16) + "....";
  } else {
    location = event.meta.location
  }

  return (
    <div className='cardcomp'>

      <div className="container-fluid">

        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center ">

          <div class="col card-col d-card-col" style={{ width: 380 }}>
            <div className="container">

            </div>
            <div class="card d-bg-card">

              <div className="bg-image3">

                <img src={`https://ogabike.com/reelwood/images/tickets/${event.ticket_image}`} class="card-img img-fluid" alt="..." />

                <div className='bottom'>
                  <h5 className='text-light'>  02 | Dec</h5>
                </div>

              </div>
              <div class="card-body d-bg-card">

                <div class="container ">

                  <div class="col bg3-col">

                    <h5 class="card-title eventTitle" onClick={() => { dispViewEvent(event); history.push(`event/${event.id}`) }} style={{ color: 'purple' }}>
                      {event.event_title}
                    </h5>

                    <p className="location text-light"><img src={locating} alt="" /> {location} </p>
                    <p className="price-tag text-light"><img src={pricetag} alt="" /> Starting from ₦{event.meta.tickets[0].cost} </p>


                  </div>

                </div>

                <div className="container-fluid card-btn">
                  <Link to="/TicketVariation">  <button class="btn btn-outline-primary ticket-btn ticket-button" onClick={() => { window.scrollTo(0, 0); dispViewEvent(event); history.push(`/event/${event.id}`) }}>Buy Ticket </button> </Link>
                </div>



              </div>

            </div>

          </div>



        </div>


      </div>


      {/* <div
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <img
            src={`https://ogabike.com/reelwood/images/tickets/${event.ticket_image}`}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px 10px 0 0",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "#0d0d0d",
            padding: "0 20px 20px 20px",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            align="left"
            style={{ padding: "20px 0 10px 0" }}
          >
            <p className="eventTitle" onClick={() => { dispViewEvent(event); history.push(`event/${event.id}`) }} style={{ fontWeight: 600, fontSize: "15px" }} >
              {event.event_title}
            </p>
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <LocationOnOutlinedIcon style={{ color: "#fff", fontSize: "14px" }} />
            <Typography
              variant="body2"
              style={{
                color: "#fff",
                paddingLeft: "7px",
              }}
            >
              {location}
            </Typography>
          </div> */}
          {/* <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <CalendarTodayIcon
                  style={{ color: "#fff", fontSize: "18px" }}
                />
                <Typography
                  variant="body2"
                  style={{
                    color: "#fff",
                    paddingLeft: "7px",
                  }}
                >
                  23 nov 2021
                </Typography>
              </div> */}
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <LocalOfferOutlinedIcon
              style={{ color: "#fff", fontSize: "18px" }}
            />
            <Typography
              variant="body2"
              style={{
                color: "#fff",
                paddingLeft: "7px",
              }}
            >
              Starting from ₦{event.meta.tickets[0].cost}
            </Typography>
          </div> */}
          {/* <a style={{ textDecoration: "none" }} >
            <button class="ticket-button" onClick={() => { window.scrollTo(0, 0); dispViewEvent(event); history.push(`/event/${event.id}`) }}>
              GRAB A TICKET
            </button>
          </a> */}
        {/* </div> */}
      </div>
   
  )
}

export default Card
