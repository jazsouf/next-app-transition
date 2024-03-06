import EnterAnimation from "@/components/EnterAnimation";
import React from "react";

function AboutPage() {
  return (
    <>
      <EnterAnimation />
      <section className="flex min-h-screen flex-col items-center justify-start p-24">
        <h1 className="text-4xl font-bold">About</h1>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mt-4">About Me</h2>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
