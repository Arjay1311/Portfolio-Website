import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer width-100 border z-10 border-t-[#33353F] border-b-black border-l-transparent border-r-transparent text-white">
      <div className="w-full p-6 flex justify-between">
        <Image src="/images/logo.png" alt="Logo" height={50} width={50} />
        <Link href={"/"} className="mt-4 text-purple-400 hover:underline">
          Back to Top
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
