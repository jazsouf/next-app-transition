import EnterAnimation from "@/components/EnterAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <EnterAnimation />
      <main className="flex min-h-screen flex-col items-center justify-start p-24">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mt-4">
            Page Transitions in Nextjs App Router
          </h2>
        </div>
      </main>
    </>
  );
}
