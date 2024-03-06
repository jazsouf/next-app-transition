"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

function ExitAnimation() {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const transitionTo = searchParams.get("transitionTo");

  if (typeof transitionTo !== "string") return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{
        opacity: transitionTo !== null ? 1 : 0,
      }}
      className="h-screen w-screen z-2 absolute inset-0 bg-black"
      onAnimationComplete={() => {
        if (transitionTo === null) return;
        if (transitionTo === "Home") return router.push("/");
        router.push("/" + transitionTo?.toLocaleLowerCase());
      }}
    >
      <div className="grid place-items-center h-full text-white">
        {transitionTo.toUpperCase()}
      </div>
    </motion.div>
  );
}

export default ExitAnimation;
