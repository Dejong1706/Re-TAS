"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  id: string;
  pw: number;
};

const testUser: Props = {
  id: "test@test.com",
  pw: 1234,
};

export default function Userlogin() {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState();
  const router = useRouter();
  const handleIdChange = (event: any) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (Id == testUser.id && Password == testUser.pw) {
      router.push("/user");
    } else {
      alert("Login failed. Invalid ID or Password.");
    }
  };

  console.log(Id);
  console.log(Password);
  return (
    <div className="w-screen h-screen bg-[url('/img/login.jpg')] bg-no-repeat bg-center bg-cover inline-flex flex-col justify-center items-center">
      <div className="mb-24">
        <div className="font-[InkLipquid]">
          <p className="text-[#ffc800] text-[60px] text-center">TAS</p>
        </div>
        <div className="font-[InkLipquid] text-white flex justify-center justify-around w-[250px] bg-black mt-4">
          <p className="text-[35px] text-center text-[#ffc800]">user</p>
          <div className="border-2 border-solid border-[#ffc800]"></div>
          <p className="text-[35px] text-center">
            <Link href="/adminlogin">admin</Link>
          </p>
        </div>
      </div>
      <div className="text-white">
        <div>
          <p>ID</p>
          <input
            className="w-[300px] text-black"
            required
            onChange={handleIdChange}
          />
        </div>
        <div className="mt-4">
          <p>PassWord</p>
          <input
            className="w-[300px] text-black"
            required
            type="password"
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="mt-4 bg-black w-[300px] h-[35px]"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
