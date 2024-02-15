import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-blue-700 rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className=" text-blue-700 ">online courses</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          At Zenith International College (ZIC), we pride ourselves on offering
          the best online courses designed to meet the dynamic needs of today's 
          learners. Our online programs are meticulously crafted by industry experts 
          and experienced educators to deliver comprehensive and engaging content
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
