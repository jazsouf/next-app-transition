"use client";

import { usePathname, useRouter } from "next/navigation";

function HomeButton() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button onClick={() => router.push(pathname + "?transitionTo=Home")}>
      Home
    </button>
  );
}

export default HomeButton;
