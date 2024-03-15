"use client"; // This is a client component 👈🏽
import "./header.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { classNames } from "../helper/CommonFunctions";

const Header = () => {
  const first_text = "Mohit Yadav";
  const [text1, setText1] = useState("");
  const pathName = usePathname();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(first_text.slice(0, text1.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text1]);

  const paths = [
    { title: "About", url: "/" },
    { title: "Education", url: "/education" },
    { title: "Experience", url: "/experience" },
    { title: "Projects", url: "/projects" },
    { title: "Tech Stack", url: "/tech-stack" },
  ];

  const renderPaths = () => {
    paths.forEach((pathName) => (
      <Link href={`\${pathName.toLocaleLowerCase}`}>{pathName}</Link>
    ));
  };

  return (
    <nav className="w-full h-20 fixed p-2 shadow-lg bg-white">
      <div className="flex flex-row place-items-center ">
        <div className="basis-1/2 w-full h-full flex flex-row ">
          <div className="w-14 h-14 my-auto mx-10 bg-yellow-300 rounded-full" />
          <h1 className="my-auto text-2xl blinking-cursor">{text1}</h1>
        </div>
        <div className="w-full basis-1/2 grid grid-cols-5 justify-items-center">
          {paths.map((path) => (
            <Link
              href={path.url}
              key={path.title}
              className={classNames(
                "",
                pathName === path.url
                  ? "text-cyan-500 border-b-2 border-cyan-500"
                  : ""
              )}
            >
              {path.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
