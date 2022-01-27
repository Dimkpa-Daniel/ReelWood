import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import CategoryButton from "./CategoryButton";
import { useHistory } from "react-router-dom";
import Featured from "./FeaturedEvents"


import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";


import reel from "../image/hero2.png"

import reel2 from "../image/img1.png"

import reel3 from "../image/landingpics.png"
import reel4 from "../image/img2.png"


function EventCategory() {
  let history = useHistory();


  const Category = () => {
    let cats = [{ name: "Comedy", img:reel2 }, { name: "Techtalk", img:reel3 }, { name: "Fashion", img:reel4 }, { name: "Music", img:reel2 }, { name: "Party", img:reel3 }, { name: "Social", img:reel4 },
      { name: "Business", img:reel2 },{ name: "Sport", img:reel },{ name: "Exhibition", img:reel4 },{ name: "Play", img:reel3 },{ name: "Gallery", img:reel2 },
    { name: "Live Show", img:reel3 }]
  
  return cats.map(cats => {
    return (
      <>
        <div onClick={() => { history.push(`/filter/${cats.name}`);  window.scrollTo(0, 0); }}  style={{ height: "110px", width: "100%", backgroundColor: " " }}>
           <img 
          
          src={cats.img}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0",
            opacity:"0.4"
          }}
          />
         
          <p style={{position:"absolute", zIndex:"2000", width:"100%", height:"100%", color:"white", top:'0px',textAlign:"center", fontWeight:"bold", fontWeight:" ", paddingTop:"40px"}} >{cats.name}</p>     
        </div>
      
      </>
    );
    
  })
  };
  

  return (
    <div className="categories"
      style={{
        width: "100%",
        height: "auto",
        padding: "50px 0",
      }}
    >
      <div className="container  card-heading">
<p className='text-light '><span>.</span>Categories</p>

</div>
    


        <div className="container-fluid categories-fluid"
      style={{
        width: "100%",
        height: "auto",
        // backgroundColor: "#1A2129",
        // paddingBottom: "20px",
      }}
    >
     
        <OwlCarousel
          className="owl-theme"
          loop
          margin={30}
          autoplay
          autoplayHoverPause={true}
          autoplayTimeout={3000}
          autoplaySpeed={2000}
          dots={false}
          responsive={{
            0: {
              items: 2,
            },
            600: {
              items: 2,
            },
            900: {
              items: 3,
            },
            1200:{
              items:7
            }
          }}
        >
          {/* <Card/>  */}
              {/* {events()} */} 
              {Category()}
        </OwlCarousel>
      
        </div>
        

     
    </div>
  );
}

export default EventCategory;
