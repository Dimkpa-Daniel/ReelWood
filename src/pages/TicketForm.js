import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
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
} from "@mui/material";

function TicketForm() {
  return (
    <>
      <Header />
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
                xs={12}
                style={{
                  paddingRight: "20px",
                }}
                spacing={5}
              >
                <Grid item xs={12}>
                  <Typography variant="h5" style={{ color: "#fff" }}>
                    Your tickets informations will be sent to your email address
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12} sm={12}>
                  <input
                    type="text"
                    placeholder="First Name"
                    style={{
                      padding: "15px 10px",
                      fontSize: 17,
                      borderRadius: 5,
                      border: "none",
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12} sm={12}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    style={{
                      padding: "15px 10px",
                      fontSize: 17,
                      borderRadius: 5,
                      border: "none",
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    style={{
                      padding: "15px 10px",
                      fontSize: 17,
                      borderRadius: 5,
                      border: "none",
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    style={{
                      padding: "15px 10px",
                      fontSize: 17,
                      borderRadius: 5,
                      border: "none",
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" style={{ color: "#fff" }}>
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      defaultValue="female"
                      name="radio-buttons-group"
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
                  style={{ color: "#124ac3", paddingBottom: "20px" }}
                >
                  Ticket Order
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    width: "100%",
                    height: "100px",
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
                      <Typography variant="h5">1 x Regular</Typography>
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
                      <Typography variant="body1">₦10,000</Typography>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    width: "100%",
                    height: "100px",
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
                      <Typography variant="h5">Service Fee</Typography>
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
                      <Typography variant="body1">₦100</Typography>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    width: "100%",
                    height: "100px",
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
                      <Typography variant="h5">Discount Fee</Typography>
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
                      <Typography variant="body1">₦20,000</Typography>
                    </div>
                  </div>
                </div>

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
                        style={{ color: "#124ac3", paddingTop: "20px" }}
                      >
                        Final Total
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
                        ₦10,100
                      </Typography>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#124ac3", color: "#fff" }}
                  >
                    Make payment
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </LandingPage>
      <Footer />
    </>
  );
}

export default TicketForm;
