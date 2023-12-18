import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const data = [
  {
    src: "/img/Dejong.jpg",
    name: "Park Byeong Geun",
    position: "Front-End Engineer",
    instagram: "https://www.instagram.com/b_geuni/",
    github: "https://github.com/Dejong1706",
  },
  {
    src: "/img/choi.jpg",
    name: "Choi Hyung Soon",
    position: "Back-End Engineer",
    instagram: "https://www.instagram.com/sooo__nii/",
    github: "https://github.com/HS980924",
  },
  {
    src: "/img/sangyeop.jpg",
    name: "Lee Sang-yeop",
    position: "Front-End Engineer",
    instagram: "https://www.instagram.com/sa_ngyeop/",
    github: "https://github.com/sangyeop910",
  },
];

export default function Member() {
  return (
    <div className="w-full h-[750px] bg-white" id="Team">
      <div className="w-full h-[250px] flex items-center justify-center">
        <p className="text-[50px] font-['YClover-Bold']">Team Member</p>
      </div>
      <div className="flex justify-around items-center">
        {data.map((d, index) => (
          <div
            key={index}
            className="w-[400px] h-[400px] inline-flex flex-col justify-center items-center"
          >
            <div className="border-3 border-solid border-black">
              <Image
                src={d.src}
                alt="memberImage"
                width={300}
                height={300}
                className="rounded-[4rem] border-[10px] border-solid border-gray-200"
              />
            </div>
            <div className="font-bold text-[25px] my-4 font-['LeeSeoyun']">
              {d.name}
            </div>
            <div className="text-[20px] mb-4 font-['LeeSeoyun']">
              {d.position}
            </div>
            <div className="flex justify-between w-[100px]">
              <div className="text-4xl">
                <Link href={`${d.instagram}`}>
                  <FaInstagram className="text-pink-500" />
                </Link>
              </div>
              <div className="text-4xl">
                <Link href={`${d.github}`}>
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
