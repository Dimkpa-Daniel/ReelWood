import React, { useState } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import "../styles/components/collins.css"
import {initiateTransaction, freePromoTicket} from "../function/controllers/ticket/buy-ticket"
import {
  Container,
  Grid,
  Typography,
  Button,
  FormLabel,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";

// importing redux
import { disp_bought} from "../redux"


import {isEmail} from "../function/utils/index"



function TicketForm({appState, bought}) {
   const state = appState
   const history = useHistory();

   const [compState, setCompState] = useState("")

   // buyer state
   const [firstname, setFirstname] = useState("")
   const [lastname, setLastname] = useState("")
   const [email, setEmail] = useState("")
   const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  
  const [promoCode, setPromoCode] = useState("")


  
  const tablet = useMediaQuery("(max-width:900px)");

  const miniLaptop = useMediaQuery("(max-width:140px)");

  const [open, setOpen] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


   
   React.useEffect(() => {  
      window.scrollTo(0, 0);
      setCompState({
        loading: false,
        payWithPromo:false
      })
   }, []);


   let ticket = state.buy
   let clickedTicket = ticket.filter(e => e.picked != 0) 
   let amounts = [];
   let totalCost = [] 
   clickedTicket.map(tickets => { amounts.push(tickets.cost*tickets.picked) }) 
   for (let i = 0; i < amounts.length; i++) { totalCost.push(amounts[i].cost) }
   let totalAmount = amounts.reduce((a, b) => a + b, 0)
    const promo = "JAYKAY"
  
  const confirmPromoCode = () => {
    

    if (!promoCode || promoCode.longth < 1) {
      alert("You did not enter any promo code")
    } else {
      if (promoCode == promo || promoCode == "Jaykay" || promoCode == "jaykay") {
        setCompState({
          ...compState, payWithPromo:true
        })
      } else {
        setCompState({
          ...compState, payWithPromo:false
        })
        alert("Invalid promo code")
      }
    }
    
  }




  

   // finally buy
   const finallyBuy = () => {

      if (!firstname || !lastname || !email || !phone || !gender) {
         alert("Fill out all forms")
      } else {
         if (isEmail(email) == false) {
            alert("invalid email")
         } else {
            setCompState({
               loading:true,
            })
            let buyTicketPayload = {
               amount: totalAmount,
               email: email,
               phone:"+234"+phone,
               name: firstname+" "+lastname,
               gender: gender,
               event: state.viewevent,
               tickets: state.buy.filter(e => e.picked != 0),
               buyer: {
                  amount: totalAmount,
                  email: email,
                  phone:"+234"+phone,
                  name: firstname+" "+lastname,
                  gender: gender,
               }
            }
            initiateTransaction(buyTicketPayload).then(a => {
               bought(a) 
            })
         } 
         
      }
  }
  


  const finallyBuyPromo = () => {
    
    
     
     
     if (!firstname || !lastname || !email || !phone || !gender) {
         alert("Fill out all forms")
      } else {
         if (isEmail(email) == false) {
            alert("invalid email")
         } else {
           
           //      promo only for regular
           let ticketsPromo = state.buy.filter(e => e.picked != 0)
           if(ticketsPromo.length < 2 && ticketsPromo[0].category == "Regular"){
              setCompState({
                 loading:true,
              })
              let buyTicketPayload = {
                 amount: `Free with ${promo}`,
                 email: email,
                 phone:"+234"+phone,
                 name: firstname+" "+lastname,
                 gender: gender,
                 event: state.viewevent,
                 tickets: state.buy.filter(e => e.picked != 0),
                 buyer: {
                    amount: `Free with ${promo}`,
                    email: email,
                    phone:"+234"+phone,
                    name: firstname+" "+lastname,
                    gender: gender,
                 }
              }
              freePromoTicket(buyTicketPayload).then(a => {
                bought(a)
                console.log("redirect")
                history.push(`/paysuccess?promoCode=${promo}`)
              })
           }else{
              alert("Promo is only for Regular ticket")
           }
           
            
         } 
         
      }
  }
   

   const selectedTickets = () => {
      let ticket = state.buy
      let clickedTicket = ticket.filter(e => e.picked != 0)
      console.log(clickedTicket)
      let amounts = [];
      let totalCost = []
      
      clickedTicket.map(tickets => {
         amounts.push(tickets.cost*tickets.picked)
         
      })

      for (let i = 0; i < amounts.length; i++) {
         totalCost.push(amounts[i].cost)
      }
      let totalAmount = amounts.reduce((a, b) => a + b, 0)

      return clickedTicket.map(tickets => {
         return (
            <div
            style={{
               display: "flex",
               flexFlow: "row nowrap",
               width: "100%",
               height: "70px",
               backgroundColor: "#fff",
               borderBottom: "1px solid #ccc",
            }}
            >
               <div
                  style={{
                     width: "50%",
                     height: "100%",
                     display: "flex",
                     alignItems: "center",
                  }}
               >
                  <div style={{ paddingLeft: "20px" }}>
                     <Typography variant="h5" style={{fontSize:"19px", fontWeight:"bold", color:" "}}>{tickets.picked} x {tickets.category}</Typography>
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
                     <Typography variant="b"><b>₦{tickets.picked*tickets.cost}</b></Typography>
                  </div>
               </div>
            </div>

         )
      }) 
   }

   
  return (
    <>
       {compState.loading == true && <div style={{ backgroundColor: "rgb(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%", top: "0px", zIndex: "3000", paddingTop:"20%", textAlign:"center", color:"white" }}>
          Proccessing......
        </div>}
        <Header />
        {console.log(state)}
      <LandingPage
        mobileScreen="80rem"
        tabletScreen="80rem"
        desktopScreen="110vh"
      >
        <Container>
          <Grid container spacing={6}>
            <Grid
              item
              md={6}
              xs={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Grid
                container
                item
                md={12}
                xs={tablet? 12:8}
                style={{
                  paddingRight: "20px",
                  boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
                  backgroundColor: "rgb(0,0,0,0.8)",
                  marginLeft:tablet && '3px'
                }}
                spacing={5}
              >
                <Grid item xs={12}>
                  <Typography variant="p" style={{ color: "#fff" }}>
                    Your tickets informations will be sent to your email address
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12} sm={12}>
                  <input
                  onChange = {(e)=>{setFirstname(e.target.value)}}
                  value={firstname}
                    type="text"
                    placeholder="First Name"
                    style={{
                      padding: "15px 10px",
                      fontSize: 17,
                      borderRadius: 5,
                      border: "1px solid white",
                      width: "100%",
                      backgroundColor: "rgb(0,0,0,0.8)",
                       color:"white"
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12} sm={12}>
                  <input
                  onChange = {(e)=>{setLastname(e.target.value)}}
                  value={lastname}
                    type="text"
                    placeholder="Last Name"
                    style={{
                      padding: "15px 10px",
                      fontSize: 17,
                      borderRadius: 5,
                      border: "1px solid white",
                      width: "100%",
                      backgroundColor: "rgb(0,0,0,0.8)",
                       color:"white"
                    }}
                  />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                  <span style={{color:'white'}}>Your ticket(s) will be sent to this email</span>
                  <input
                  onChange = {(e)=>{setEmail(e.target.value)}}
                  value={email}
                    type="email"
                    placeholder="A valid Email Address"
                    style={{
                      padding: "15px 10px",
                      fontSize: 17,
                      borderRadius: 5,
                      border: "1px solid white",
                      width: "100%",
                      backgroundColor: "rgb(0,0,0,0.8)",
                       color:"white"
                    }}
                  />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                  <input
                  onChange = {(e)=>{setPhone(e.target.value)}}
                  value={phone}
                    type="tel"
                    placeholder="Phone Number"
                    style={{
                     padding: "15px 10px",
                      fontSize: 17,
                      borderRadius: 5,
                      border: "1px solid white",
                      width: "100%",
                      backgroundColor: "rgb(0,0,0,0.4)",
                       color:"white"
                    }}
                  />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" style={{ color: "#fff" }}>
                      Gender
                    </FormLabel>
                    <RadioGroup
                    onChange = {(e)=>{setGender(e.target.value)}}
                     value={gender}
                      row
                      aria-label="gender"
                      defaultValue="null"
                      name="radio-buttons-group"
                      style={{color:"white"}}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                        style={{ color: "#fff" }}
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                        style={{ color: "#fff" }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              style={{
                // backgroundColor: "blue",
                height: "auto",
                // padding: "0 20px",
                maxHeight:"1400px"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
                  padding: "20px 0",
                }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  style={{  color: "#124ac3", paddingBottom: "20px", fontSize:"15px" }}
                >
                  Ticket Order
                </Typography>
                
                       

                {selectedTickets()}
                

                <div
                  style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    width: "100%",
                    height: "auto",
                    backgroundColor: "#fff",
                    // borderBottom: "1px solid #ccc",
                  }}
                >
                  <div
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
                        style={{ color: "#124ac3", paddingTop: "20px", fontSize:"20px" }}
                      >
                        <b>Final Total</b>
                      </Typography>
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
                      <Typography
                        style={{ color: "#124ac3", paddingTop: "20px" }}
                        variant="body1"
                      >
                       <b> ₦{totalAmount}</b>
                      </Typography>
                    </div>
                  </div>
                </div>




                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                    padding:"10px"

                    
                  }}
                >
                 


                  <Grid item md={12} xs={12} sm={12}>
                    <input
                    onChange = {(e)=>{setPromoCode(e.target.value)}}
                    value={promoCode}
                      type="text"
                      placeholder="Enter promo code"
                      style={{
                      padding: "6px 10px",
                        fontSize: 17,
                        borderRadius: 5,
                        border: "1px solid white",
                        width: "100%",
                        backgroundColor: "rgb(0,0,0,0.4)",
                        color: "white",
                        margin: "0px 5px",
                        outline: "none",
                        // textTransform:"uppercase"
                      }}
                    />
                  </Grid>
                  
                   <Button
                     onClick={()=>{confirmPromoCode()}}
                    variant="contained"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#fff", outline:"none", border:"none", textTransform:"uppercase" , paddingTop:"0px"}}
                  >
                      Apply  
                  </Button>


                  
                </div>





                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                    marginTop: "10px",
                    padding:"0px 10px"
                  }}
                >
                  {compState.loading == false ?
                    <div>
                      {compState.payWithPromo == true ?
                      <Button
                     onClick={()=>{finallyBuyPromo()}}
                    variant="contained"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#fff" }}
                  >
                    Get Tickets for free
                    </Button> :
                      <Button
                        onClick={()=>{finallyBuy()}}
                        variant="contained"
                        style={{ backgroundColor: "rgb(31, 191, 242)", color: "#fff",padding:"6px 10px" }}
                      >
                        Pay ₦{totalAmount}
                        </Button>}
                    </div>
                  
                    :
                  <Button 
                    variant="contained"
                    style={{ backgroundColor: "#124ac3", color: "#fff", opacity:"0.4", cursor:"no-drop",padding:"4px" }}
                  >
                    Processing...
                  </Button>}
                  
                </div>
              </div>
            </Grid>
          </Grid>
        </Container> <br/><br/><br/><br/>
      </LandingPage>
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
     bought: (payload) => dispatch(disp_bought(payload)), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketForm)
