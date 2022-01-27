import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import images from "../image/images";
import { Container, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FeaturedEvents from "../components/FeaturedEvents";
import TrendingEvents from "../components/TrendingEvents";
import EventCategory from "../components/EventCategory";

function Slider() {

    const tablet = useMediaQuery("(max-width:900px)")



  return (
    <>
      <Header />
      <Carousel interval={2000}>
      <Carousel.Item style={{ position: "relative" }}>
          <img
            className="d-block w-100"
            src={images.landing}
            alt=""
            style={{ height: tablet ? "38rem" : "86vh", objectFit: "cover", }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <Container style={{ height: "100%", display:"flex", alignItems:"center" }}>
              <Grid container spacing={6}>
                <Grid
                  item
                  md={6}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      padding: " 0 10%",
                    }}
                  >
                    <Typography variant="h4" style={{ color: "#fff" }}>
                      Techup Port-Harcourt
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexFlow: "row nowrap",
                        width: "auto",
                        padding: "10px 0",
                        backgroundColor: "#010306",
                        marginTop: "10px",
                        marginBottom: "30px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "50%",
                        }}
                      >
                        <WatchLaterIcon
                          style={{ color: "#fff", marginLeft: "8px" }}
                        />
                        <Typography
                          variant="body2"
                          style={{ color: "#fff", paddingLeft: "10px" }}
                        >
                          06:00pm
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "50%",
                          justifyContent: "flex-end",
                        }}
                      >
                        <CalendarTodayIcon style={{ color: "#fff" }} />
                        <Typography
                          variant="body2"
                          style={{
                            color: "#fff",
                            paddingLeft: "10px",
                            marginRight: "8px",
                          }}
                        >
                          24 Nov 20
                        </Typography>
                      </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: "20px" }}>
                      <LocationOnIcon
                        style={{ color: "#fff", marginTop: "5px" }}
                      />
                      <Typography
                        variant="body1"
                        style={{
                          color: "#fff",
                          paddingLeft: "10px",
                          paddingBottom: 10,
                        }}
                      >
                        Opposite Portharcourt Pleasure Park behind bori camp,
                        portharcourt, Rivers state
                      </Typography>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Button
                        style={{
                          backgroundColor: "#124ac3",
                          color: "#fff",
                          width: "60%",
                        }}
                        variant="contained"
                      >
                        Book A Spot
                      </Button>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  md={6}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "row nowrap",
                      alignItems: "center",
                      width: "100%",
                      height: "100px",
                      //   backgroundColor: "blue",
                      padding: "0 10%",
                    }}
                  >
                    <div
                      style={{
                        width: "100px",
                        height: "100%",
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h3" style={{ color: "#fff" }}>
                        03
                      </Typography>
                    </div>
                    <Typography
                      variant="h1"
                      style={{ color: "#fff", padding: "0 10px" }}
                    >
                      :
                    </Typography>
                    <div
                      style={{
                        width: "100px",
                        height: "100%",
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h3" style={{ color: "#fff" }}>
                        03
                      </Typography>
                    </div>
                    <Typography
                      variant="h1"
                      style={{ color: "#fff", padding: "0 10px" }}
                    >
                      :
                    </Typography>
                    <div
                      style={{
                        width: "100px",
                        height: "100%",
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h3" style={{ color: "#fff" }}>
                        03
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ position: "relative" }}>
          <img
            className="d-block w-100"
            src={images.landing}
            alt=""
            style={{ height: tablet ? "38rem" : "86vh", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <Container style={{ height: "100%", display:"flex", alignItems:"center" }}>
              <Grid container spacing={6}>
                <Grid
                  item
                  md={6}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      padding: " 0 10%",
                    }}
                  >
                    <Typography variant="h4" style={{ color: "#fff" }}>
                      Techup Port-Harcourt
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexFlow: "row nowrap",
                        width: "auto",
                        padding: "10px 0",
                        backgroundColor: "#010306",
                        marginTop: "10px",
                        marginBottom: "30px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "50%",
                        }}
                      >
                        <WatchLaterIcon
                          style={{ color: "#fff", marginLeft: "8px" }}
                        />
                        <Typography
                          variant="body2"
                          style={{ color: "#fff", paddingLeft: "10px" }}
                        >
                          06:00pm
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "50%",
                          justifyContent: "flex-end",
                        }}
                      >
                        <CalendarTodayIcon style={{ color: "#fff" }} />
                        <Typography
                          variant="body2"
                          style={{
                            color: "#fff",
                            paddingLeft: "10px",
                            marginRight: "8px",
                          }}
                        >
                          24 Nov 20
                        </Typography>
                      </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: "20px" }}>
                      <LocationOnIcon
                        style={{ color: "#fff", marginTop: "5px" }}
                      />
                      <Typography
                        variant="body1"
                        style={{
                          color: "#fff",
                          paddingLeft: "10px",
                          paddingBottom: 10,
                        }}
                      >
                        Opposite Portharcourt Pleasure Park behind bori camp,
                        portharcourt, Rivers state
                      </Typography>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Button
                        style={{
                          backgroundColor: "#124ac3",
                          color: "#fff",
                          width: "60%",
                        }}
                        variant="contained"
                      >
                        Book A Spot
                      </Button>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  md={6}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "row nowrap",
                      alignItems: "center",
                      width: "100%",
                      height: "100px",
                      //   backgroundColor: "blue",
                      padding: "0 10%",
                    }}
                  >
                    <div
                      style={{
                        width: "100px",
                        height: "100%",
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h3" style={{ color: "#fff" }}>
                        03
                      </Typography>
                    </div>
                    <Typography
                      variant="h1"
                      style={{ color: "#fff", padding: "0 10px" }}
                    >
                      :
                    </Typography>
                    <div
                      style={{
                        width: "100px",
                        height: "100%",
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h3" style={{ color: "#fff" }}>
                        03
                      </Typography>
                    </div>
                    <Typography
                      variant="h1"
                      style={{ color: "#fff", padding: "0 10px" }}
                    >
                      :
                    </Typography>
                    <div
                      style={{
                        width: "100px",
                        height: "100%",
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h3" style={{ color: "#fff" }}>
                        03
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ position: "relative" }}>
          <img
            className="d-block w-100"
            src={images.landing}
            alt=""
            style={{ height: tablet ? "38rem" : "86vh", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            <Container style={{ height: "100%", display:"flex", alignItems:"center" }}>
              <Grid container spacing={6}>
                <Grid
                  item
                  md={6}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      padding: " 0 10%",
                    }}
                  >
                    <Typography variant="h4" style={{ color: "#fff" }}>
                      Techup Port-Harcourt
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexFlow: "row nowrap",
                        width: "auto",
                        padding: "10px 0",
                        backgroundColor: "#010306",
                        marginTop: "10px",
                        marginBottom: "30px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "50%",
                        }}
                      >
                        <WatchLaterIcon
                          style={{ color: "#fff", marginLeft: "8px" }}
                        />
                        <Typography
                          variant="body2"
                          style={{ color: "#fff", paddingLeft: "10px" }}
                        >
                          06:00pm
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "50%",
                          justifyContent: "flex-end",
                        }}
                      >
                        <CalendarTodayIcon style={{ color: "#fff" }} />
                        <Typography
                          variant="body2"
                          style={{
                            color: "#fff",
                            paddingLeft: "10px",
                            marginRight: "8px",
                          }}
                        >
                          24 Nov 20
                        </Typography>
                      </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: "20px" }}>
                      <LocationOnIcon
                        style={{ color: "#fff", marginTop: "5px" }}
                      />
                      <Typography
                        variant="body1"
                        style={{
                          color: "#fff",
                          paddingLeft: "10px",
                          paddingBottom: 10,
                        }}
                      >
                        Opposite Portharcourt Pleasure Park behind bori camp,
                        portharcourt, Rivers state
                      </Typography>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Button
                        style={{
                          backgroundColor: "#124ac3",
                          color: "#fff",
                          width: "60%",
                        }}
                        variant="contained"
                      >
                        Book A Spot
                      </Button>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  md={6}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <img src={images.event} alt="" style={{width:"100%", height:"450px", objectFit:"contain"}} />
                </Grid>
              </Grid>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
      <FeaturedEvents/>
      <TrendingEvents/>
      <EventCategory/>
      <Footer />
    </>
  );
}

export default Slider;
