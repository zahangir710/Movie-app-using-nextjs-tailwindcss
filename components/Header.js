import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <header className="">
      <div>
        <HeaderItem title="Home" Icon="" />
      </div>
      <Image src="https://links.papareact.com/ua6" width={200} height={100} />
    </header>
  );
}
