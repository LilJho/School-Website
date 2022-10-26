import Image from "next/image";
import Logo from "public/logo.svg";

export default function Home() {
  return (
    <>
      <Image src={Logo} />
    </>
  );
}
