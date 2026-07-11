import Image from "next/image";

/** ByteLab logo — full color mark + wordmark, from /public/logo.svg. */
export default function Logo() {
  return <Image src="/logo.svg" alt="ByteLab" width={130} height={44} priority className="h-9 w-auto md:h-10" />;
}
