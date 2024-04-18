"use client"; // This is a client component 👈🏽
import Image from "next/image";
import Zetwerk from "../../assets/zetwerk.svg";
import Bristlecone from "../../assets/bristlecone.svg";
import { classNames } from "../[...components]/helper/CommonFunctions";
import { ChevronLeft, ChevronRight } from "react-feather";
import DetailsCard from "../[...components]/Cards/DetailsCard";
import ExpCard from "../[...components]/Cards/ExpCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useRef } from "react";

export default function Experience() {
  const carouselRef = useRef(null);
  const experiences = [
    {
      name: "Zetwerk Manufacturing Businesses PVT LTD",
      image: Zetwerk,
      details: {
        Designation: "Software Developer Engineer",
        Duration: "Dec 2021 - March 2023",
        Address:
          "ORIENTAL TOWERS NO 461,4TH SECTOR, 17TH CROSS, HSR LAYOUT, BENGALURU, KARNATAKA 560102, INDIA",
      },
      displayButton: true,
      button: "Projects",
    },
    {
      name: "Bristlecone (Mahindra Group of Companies)",
      image: Bristlecone,
      details: {
        Designation: "Associate Consultant",
        Duration: "July 2020 - Dec 2021",
        Address: "250 W Pender St, Vancouver, BC V6B 1S9",
      },
      displayButton: true,
      button: "Projects",
    },
  ];
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <ExpCard
      item={experiences[0]}
      onDragStart={handleDragStart}
      role="presentation"
      key={0}
    />,
    <ExpCard
      item={experiences[1]}
      onDragStart={handleDragStart}
      role="presentation"
      key={1}
    />,
  ];
  return (
    <div className="w-screen h-max py-10">
      <div className="h-full flex flex-col items-start">
        <div className="text-white ml-4 text-3xl w-full border-b-2 font-semibold">
          Experience
        </div>
        <div className="py-2 px-10 mx-auto h-full w-1/2 grid grid-cols-1 justify-items-center">
          <AliceCarousel
            keyboardNavigation={true}
            autoHeight={true}
            disableButtonsControls
            controlsStrategy={"default"}
            mouseTracking
            items={items}
            ref={carouselRef}
          />
        </div>
        <div
          className="b-refs-buttons absolute px-48 top-0 h-full w-full justify-between items-center flex text-white text-3xl"
          key="btns"
        >
          <button onClick={(e) => carouselRef?.current?.slidePrev(e)}>
            <ChevronLeft />
          </button>
          <button onClick={(e) => carouselRef?.current?.slideNext(e)}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
