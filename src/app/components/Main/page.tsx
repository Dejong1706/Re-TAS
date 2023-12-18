"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Main() {
  const router = useRouter();
  return (
    <div
      className="bg-[url('/img/header2.webp')] w-full h-[700px] bg-no-repeat bg-center bg-cover"
      id="Main"
    >
      <div className="text-white inline-flex flex-col justify-center items-center w-full h-full">
        <div>
          <p className="text-[40px] font-['YClover-Bold']">Welcome To Tas!</p>
        </div>
        <div>
          <p className="text-[60px] font-['YClover-Bold'] my-4">
            Nice To Meet You
          </p>
        </div>
        <button
          className="w-[200px] h-[60px] bg-[#ffc800] rounded-[1rem] mt-4 hover:bg-[#EEB90C]"
          onClick={() => router.push("/userlogin")}
        >
          <p className="font-bold text-xl">Reservation</p>
        </button>
      </div>
    </div>
  );
}
