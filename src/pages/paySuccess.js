import React from 'react'
import { connect } from 'react-redux'  
import "../styles/pages/paysuccess.css"  
import { Button, Modal, Container,Card } from "react-bootstrap";
import tick from "../image/tick.png";
import { useHistory } from "react-router-dom";

import { sendEmail } from "../function/controllers/ticket/buy-ticket"

import {saveTicket} from "../function/controllers/ticket/index"

import {disp_bought} from "../redux"
import { GoTrueClient } from '@supabase/gotrue-js';



const HeroCard = ({appState, bought}) => {
  const state = appState
  const history = useHistory();
  let promo = ''

  const queryString = window.location.search; 
  const urlParams = new URLSearchParams(queryString); 
  const page_type = urlParams.get('status')
  
  if (urlParams.get('promoCode')) {
    promo = urlParams.get('promoCode')
  } else {
    promo = null
  }
  

  const triggerEmail = () => {  

    if (page_type == 'cancelled') {
      alert("Transaction declined")
      bought([]);
      history.push("/")
    } else {
      sendEmail(state.bought).then(response => {
        console.log("sent")
        
        save() 
      })
    } 
  }

  

  let save = () => {
    state.bought.tickets.map(tks => {
      let payload = {
        ...tks.ticket,
        ticketId: tks.ticketId,
        event: state.bought.event.id,
        isActive: true,
        seller: tks.meta.seller_id,
        amount:tks.buyer.amount
      }

      saveTicket(payload)

    })
  } 

  

  React.useEffect(() => {  
    window.scrollTo(0, 0);
    triggerEmail()
  }, []);

  return state.bought.length == 0 ? (
    <div> {history.push("/")} </div>
  ) : (
      <Card className='paySuccess'>
        {console.log(state.bought)}
      <Card.Body>
        <Modal.Body>
          <b>{state.bought.tickets[0].buyer.email}</b>
        </Modal.Body>
        <Container>
          <img src={tick} alt="payment successful" />
            
            <b>{promo == null ? <h5>Payment Successful</h5> : <div>Ticket gotten with <b> {promo}</b> promo code </div>} <br /></b>
          <p>Your ticket ID has been sent to <b>{state.bought.tickets[0].buyer.name}</b> via  <b>{state.bought.tickets[0].buyer.email}</b> </p>
        </Container>
        <Modal.Footer>
            <Button onClick={() => { history.push("/"); bought([]);  }} >Finish</Button>
        </Modal.Footer>
      </Card.Body>

      
    </Card>
  );
};

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
)(HeroCard)