import LinkedIn from "../../assets/linkedin.svg";
import Image from "next/image";

const LinkedInFab = () => {
  return (
    <div className="p-0 w-12 h-12 fixed right-4 bottom-4 bg-linkedin rounded-full shadow-md active:shadow-lg mouse transition ease-in duration-200 focus:outline-none">
      <a
        className="ml-auto my-auto"
        href="https://www.linkedin.com/in/mohit-yadav-181bb9136/"
        target="_blank"
      >
        <Image className="m-auto" src={LinkedIn} alt="Linkedin Fab" />
      </a>
    </div>
  );
};

export default LinkedInFab;
