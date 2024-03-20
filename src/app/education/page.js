import Image from "next/image";
import MUJ from "../../assets/muj.jpeg";
import VCC from "../../assets/vcc.jpg";
import DetailsCard from "../[...components]/Cards/DetailsCard";

export default function Education() {
  const institutes = [
    {
      name: "Manipal University Jaipur",
      image: MUJ,
      details: {
        CourseType: "B.Tech in IT",
        Duration: "Aug. 2016 – July. 2020",
        Address:
          "Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007, India",
        Cgpa: "7.16 / 10.0",
      },
      displayButton: false,
    },
    {
      name: "Vancouver Community College",
      image: VCC,
      details: {
        CourseType:
          "Certificate in Network Technology Administration and Security",
        Duration: "May 2023 – April 2024",
        Address: "250 W Pender St, Vancouver, BC V6B 1S9",
        Cgpa: "4.11 / 5.0",
      },
      displayButton: false,
    },
  ];
  return (
    <div className="w-screen h-full p-10 bg-cyan-800">
      <div className="flex flex-col items-start">
        <div className="text-white text-3xl w-full border-b-2 font-semibold">
          Education
        </div>
        <div className="py-2 w-full grid grid-cols-2 justify-items-center">
          {institutes.map((institute) => (
            <DetailsCard key={institute.name} item={institute} />
          ))}
        </div>
      </div>
    </div>
  );
}
