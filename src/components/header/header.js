"use client"; // This is a client component 👈🏽
import "./header.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const first_text = "Mohit Yadav";
  const [text1, setText1] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(first_text.slice(0, text1.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text1]);

  return (
    <nav className="w-full h-20 p-2 shadow-lg bg-white">
      <div className="w-full h-full flex flex-row my-auto">
        <div className="w-14 h-14 my-auto mx-10 bg-yellow-300 rounded-full" />
        <h1 className="my-auto text-black text-2xl blinking-cursor">{text1}</h1>
      </div>
    </nav>
  );
};

export default Header;
