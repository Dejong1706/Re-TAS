import React from "react";
import {
  BsFillStoplightsFill,
  BsPersonCircle,
  BsPersonVcardFill,
} from "react-icons/bs";

const data = [
  {
    img: <BsPersonCircle />,
    title: "Customer reservation",
    content:
      "Customers can make a reservation for a consultation at the time they want",
  },
  {
    img: <BsFillStoplightsFill />,
    title: "Traffic soultion",
    content: "Resolve calls to counselors with counseling reservation service",
  },
  {
    img: <BsPersonVcardFill />,
    title: "Identification",
    content:
      "You can solve problems with prank calls by entering your name and number",
  },
];

export default function Service() {
  return (
    <div className="w-full h-[700px] bg-white text-black" id="Service">
      <div className="w-full h-[250px] flex items-center justify-center">
        <p className="text-[50px] font-['YClover-Bold']">Services</p>
      </div>
      <div className="w-full flex justify-around items-center">
        {data.map((d, index) => (
          <div
            key={index}
            className="w-[400px] inline-flex flex-col justify-center items-center"
          >
            <div className="text-[#ffc800] text-[150px]">{d.img}</div>
            <div className="font-bold text-[30px] my-4 font-['GangwonEdu_OTFBoldA']">
              {d.title}
            </div>
            <div className="text-[20px] text-center font-['GangwonEdu_OTFBoldA']">
              {d.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
