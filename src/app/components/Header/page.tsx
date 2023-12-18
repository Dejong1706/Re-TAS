import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="fixed bg-black w-full z-50">
      <div className="flex justify-between px-8 font-[InkLipquid]">
        <div className="mt-2">
          <h1 className="text-[#ffc800] text-[40px]">
            <Link href="#Main">TAS</Link>
          </h1>
        </div>
        <ul className="flex mt-4 text-white">
          <li className="mx-4 text-[25px]">
            <Link href="#Service">Services</Link>
          </li>
          <li className="mx-4 text-[25px]">
            <Link href="#Date">About</Link>
          </li>
          <li className="mx-4 text-[25px]">
            <Link href="#Team">Team</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
