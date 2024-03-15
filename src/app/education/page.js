import Image from "next/image";
import MUJ from "../../assets/muj.jpeg";
import VCC from "../../assets/vcc.jpg";

export default function Education() {
  const institutes = [
    {
      name: "Manipal University Jaipur",
      courseType: "B.Tech in IT",
      duration: "Aug. 2016 – July. 2020",
      address:
        "Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007, India",
      image: MUJ,
      cgpa: "7.16 / 10.0",
    },
    {
      name: "Vancouver Community College",
      courseType:
        "Certificate in Network Technology Administration and Security",
      duration: "May 2023 – April 2024",
      address: "250 W Pender St, Vancouver, BC V6B 1S9",
      image: VCC,
      cgpa: "4.11 / 5.0",
    },
  ];
  return (
    <div className="w-screen h-full p-10 bg-cyan-800">
      <div className="flex flex-col items-start">
        <div className="text-white text-xl w-full border-b-2 font-semibold">
          Education
        </div>
        <div className="py-2 w-full grid grid-cols-2 justify-items-center">
          {institutes.map((institute) => (
            <div
              className="relative flex flex-col my-6 text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-96"
              key={institute.courseType}
            >
              <div className="p-6">
                <Image
                  className="rounded-xl"
                  width={500}
                  height={500}
                  src={institute.image}
                  alt={institute.name}
                />
                <h1 className="block my-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {institute.name}
                </h1>
                <h5 className="block mb-2 font-sans antialiased leading-snug tracking-normal text-blue-gray-900">
                  <span className="text-lg font-medium">Degree: </span>
                  <span>{institute.courseType}</span>
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-justify">
                  <span className="text-lg font-medium">Duration: </span>
                  <span>{institute.duration}</span>
                  <br />
                  <span className="text-lg font-medium">Address: </span>
                  <span>{institute.address}</span>
                  <br />
                  <span className="text-lg font-medium">CGPA: </span>
                  <span>{institute.cgpa}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
