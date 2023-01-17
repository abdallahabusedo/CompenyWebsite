import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./../../styles/Home.module.css";
import shape1 from "../../assets/Mask.png";
import Image from "next/image";
import Body from "./Body";
import SideSocial from "./SideSocial";
function WelcomePage() {
  return (
    <div className={`${styles.bg} "relative"`}>
      <Image src={shape1} alt="Welcome" className="absolute right-0 -z-0" />
      <Navbar />
      <Body />
      <SideSocial />
    </div>
  );
}

export default WelcomePage;
