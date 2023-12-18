"use client";
import Link from "next/link";
import React from "react";

const testUser = {
  id: "test@test.com",
  pw: 1234,
};

export default function Adminlogin() {
  return (
    <div className="w-screen h-screen bg-[url('/img/login.jpg')] bg-no-repeat bg-center bg-cover inline-flex flex-col justify-center items-center">
      <div className="mb-24">
        <div className="font-[InkLipquid]">
          <p className="text-[#ffc800] text-[60px] text-center">TAS</p>
        </div>
        <div className="font-[InkLipquid] text-white flex justify-center justify-around w-[250px] bg-black mt-4">
          <p className="text-[35px] text-center">
            <Link href="/userlogin">user</Link>
          </p>
          <div className="border-2 border-solid border-[#ffc800]"></div>
          <p className="text-[35px] text-center text-[#ffc800]">admin</p>
        </div>
      </div>
      <div className="text-white">
        <div>
          <p>ID</p>
          <input className="w-[300px] text-black" required />
        </div>
        <div className="mt-4">
          <p>PassWord</p>
          <input className="w-[300px] text-black" required type="password" />
        </div>
        <button className="mt-4 bg-black w-[300px] h-[35px]">Login</button>
      </div>
    </div>
  );
}
