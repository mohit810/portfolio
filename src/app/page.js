import Header from "@/components/header/Header";
import LinkedInFab from "@/components/linkedInFab/LinkedInFab";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-white dark:bg-black">
      <Header />
      <LinkedInFab />
    </main>
  );
}
