import React from "react";
import VanillaAndChocolateCrop from "../assets/VanillaAndChocolateCrop.jpg";

const LandingPageTwo = () => {
  return (
    <div>
      <h1
        style={{
          fontFamily: "Shadows Into Light, cursive",
          color: "#3f0071",
          textAlign: "center",
          // backgroundColor: "#f638dc",
          background: "linear-gradient(to top, white 0%, #f638dc 100%)",
        }}
      >
        Welcome
      </h1>
      <img
        src={VanillaAndChocolateCrop}
        style={{
          // height: "10%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default LandingPageTwo;
