import Image from "next/image";
import Zetwerk from "../../assets/zetwerk.svg";
import Bristlecone from "../../assets/bristlecone.svg";
import { classNames } from "../[...components]/helper/CommonFunctions";
import DetailsCard from "../[...components]/Cards/DetailsCard";

export default function Experience() {
  const experiences = [
    {
      name: "Zetwerk Manufacturing Businesses PVT LTD",
      Designation: "Software Developer Engineer",
      duration: "Dec 2021 - March 2023",
      address:
        "ORIENTAL TOWERS NO 461,4TH SECTOR, 17TH CROSS, HSR LAYOUT, BENGALURU, KARNATAKA 560102, INDIA",
      image: Zetwerk,
    },
    {
      name: "Bristlecone (Mahindra Group of Companies)",
      Designation: "Associate Consultant",
      duration: "July 2020 - Dec 2021",
      address: "250 W Pender St, Vancouver, BC V6B 1S9",
      image: Bristlecone,
    },
  ];
  return (
    <div className="w-screen h-full p-10 bg-cyan-800">
      <div className="flex flex-col items-start">
        <div className="text-white text-3xl w-full border-b-2 font-semibold">
          Experience
        </div>
        <div className="py-2 w-full grid grid-cols-2 justify-items-center">
          {experiences.map((experience) => (
            <DetailsCard key={experience.name} item={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
