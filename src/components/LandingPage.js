import React from "react";
import images from "../image/images";
import { useMediaQuery } from "@mui/material";

function LandingPage({ children, mobileScreen, tabletScreen, desktopScreen }) {
  const tablet = useMediaQuery("(max-width:900px)");
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <div
        style={{
          width: "100%",
          height:  mobile ? mobileScreen : tablet ? tabletScreen :  desktopScreen,
          position: "relative",
        }}
      >
        <img
          src={images.landing}
          alt=""
          width="100%"
          height="100%"
          style={{ objectFit: "cover",visibility:"hidden" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#090c1369",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
