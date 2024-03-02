import "./header.css";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="w-full h-20 p-2 shadow-lg bg-white">
      <div className="w-full h-full flex flex-row my-auto">
        <div className="w-14 h-14 my-auto mx-10 bg-yellow-300 rounded-full" />
        <h1 className="px-2 my-auto relative w-[max-content] font-mono text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
          Mohit Yadav
        </h1>
      </div>
    </nav>
  );
};

export default Header;
