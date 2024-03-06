"use client";

import { usePathname, useRouter } from "next/navigation";

function ContactButton() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button onClick={() => router.push(pathname + "?transitionTo=Contact")}>
      Contact
    </button>
  );
}

export default ContactButton;
