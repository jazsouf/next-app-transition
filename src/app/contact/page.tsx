import EnterAnimation from "@/components/EnterAnimation";
import React from "react";

function ContactPage() {
  return (
    <>
      <EnterAnimation />
      <section className="flex min-h-screen flex-col items-center justify-start p-24">
        <h1 className="text-4xl font-bold">Contact</h1>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mt-4">Contact Me</h2>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
