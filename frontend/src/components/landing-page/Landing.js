import React from "react";
import { Link } from "react-router-dom"
import veggieBowl from "../landing-page/images/veggie-taco-bowl-veggie-bowl-transparent-11563046631kukgnicj7g.png";
import Typewriter from "typewriter-effect";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Landing = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden flex items-center h-screen w-screen">
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <div className="w-[700px] h-[108px] pl-[300px]">
            <div className="non-italic font-bold text-[96px] leading-[120px] text-center capitalize text-[#1B1C57]">
              PlateTrace
            </div>
          </div>
          <div className="w-[800px] h-[28px] pl-[305px] items-center flex flex-row non-italic font-normal text-[24px] leading-[28px] text-center text-[#626687] opacity-[0.75]">
            <div className="mr-[5px]">find</div>
            <Typewriter
              options={{
                strings: [
                  "nutritious",
                  "low-calorie",
                  "healthy budget-friendly",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 3000,
              }}
            />
            <div className="ml-[2px]">meals for you</div>
          </div>
          <Link className="flex flex-row items-center px-[12px] py-[16px] gap-[4px] ml-[305px] w-[177px] h-[48px] bg-[#10B981] rounded-[32px] mt-[10px] cursor-pointer" to="/collectInformation">
            <div className="text-white w-[117px] h-[22px] font-semibold non-italic text-[20px] leading-[22px] ml-[5px]">
              Get Started
            </div>
            <ChevronRightIcon className="w-[30px] h-[30px] ml-[2px] font-semibold text-white" />
          </Link>
        </div>
        <div className="w-[900px] pt-[70px] h-screen mx-0 my-auto relative">
          <img
            src={veggieBowl}
            alt="veggie-bowl"
            className="absolute w-[800px] -right-[7%] items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
