import React from "react";

const data = [
  {
    date: "2022 March",
    title: "Kick-Off Meeting",
    content:
      "Idea planning meetings and technical stack identification, scheduling, and git flow configuration",
    number: "3",
  },
  {
    date: "22022 April",
    title: "Define Overall-Function",
    content:
      "Organize and define detailed functions of each part, define overall functions, document sequence diagrams, and E-R diagrams",
    number: "4",
  },
  {
    date: "2022 May",
    title: "Feature Development",
    content:
      "Build a server for reservation consultation, design each page, and implementation of page-by-page functionality",
    number: "5",
  },
  {
    date: "2022 Jun",
    title: "Integration Test, Debugging",
    content:
      "Conduct a complete integrated test between the front and backend, perform a debugging process, catch errors, and release and distribute the corresponding version",
    number: "6",
  },
];

export default function Date() {
  return (
    <div className="w-full h-[1100px] bg-gray-200" id="Date">
      <div className="w-full h-[250px] flex items-center justify-center">
        <p className="text-[50px] font-['YClover-Bold']">About</p>
      </div>
      <div className="flex justify-center">
        <div className="flex-col">
          {data.map((d, index) => (
            <div key={index} className="flex mb-12 h-[150px]">
              {index % 2 !== 1 && (
                <div className="absolute left-0 ml-12 w-[500px]">
                  <div className="font-bold text-[35px] font-['GangwonEdu_OTFBoldA']">
                    {d.date}
                  </div>
                  <div className="font-bold text-[30px] font-['GangwonEdu_OTFBoldA']">
                    {d.title}
                  </div>
                  <div className="font-normal text-[20px] mt-4">
                    {d.content}
                  </div>
                </div>
              )}
              <div className="rounded-full w-32 h-32 bg-black flex items-center justify-center">
                <p className="font-bold text-[70px] text-[#ffc800]">
                  {d.number}
                </p>
              </div>

              {index % 2 === 1 && (
                <div className="absolute right-0 mr-12 w-[500px]">
                  <div className="font-bold text-[35px] text-right font-['GangwonEdu_OTFBoldA']">
                    {d.date}
                  </div>
                  <div className="font-bold text-[30px] text-right font-['GangwonEdu_OTFBoldA']">
                    {d.title}
                  </div>
                  <div className="font-normal text-[20px] text-right mt-4 font-['GangwonEdu_OTFBoldA']">
                    {d.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
