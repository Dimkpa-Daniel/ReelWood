import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Paper, TextField, Button } from "@mui/material";
import Menu from "../components/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import { makeStyles } from "@mui/styles"; 


import { useHistory, useParams } from "react-router-dom";
import { supabase } from "../function/config/index"


function Event() {

  const history = useHistory();
  
  const [compState, setCompState] = useState("")
  let {userId} = useParams()

  const fetch = () => {
      setCompState({
        ...compState, loading:true
      })
      supabase.from("event").select("*").then(events => {
        setCompState({
          ...compState, event:events.body, loading:false
        })
      }).catch(error => {
        setCompState({
          ...compState, loading:false
        })
      })
  }

  let events = () => {
    if (compState.event) {
      return compState.event.map(evts => {
        return (
          <>
            <tr style={{cursor:"pointer"}} onClick={() => history.push(`/event-Description/${evts.id}`)}>
              <th>{evts.id}</th>
              <th>{evts.event_title}</th>
              <th>{evts.seller_name}</th>
              <th>{evts.meta.host}</th>
              <th>{evts.meta.endDate}</th>
              <th>{evts.meta.tickets.length}</th>
              <th>{evts.meta.location}</th>
            </tr>
            </>
        )
      })
    }
  }


  React.useEffect(() => {  
    window.scrollTo(0, 0);
    fetch()
  }, []);


  

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#e9f7f7" }}>
      
      {compState.loading == true && <div style={{ backgroundColor: "rgb(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%", top: "0px", zIndex: "3000", paddingTop:"20%", textAlign:"center", color:"white" }}>
      Loading......
      </div>}
      
      <Box sx={{ display: "flex" }}>
        <Menu />
        {console.log(compState)}
        <Box
          component="main"
          style={{ flexGrow: 1, backgroundColor: "#e9f7f7", height: "auto" }}
        >
          <Container>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h4" style={{ paddingTop: "20px" }}>
                  Events
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: "#888795", paddingTop: "10px" }}
                >
                  Information about your events.
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Paper
                  elevation={3}
                  style={{
                    padding: "15px 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CalendarTodayIcon
                    style={{ fontSize: "30px", color: "08086b" }}
                  />
                  <Typography
                    variant="body1"
                    style={{ color: "#8887a6", paddingLeft: "7px" }}
                  >
                    {new Date().toDateString()}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <div
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#fff",
                borderRadius: "10px",
                marginTop: "50px",
                boxShadow: "1px 1px 3px rgba(0,0,0,0.4)",
                overflowX: "auto",
                paddingTop: "10px",
                marginBottom: "30px",
              }}
            >
              {/* <Grid container spacing={2}>
                <Grid
                  item
                  xs={7}
                  style={{ display: "flex", justifyContent: "flex-Start" }}
                >
                  <Button variant="text" style={{ color: "#000" }}>
                    All
                  </Button>
                  <Button variant="text" style={{ color: "#000" }}>
                    pending
                  </Button>
                  <Button variant="text" style={{ color: "#000" }}>
                    dispatch
                  </Button>
                  <Button variant="text" style={{ color: "#000" }}>
                    completed
                  </Button>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    variant="filled"
                    label="Search"
                    style={{ width: "90%", borderRadius: "10px" }}
                  />
                </Grid>
              </Grid> */}
              <div style={{ width: "100%", height: "auto", marginTop: "10px" }}>
                <table>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Event creator</th>
                    <th>Event title</th>
                    <th>Date</th>
                    <th>categories</th>
                    <th>Location</th>
                  </tr>


                  {events()} 
                </table>
              </div>
            </div>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Event;
