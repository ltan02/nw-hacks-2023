import React, { useState } from "react";
import scaleIcon from "./images/scaleIcon.png";
import moneyIcon from "./images/moneyIcon.png"
import armIcon from "./images/armIcon.png"
import downIcon from "./images/downIcon.png"
import relaxedIcon from "./images/relaxedIcon.png"
import peanutsIcon from "./images/peanutsIcon.png"
import cheeseIcon from "./images/cheeseIcon.png"
import shellfishIcon from "./images/shellfishIcon.png"

const CollectInformation = ({username}) => {
   const [fitnessGoal, setFitnessGoal] = useState(null);
   const [peanutsAllergy, setPeanutsAllergy] = useState(false);
   const [dairyAllergy, setDairyAllergy] = useState(false);
   const [shellfishAllergy, setShellfishAllergy] = useState(false);
   const [weight, setWeight] = useState(0);
   const [dailyMealBudget, setDailyMealBudget] = useState(0);

  return (
    <div className="absolute w-[1404px]">
      <div>{username}</div>
      <div className="absolute w-[683px] h-[330px] left-[54px] top-[30px] bg-[#cccccc]/[0.2] rounded-[30px]">
        <div className="absolute w-[380px] h-[38px] left-[152px] top-[120px] font-medium text-[30px] leading-[38px] text-[#1B1C57]">
          How much do you weigh?
        </div>
        <div className="absolute w-[359px] h-[66px] left-[155px] top-[170px] collectInformationTextBox">
          <div className="flex flex-row items-start p-0">
            <img
              src={scaleIcon}
              alt="scaleIcon"
              className="absolute w-[40px] h-[40px] left-[16px] top-[13px]"
            />
            <div className="absolute w-[329px] h-[18px] left-[71px] top-[22px]">
              <input
                type="text"
                placeholder="Your weight here"
                className="focus:outline-none font-medium text-[18px] leading-[22px] bg-transparent"
                onChange={(event) => {
                  setWeight(event.target.value);
                }}
              />
            </div>
            <select className="absolute w-[63px] h-[30px] left-[275px] top-[18px] bg-black/[0.12] rounded-[32px] hover:cursor-pointer px-[5px]">
              <option value="kilograms">kgs</option>
              <option value="pounds">lbs</option>
            </select>
          </div>
        </div>
      </div>
      <div className="absolute w-[683px] h-[330px] left-[775px] top-[30px] bg-[#cccccc]/[0.2] rounded-[30px]">
        <div className="absolute w-[500px] h-[38px] left-[95px] top-[120px] font-medium text-[30px] leading-[38px] text-[#1B1C57]">
          What is your daily meal budget?
        </div>
        <div className="absolute w-[359px] h-[66px] left-[155px] top-[170px] collectInformationTextBox">
          <div className="flex flex-row items-start p-0">
            <img
              src={moneyIcon}
              alt="moneyIcon"
              className="absolute w-[40px] h-[40px] left-[16px] top-[13px]"
            />
            <div className="absolute w-[329px] h-[18px] left-[71px] top-[22px]">
              <input
                type="text"
                placeholder="Your budget here"
                className="focus:outline-none font-medium text-[18px] leading-[22px] bg-transparent"
                onChange={(event) => {
                  setDailyMealBudget(event.target.value);
                }}
              />
            </div>
            <div className="absolute w-[63px] h-[30px] left-[275px] top-[18px] bg-black/[0.12] rounded-[32px] hover:cursor-default px-[5px]">
              <div className="absolute w-[74px] h-[20px] left-[14px] top-[2.5px]">
                CAD
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[683px] h-[330px] left-[54px] top-[390px] bg-[#cccccc]/[0.2] rounded-[30px]">
        <div className="absolute w-[424px] h-[38px] left-[152px] top-[50px] font-medium text-[30px] leading-[38px] text-[#1B1C57]">
          What is your fitness goal?
        </div>
        <div>
          <div>
            <div
              onClick={() => setFitnessGoal("gainMuscle")}
              className={`absolute w-[124px] h-[127px] left-[79px] top-[130px] ${
                fitnessGoal === "gainMuscle"
                  ? "bg-black/[0.25] border-[#10B981] border-2"
                  : "bg-black/[0.1] border-none"
              } rounded-[50%] hover:cursor-pointer`}
            >
              <img
                src={armIcon}
                alt="armIcon"
                className="absolute w-[80px] h-[80px] left-[20px] top-[20px]"
              />
            </div>
            <div
              className={`absolute w-[106px] h-[28px] left-[87px] top-[270px] font-normal text-[16px] leading-[28px] text-center text-black ${
                fitnessGoal === "gainMuscle" ? "opacity-1" : "opacity-[0.75]"
              }`}
            >
              Gain muscle
            </div>
          </div>
          <div>
            <div
              onClick={() => setFitnessGoal("loseFat")}
              className={`absolute w-[124px] h-[127px] left-[280px] top-[130px] ${
                fitnessGoal === "loseFat"
                  ? "bg-black/[0.25] border-[#10B981] border-4"
                  : "bg-black/[0.1] border-none"
              } rounded-[50%] hover:cursor-pointer`}
            >
              <img
                src={downIcon}
                alt="downIcon"
                className="absolute w-[80px] h-[80px] left-[23px] top-[25px]"
              />
            </div>
            <div
              className={`absolute w-[106px] h-[28px] left-[287px] top-[270px] font-normal text-[16px] leading-[28px] text-center text-black ${
                fitnessGoal === "loseFat" ? "opacity-1" : "opacity-[0.75]"
              }`}
            >
              Lose fat
            </div>
          </div>
          <div>
            <div
              onClick={() => setFitnessGoal("beHealthy")}
              className={`absolute w-[124px] h-[127px] left-[480px] top-[130px] ${
                fitnessGoal === "beHealthy"
                  ? "bg-black/[0.25] border-[#10B981] border-4"
                  : "bg-black/[0.1] border-none"
              } rounded-[50%] hover:cursor-pointer`}
            >
              <img
                src={relaxedIcon}
                alt="relaxedIcon"
                className="absolute w-[80px] h-[80px] left-[22px] top-[24px]"
              />
            </div>
            <div
              className={`absolute w-[106px] h-[28px] left-[489px] top-[270px] font-normal text-[16px] leading-[28px] text-center text-black ${
                fitnessGoal === "beHealthy" ? "opacity-1" : "opacity-[0.75]"
              }`}
            >
              Be healthy
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[683px] h-[330px] left-[775px] top-[390px] bg-[#cccccc]/[0.2] rounded-[30px]">
        <div className="absolute w-[556px] h-[38px] left-[60px] top-[50px] font-medium text-[30px] leading-[38px] text-[#1B1C57]">
          Do you have any dietary restrictions?
        </div>
        <div>
          <div>
            <div
              onClick={() => setPeanutsAllergy(!peanutsAllergy)}
              className={`absolute w-[124px] h-[127px] left-[79px] top-[130px] ${
                peanutsAllergy
                  ? "bg-black/[0.25] border-[#10B981] border-4"
                  : "bg-black/[0.1] border-none"
              } rounded-[50%] hover:cursor-pointer`}
            >
              <img
                src={peanutsIcon}
                alt="peanutsIcon"
                className="absolute w-[80px] h-[80px] left-[20px] top-[20px]"
              />
            </div>
            <div
              className={`absolute w-[106px] h-[28px] left-[87px] top-[270px] font-normal text-[16px] leading-[28px] text-center text-black ${
                peanutsAllergy ? "opacity-1" : "opacity-[0.75]"
              }`}
            >
              Peanuts
            </div>
          </div>
          <div>
            <div
              onClick={() => setDairyAllergy(!dairyAllergy)}
              className={`absolute w-[124px] h-[127px] left-[280px] top-[130px] ${
                dairyAllergy
                  ? "bg-black/[0.25] border-[#10B981] border-4"
                  : "bg-black/[0.1] border-none"
              } rounded-[50%] hover:cursor-pointer`}
            >
              <img
                src={cheeseIcon}
                alt="cheeseIcon"
                className="absolute w-[80px] h-[80px] left-[23px] top-[25px]"
              />
            </div>
            <div
              className={`absolute w-[106px] h-[28px] left-[287px] top-[270px] font-normal text-[16px] leading-[28px] text-center text-black ${
                dairyAllergy ? "opacity-1" : "opacity-[0.75]"
              }`}
            >
              Dairy
            </div>
          </div>
          <div>
            <div
              onClick={() => setShellfishAllergy(!shellfishAllergy)}
              className={`absolute w-[124px] h-[127px] left-[480px] top-[130px] ${
                shellfishAllergy
                  ? "bg-black/[0.25] border-[#10B981] border-4"
                  : "bg-black/[0.1] border-none"
              } rounded-[50%] hover:cursor-pointer`}
            >
              <img
                src={shellfishIcon}
                alt="shellfishIcon"
                className="absolute w-[80px] h-[80px] left-[22px] top-[24px]"
              />
            </div>
            <div
              className={`absolute w-[106px] h-[28px] left-[489px] top-[270px] font-normal text-[16px] leading-[28px] text-center text-black ${
                shellfishAllergy ? "opacity-1" : "opacity-[0.75]"
              }`}
            >
              Shellfish
            </div>
          </div>
        </div>
      </div>
      {/* need another button for submitting */}
    </div>
  );
};

export default CollectInformation;
