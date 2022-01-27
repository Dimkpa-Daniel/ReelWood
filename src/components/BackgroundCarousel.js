import React from 'react';
import logo from '../assets/logo3.png';
import icon1 from '../assets/date-icon.png';
import location from '../assets/location.png';
import { useHistory } from 'react-router-dom';
import bgimage from '../assets/main-background.png';
import Asa6 from '../assets/Asa6.jpg';
import Asa4 from '../assets/Asa4.jpg'







const BackgroundCarousel = () => {

  let history = useHistory();
    return (
        <div className='background'>
            {/* <div className="container-fluid d-fluid text-center text-light"> */}


<div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
 
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src={bgimage} class="d-block w-100 carousel-img" alt="..."/>
     <div class="carousel-caption ">
       
     <h4>The Quickest And Safest Way To <br />
          Buy Your Event <br /> Tickets.</h4>
          <p>Zero hidden service fees, group discounts and more.
          Because it should be easy.</p>
        <button onClick={()=>{ history.push("/register")}} class="btn btn-primary me-3 d-btn3" type="submit">Sell Ticket</button> 
     </div>
   </div>
   <div class="carousel-item">
     <img src={Asa6} class="d-block w-100" alt="..."/>
     <div class="carousel-caption">
     <h4>The Quickest And Safest Way To <br />
          Buy Your Event <br /> Tickets.</h4>
          <p>Zero hidden service fees, group discounts and more.
          Because it should be easy.</p>
         <button onClick={()=>{ history.push("/register")}} class="btn btn-primary me-3 d-btn3" type="submit">Sell Ticket</button> 
     </div>
   </div>
   <div class="carousel-item">
     <img src={Asa4} class="d-block w-100 carousel-img" alt="..."/>
     <div class="carousel-caption ">
     <h4>The Quickest And Safest Way To <br />
          Buy Your Event <br /> Tickets.</h4>
          <p>Zero hidden service fees, group discounts and more.
          Because it should be easy.</p>
      <button onClick={()=>{ history.push("/register")}} class="btn btn-primary me-3 d-btn3" type="submit">Sell Ticket</button> 
     </div>
   </div>
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>


{/* </div> */}





      {/* <div className="container-fluid d-fluid text-center text-light">
          <h1 className=''>The Quickest And Safest Way To <br />
          Buy Your Event <br /> Tickets.</h1>
          <p>Zero hidden service fees, group discounts and more. <br />
          Because it should be easy.</p>
        <Link to="/Signup">  <button class="btn btn-primary me-3 d-btn3" type="submit">Sell Ticket</button> </Link>
      </div> */}
     <div className="container-fluid">
      <div className="container d-container text-center" style={{height:400}}>
             <h3 className='text-light'><img src={icon1} alt="" />  03 JUNE@19:00 <br /> </h3>
            <h3 className='text-light'><img src={location} alt="" /> 02 INSTITUTE BIRMINGHAM</h3> 
      </div>

     

      </div>

{/* ADVERT SECTION */}

      <div className="container ">
      <div id="carouselExampleControls" class="carousel slide d-container2" data-bs-ride="carousel">

 <div class="carousel-inner">
 
   <div class="carousel-item active">
   <div className="row">
       <div className="col d-col1">
        <img src={logo} alt="" className='bg-light img-responsive d-img' style={{padding:10}}/>
        </div>

        <div className="col d-col2">
         <p>The Quickest and Safest Place to Buy Your Event tickets.</p>
         </div>
         

         <div className="col d-col3">
         <form className='d-flex ad-form'>
       <input class="form-control me-2 ad-input rounded-pill" type="search" placeholder="Search Events" aria-label="Search"/>
       <button class="btn btn-primary me-3  ad-btn rounded-pill" type="submit">Go</button>
       </form> 
       </div>

       </div>
    
   </div>
   <div class="carousel-item">

   <div className="row">
       <div className="col d-col1">
        <img src={logo} alt="" className='bg-light d-img' style={{padding:10}}/>
        </div>

        <div className="col d-col2">
         <p>The Quickest and Safest Place to Buy Your Event tickets.</p>
         </div>
         

         <div className="col d-col3">
         <form className='d-flex ad-form'>
       <input class="form-control me-2 ad-input rounded-pill" type="search" placeholder="Search Events" aria-label="Search"/>
       <button class="btn btn-primary me-3  ad-btn rounded-pill" type="submit">Go</button>
       </form> 
       </div>

       </div>
 
   </div>
   <div class="carousel-item">

   <div className="row">
       <div className="col d-col1">
        <img src={logo} alt="" className='bg-light d-img' style={{padding:10}}/>
        </div>

        <div className="col d-col2">
         <p>The Quickest and Safest Place to Buy Your Event tickets.</p>
         </div>
         

         <div className="col d-col3">
         <form className='d-flex ad-form'>
       <input class="form-control me-2 ad-input rounded-pill" type="search" placeholder="Search Events" aria-label="Search"/>
       <button class="btn btn-primary me-3  ad-btn rounded-pill" type="submit">Go</button>
       </form> 
       </div>

       </div>
   
   </div>
  
 </div>
 <button class="carousel-control-prev previous" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
   <span class="carousel-control-prev-icon ad-span1" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
   <span class="carousel-control-next-icon ad-span2" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>
   
</div>
<hr className='d-hr'/>
   

        </div>
    )
}

export default BackgroundCarousel
