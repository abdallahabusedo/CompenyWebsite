import Image from "next/image";
import React from "react";
import face from "./../../assets/face.png";
import insta from "./../../assets/insta.png";
import tweat from "./../../assets/tweat.png";
import vinmo from "./../../assets/vinmo.png";
import path from "./../../assets/path1.png";
function SideSocial() {
  return (
    <div className="absolute top-[40%] left-[10%] flex flex-col gap-8 justify-center items-center">
      {[face, insta, tweat, vinmo].map((img, index) => {
        return <Image src={img} alt="s" key={index} width={15} />;
      })}
      <p className="text-white -rotate-90 text-center">SCROLL</p>
      <Image src={path} alt="path" width={15} />
    </div>
  );
}

export default SideSocial;
