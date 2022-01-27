import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import "../styles/pages/create-event.css";
import { uploadTicket} from "../function/controllers/ticket/index"
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import { supabase } from "../function/config/index" 

// importing redux
import { disp_events } from "../redux"


import ImageResize from 'image-resize';





const TicketCategory = ({ values, index, handleChildChange, removeChild, handleChildChange_cost ,handleChildChange_qty}) => {
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              onChange={(e) => {
                handleChildChange(e, index);
              }}
             
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control  onChange={(e) => {
                handleChildChange_cost(e, index);
              }} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control   onChange={(e) => {
                handleChildChange_qty(e, index);
              }}/>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};




const CreateEvent = ({ appState , dispEvent}) => {
  const state = appState
  let history = useHistory();


  React.useEffect(() => {  
    window.scrollTo(0, 0);
    setCompState({...compState, loading:false})
     
  }, []);
  
  const [uploadedFile, setUploadedFile] = useState('')
  
  const [blob, setBlob] = useState("")

  const [title, setTitle] = useState("")
  const [host, setHost] = useState("")
  const [desc, setDesc] = useState("")
  const [startDate, setStartDate] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endDate, setEndDate] = useState("")
  const [endTime, setEndTime] = useState("")
  const [location, setLocation] = useState("")
  const [link, setLink] = useState("")
  const [category, setCategory] = useState("")
  const [type, setType] = useState("")


  const [values, setValues] = useState({
    category: [
      {
        category: "",
        picked:0
      },
    ],
  });


  const [compState, setCompState] = useState("")


  // ===  create eve nt
  const createEvent = () => {
    if (!title || !host || !desc || !startDate || !startTime || !endDate || !endTime || !location || !link || !category || !type) {
      alert("Fill out all forms")
    } else if (!blob) {
      alert("PLease select a cover for your event")
      window.scrollTo(0, 0);
    }
    else {
      setCompState({
        ...compState,
        loading:true
      })
      let payload = {
        event_title:title, seller_name:state.loggedInUser.name, seller_id:state.loggedInUser.id,
        
        meta: {
          host, desc, startDate, endDate, startTime, endTime, location, link, category, type,
        }
      }
      uploadTicket(uploadedFile, payload).then(response => {
        // console.log(response)
        if (response.success == true) {
          // state.events.push(response.data)
          // dispEvent(state.events)
          console.log(response)

          if (response.success == true) {
            
          } else {
            
          }

          setTimeout(() => history.push("/dashboard"), 200);
        } else {
          alert(response.message)
        }
      })
      









        // console.log(JSON.stringify(values.category))

        // console.log(blob.file)
        // var formdata = new FormData();
        // formdata.append("event_title", title);
        // formdata.append("seller_name", state.loggedInUser.name);
        // formdata.append("seller_id", state.loggedInUser.id);
        // formdata.append("host", host);
        // formdata.append("startDate", startDate);
        // formdata.append("endDate", endDate);
        // formdata.append("startTime", startTime);
        // formdata.append("endTime", endTime);
        // formdata.append("location", location);
        // formdata.append("category", category);
        // formdata.append("type", type);
        // formdata.append("desc", desc);
        // formdata.append("allTickets", JSON.stringify(values.category));
        // formdata.append("ticket", blob.file);
        
        // var requestOptions = {
        //   method: 'POST',
        //   body: formdata,
        //   redirect: 'follow'
        // };

        // fetch("https://ogabike.com/reelwood/api/v1/event/create", requestOptions)
        //   .then(response => response.text())
        //   .then(result => {
        //     console.log(JSON.parse(result));
        //     alert("Event added..  Contact the Reelwood team for event verification and activation")
        //     history.push("/dashboard")

            
        //   })
        //   .catch(error => console.log('error', error));
      }
  }


 

  const handleChildChange = (elem, indx) => {
    const { name, value } = elem.target;
    const newValue = values.category;  
    let exact = newValue[indx] 
    let modifiedExact = { ...exact, category: value }  
    newValue.splice(indx,1, modifiedExact)
    
    setValues((prev) => ({ ...prev, category: newValue }));
  };

  const handleChildChange_cost = (elem, indx) => {
    const { name, value } = elem.target;
    const newValue = values.category;  
    let exact = newValue[indx] 
    let modifiedExact = { ...exact, cost: value }  
    newValue.splice(indx,1, modifiedExact) 
    setValues((prev) => ({ ...prev, category: newValue }));
  }

  const handleChildChange_qty = (elem, indx) => {
    const { name, value } = elem.target;
    const newValue = values.category;  
    let exact = newValue[indx] 
    let modifiedExact = { ...exact, quantity: value }  
    newValue.splice(indx,1, modifiedExact) 
    setValues((prev) => ({ ...prev, category: newValue }));
  }

  const addChild = () => {
    const newValue = values.category;
    newValue.push({
      category: "",
      picked: 0
    });
    setValues((prev) => ({ ...prev, category: newValue,}));
  };

  
  const preview = (event) => {
    
    let files = event.target.files
   
    console.log('wogas: ' + files[0])
    
    // <input type="file" id="upload"/>
    let image = document.getElementById('upload')  

    var imageResize = new ImageResize({
      quality:.80
    });
    imageResize.play(image).then(response => {  
      function dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }
    
    //Usage example:
    var file = dataURLtoFile(response, files.name);
    setBlob({...blob, file:file, url2:URL.createObjectURL(file)})  

    }).catch(error => {
      console.log(error)
    })
  

  }


  return state.loggedIn != true ? (
    <div>{history.push("/login")}</div>
  ): (
      <>
        {compState.loading == true && <div style={{ backgroundColor: "rgb(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%", top: "0px", zIndex: "3000", paddingTop:"20%", textAlign:"center", color:"white" }}>
          Proccessing......
        </div>}
        <Header />
       
        <form className="create-event ">

          
         
        <Container  style={{ background: "#010306", }}>
          <Row className="mb-5 firstRow">
            <Col md={4} className="file-box d-flex justify-content-center align-items-center px-8">
              <Form.Group className="position-relative mb-3">
                <Form.Control id="upload" type="file" required name="file" onChange={(event) => { preview(event) }} /> 
                  {blob ?  <img  className="imgPrev2" id="blah" src={blob.url2} alt="your image" /> : <div className="imgPrev">(cc1400px X 400px not larger than 1mb)</div>}
                </Form.Group> 
            </Col>
           
           {console.log(state)}
           
            <Col md={7} className="">
              <Form.Group className="mb-3">
                <Form.Label className="blue-text">Event Title</Form.Label>
                <Form.Control value={title} onChange = {(e)=>{setTitle(e.target.value)}} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="blue-text">Event Host</Form.Label>
                <Form.Control value={host} onChange = {(e)=>{setHost(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="blue-text">Event Description</Form.Label>
                <Form.Control as="textarea" className="textarea" value={desc} onChange = {(e)=>{setDesc(e.target.value)}} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-5">
            {" "}
            <p className="blue-text">Time & Date</p>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="date" value={startDate} onChange = {(e)=>{setStartDate(e.target.value)}} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="time" value={startTime} onChange = {(e)=>{setStartTime(e.target.value)}} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="date" value={endDate} onChange = {(e)=>{setEndDate(e.target.value)}} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="time" value={endTime} onChange = {(e)=>{setEndTime(e.target.value)}} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="blue-text">Event Location</Form.Label>
                <Form.Control value={location} onChange = {(e)=>{setLocation(e.target.value)}}/>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="blue-text">Event Location url</Form.Label>
                <Form.Control value={link} onChange = {(e)=>{setLink(e.target.value)}}/>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="blue-text">Event Category</Form.Label>
                <Form.Control value={category} onChange = {(e)=>{setCategory(e.target.value)}} as="select">
                    <option>Comedy</option>
                    <option>Techtalk</option>
                    <option>Fashion</option>
                    <option>Music</option>
                    <option>Party</option>
                    <option>Social</option>
                    <option>Business</option>
                    <option>Sport</option>
                    <option>Exhibition</option>
                    <option>Play</option>
                    <option>Gallery</option>
                    <option>Live Show</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="blue-text">Ticket type</Form.Label>
                <Form.Control value={type} onChange = {(e)=>{setType(e.target.value)}} as="select">
                    <option>FREE</option>
                    <option>PAID</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className='mt-4' >
            <Col>
              <Form.Label className="blue-text"> Category</Form.Label>
            </Col>
            <Col>
              <Form.Label className="blue-text">Ticket Price</Form.Label>
            </Col>
            <Col>
              <Form.Label className="blue-text">Ticket qty</Form.Label>
            </Col>
          </Row>
          {values.category.map((item, index) => (
            <TicketCategory values={values} index={index} handleChildChange={handleChildChange} handleChildChange_cost={handleChildChange_cost} handleChildChange_qty={handleChildChange_qty} key={index} />
          ))}
          <Button
            onClick={() => {
              addChild();
            }}
          >
            +
          </Button> <br /><br /><br />

          

          <div className="terms">
            <Button className="addBtn" onClick={()=>{createEvent()}} >Post Event</Button><br /><br />

            By creating event, you accept the terms and conditions for using our service, and hereby confirm that you  have read the Agreement.
          </div>
          <br /><br />
        </Container>
      </form>
    </>
  );
};
 

const mapStateToProps = state => { 
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch,encoded) => {
  return { 
     dispEvent: (payload) => dispatch(disp_events(payload)), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent)
