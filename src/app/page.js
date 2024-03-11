import IntroPage from "@/components/intro/IntroPage";
import LinkedInFab from "@/components/linkedInFab/LinkedInFab";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col bg-white dark:bg-black">
      <LinkedInFab />
      <div className="w-full h-full bg-yellow-500">
        <IntroPage />
      </div>
    </main>
  );
}
