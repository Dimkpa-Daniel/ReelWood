import React from "react";
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram1.png';
import twitter from '../assets/twitter.png';
import logo from '../assets/logo.png'







import images from "../image/images";
import {
  Container,
  Grid,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram"
import { Link } from "react-router-dom";
import "../styles/components/footer.css"
import reel from "../image/reel.png"



function Footer() {
  // const tablet = useMediaQuery("(max-width:900px)");
  return (


    <div className='footer '>

    <div className="container ">
    
    <div className="row">
    
    <div className="col footer-col">
    <img src={logo} alt="" />
    
    <p>Copyright 2021 Reelwood Plus Global Limited <br />
    All Rights Reserved 
    </p>
    
    <div className="col social-icon">
    <img src={facebook} alt="" className='facebook'/>
    <img src={twitter} alt="" className='twitter'/>
    <img src={instagram} alt="" className='instagram'/>
    
    </div>
    
    </div>
    
    <div className="col footer-col2">
    <h4>Help & Information</h4>
    
    <p>
        <span>Terms and Condition</span> <br />
    <span>Privacy Policy</span> <br />
    <span>FAQ</span>
    </p>
    
    
    </div>
    
    
    </div>
    
    </div>
    
    
                
            </div>
    // <div
    //   style={{
    //     background: "#010306",
    //     width: "100%",
    //     height: tablet ? "" :'100px',
    //     padding: "20px 0 50px 0",
    //     position:"relative"
    //   }}
    // >
    //   <Container>
    //     <Grid container spacing={3}>
    //       <Grid item xs={12}>
    //         <img src={reel} alt="" width=" " height="30px" onClick={() => { window.scrollTo(0, 0); }} />
            
    //       </Grid>
          
    //       <div item xs={12} style={{marginTop:"14px"}}>
    //         <Typography variant="body1" style={{ color: "#fff", fontSize:"12px", paddingLeft:tablet ? '30px': '' }}>
    //          © 2021 Reelwood Plus Global Limited. All rights reserved.
    //         </Typography>
    //       </div>


    //        <div item xs={12} style={{ width:tablet ? '99%':'', left:tablet ? '4%':'', fontSize:'14px', position: tablet ? 'relative' : 'absolute', right: tablet ? "" : "10%", background: "", textAlign: tablet ? 'center':'' ,bottom:"15px",fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif" }}>
    //        <br /><br />

    //         <Typography variant="body1" style={{ marginBottom:"13px", textAlign:"center" }}>
    //         <IconButton className="links"  style={{padding:"4px", border:"1px solid white"}}>
    //           <FacebookIcon className="link" onClick={()=>{ window.open("https://web.facebook.com/brosjaykaycomedy", "_blank")}} style={{ }} />
    //         </IconButton>
    //         <IconButton className="links" style={{padding:"4px", border:"1px solid white", marginLeft:"15px"}}>
    //           <TwitterIcon className="link" onClick={()=>{ window.location.assign("")}} style={{ }} />
    //         </IconButton>
    //         <IconButton className="links"  style={{padding:"4px", border:"1px solid white", marginLeft:"15px"}}>
    //             <YouTubeIcon className="link" onClick={() => { window.open('https://www.youtube.com/channel/UCcf5LfTJQN_haTNtPqMPWlQ', '_blank'); }} style={{ }} />
    //         </IconButton>
    //         <IconButton className="links"  style={{padding:"4px", border:"1px solid white", marginLeft:"15px"}}>
    //           <Instagram className="link" onClick={()=>{ window.location.assign("")}} style={{ }} />
    //         </IconButton>
    //         </Typography>
    //       <Link className="link link2" variant="body1" style={{  }}> Refund Policy </Link>
    //       <Link className="link link2" variant="body1" style={{  }}> | </Link>
    //         <Link className="link link2" variant="body1" style={{}}> Terms & Conditions </Link>
    //          <Link className="link link2" variant="body1" style={{  }}> | </Link>
    //       <Link className="link link2" variant="body1" style={{  }}> Contact Us </Link>
    //        <Link className="link link2" variant="body1" style={{  }}> | </Link>
    //       <Link className="link link2" variant="body1" style={{  }}>About </Link>
          
    //       </div> 

    //     </Grid>
    //   </Container>
    // </div>
  );
}

export default Footer;
