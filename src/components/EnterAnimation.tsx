"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function EnterAnimation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 1, zIndex: 10 }}
      transition={{ duration: 0.5 }}
      animate={{
        opacity: 0,
        zIndex: -10,
      }}
      className="h-screen w-screen z-2 absolute inset-0 bg-black"
    >
      <div className="grid place-items-center h-full text-white">
        {pathname === "/" ? "HOME" : pathname.slice(1).toUpperCase()}
      </div>
    </motion.div>
  );
}

export default EnterAnimation;
