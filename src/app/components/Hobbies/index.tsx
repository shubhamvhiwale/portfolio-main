"use client";
import React from "react";
import Slider from "../Slider";
// import Tracking1 from "../../assets/videos/tracking_1.mp4";

const Hobbies = () => {
  const videos = [
    "/videos/tracking-opt.gif",
    "/videos/sport-opt.gif",
    "/videos/dance-opt.gif",
    "",
    "",
    "",
  ];
  const itemsList = [
    { title: "Tracking" },
    { title: "Sport" },
    { title: "Dancing" },
    { title: "Singing" },
    { title: "Cooking" },
    { title: "Coding" },
  ];
  return (
    <div className="w-full h-[100vh] relative">
      <Slider videos={videos} itemsList={itemsList} />
    </div>
  );
};

export default Hobbies;
