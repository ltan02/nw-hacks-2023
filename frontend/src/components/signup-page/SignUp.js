import React, { useState } from "react";
import eyeIcon from "./images/eyeIcon.png";
import keyIcon from "./images/keyIcon.png";
import userIcon from "./images/userIcon.png"
import { Link } from "react-router-dom"

const SignUp = () => {
   const [usermail, setUserMail] = useState(null);
   const [password, setPassword] = useState(null);

  return (
    <div>
      <div
        className="absolute w-[575px] h-[108px] left-[468px] top-[132px] 
        font-medium text-8xl leading-[120px] text-center capitalize text-[#1B1C57]"
      >
        Hello
      </div>
      <div
        className="absolute w-[612px] h-[515px] left-[450px] top-[274px] 
        bg-[#CCCCCC]/[0.2] rounded-[25px]"
      >

<div className="absolute w-[449px] h-[63px] bg-white left-[80px] top-[100px] collectInformationTextBox bg-[#CCCCCC]/[0.2] rounded-[25px]">
          <div className="flex flex-row items-start p-0">
            <img
              src={userIcon}
              alt="userIcon"
              className="absolute w-[17.42px] h-[18.26px] left-[26.73px] top-[22.31px]"
            />
            <div className="absolute w-[1000px] h-[18px] left-[71px] top-[22px] capitalize text-[#1B1C57]">
              <input
                type="text"
                placeholder="Email"
                className="focus:outline-none font-medium text-[15px] leading-[22px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[449px] h-[63px] bg-white left-[80px] top-[185px]
        bg-[#CCCCCC]/[0.2] rounded-[20px]">
        <div className="flex flex-row items-start p-0">
            <img
              src={keyIcon}
              alt="keyIcon"
              className="absolute w-[13px] h-[25px] left-[26.73px] top-[22.31px]"
            />
            <div className="absolute w-[329px] h-[18px] left-[71px] top-[22px] capitalize text-[#1B1C57]">
              <input
                type="text"
                placeholder="Password"
                className="focus:outline-none font-medium text-[15px] leading-[22px]"
              />
            </div>
            <img
              src={eyeIcon}
              alt="eyeIcon"
              className="absolute w-[20px] h-[13.64px] mt-[24.5px] ml-[410px]"
            />
          </div>
        </div>
        <Link
            className="absolute justify-center mt-[170px] p-0 py-[16px] w-[449px] h-[63px] left-[80px] top-[100px] bg-[#10B981] rounded-[25px] cursor-pointer"
            to="/collectInformation"
          >
            <div className="text-white justify-center w-[449px] h-[22px] font-semibold non-italic text-[20px] ml-[134px]">
              Create an Account
            </div>

          </Link>
      </div>
      <div className="absolute w-[449px] h-[63px] bg-white left-[80px] top-[100px] collectInformationTextBox bg-[#CCCCCC]/[0.2] rounded-[25px]">
          <div className="flex flex-row items-start p-0">
            <img
              src={userIcon}
              alt="userIcon"
              className="absolute w-[17.42px] h-[18.26px] left-[26.73px] top-[22.31px]"
            />
            <div className="absolute w-[1000px] h-[18px] left-[71px] top-[22px] capitalize text-[#1B1C57]">
              <input
                type="text"
                placeholder="Email"
                className="focus:outline-none font-medium text-[15px] leading-[22px]"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignUp;
