import IntroPage from "@/app/[...components]/intro/IntroPage";
import LinkedInFab from "@/app/[...components]/linkedInFab/LinkedInFab";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-full flex flex-col">
      <LinkedInFab />
      <div className="w-full h-full bg-yellow-500">
        <IntroPage />
      </div>
    </main>
  );
}
