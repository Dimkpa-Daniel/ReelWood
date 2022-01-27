import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Paper, TextField, Button } from "@mui/material";
import Menu from "../components/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {Chat, FactCheck, ConfirmationNumber, PeopleAlt } from "@mui/icons-material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import { makeStyles } from "@mui/styles";


import { useHistory, useParams } from "react-router-dom";
import {supabase} from "../function/config/index"


function Dashboard() {

   const [compState, setCompState] = useState("")

   const fetch = () => {
      setCompState({
        ...compState, loading:true
      })
     supabase.from("users").select("*").then(users => {
         
        supabase.from("tickets").select('*').then(tks => { 
           supabase.from("event").select("*").then(events => {
              setCompState({
               ...compState, users:users.body, tickets:tks.body, events:events.body, loading:false
               })
            })
      })
        
      }).catch(error => {
        setCompState({
          ...compState, loading:false
        })
      })
   }
   
   const fetch2 = () => { 
      supabase.from("tickets").select('*').then(events => {
         console.log(events) 
      }) 
  }



   React.useEffect(() => {  
    window.scrollTo(0, 0);
     fetch()
     fetch2()
  }, []);



  return (
     <div style={{ width: "100%", height: "100vh", backgroundColor: "#e9f7f7" }}>
        
        {compState.loading == true && <div style={{ backgroundColor: "rgb(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%", top: "0px", zIndex: "3000", paddingTop:"20%", textAlign:"center", color:"white" }}>
      Loading......
    </div>}

        
      <Box style={{ display: "flex"}}>
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
                  Dashboard
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: "#888795", paddingTop: "10px" }}
                >
                  Information about your current plan and usages.
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
            </Grid> <br/><br/>
            <Grid container style={{ marginTop: "40px" }}>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    borderRadius: "7px 0 0 7px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#FEDA97",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FactCheck
                        style={{ color: "crimson", fontSize: "40px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Inactive Events
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        {compState.events ? <span>{compState.events.filter(e=> e.isActive != true).length}</span> :"--"}
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#BFC1DF",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FactCheck
                        style={{ color: "#4866A4", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Events
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                          {compState.events ? <span>{compState.events.length}</span> :"--"}
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    // borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#B3F6EF",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ConfirmationNumber
                        style={{ color: "blue", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Tickets Bought
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                         {compState.events ? <span>{compState.tickets.length}</span> :"--"}
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    width: "100%",
                    padding: "30px 0",
                    borderRadius: "0 7px 7px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#F6C9C9",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ConfirmationNumber
                        style={{ color: "mediumseagreen", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Active Tickets
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                         {compState.tickets ? <span>{compState.tickets.filter(e=> e.isActive == true).length}</span> :"--"}
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
            
            

            <Grid container style={{ marginTop: "40px" }}>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    borderRadius: "7px 0 0 7px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#FEDA97",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ConfirmationNumber
                        style={{ color: "crimson", fontSize: "40px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Inactive Tickets
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                         {compState.tickets ? <span>{compState.tickets.filter(e=> e.isActive != true).length}</span> :"--"}
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#BFC1DF",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PeopleAlt
                        style={{ color: "#4866A4", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        All Users
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                         {compState.users ? <span>{compState.users.length}</span> :"--"}
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    // borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#B3F6EF",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FactCheck
                        style={{ color: "#13CEBD", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Active Events
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                         {compState.events ? <span>{compState.events.filter(e=> e.isActive == true).length}</span> :"--"}
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>



          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
