"use client";

import { usePathname, useRouter } from "next/navigation";

function AboutButton() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button onClick={() => router.push(pathname + "?transitionTo=About")}>
      About
    </button>
  );
}

export default AboutButton;
