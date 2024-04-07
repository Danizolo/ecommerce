"use client";

/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 14/08/2023 - 18:53:33
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 14/08/2023
 * - Author          : DHANUSH
 * - Modification    :
 **/

import * as Utilities from "../../utilities/appUtilities/constants";
import { useState } from "react";
import LargeButton from "@/components/buttons/LargeButton";
import LargeIconButton from "@/components/buttons/LargeIconButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function signIn() {
  const [__phoneNumber, setPhoneNumber] = useState("");
  const [__otpElement, setOTPElement] = useState(false);

  const togglePhoneNuber = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-purple-500 h-screen flex justify-center items-center">
      {__otpElement ? (
        // OTP Element
        <div className="bg-white rounded-xl h-2/5 w-1/4">
          <div className="flex justify-center items-center p-2">
            <p className="text-purple-600">{Utilities.__Op_otpTitle}</p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center h-1/2 text-sm">
            <input
              type="number"
              className="border border-purple-500 rounded-xl px-8 py-2 w-3/4 outline-none"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              onClick={() => setOTPElement(!__otpElement)}
              className="px-8 bg-purple-600 text-white py-2 rounded-xl hover:bg-white hover:text-purple-600 border border-purple-500 w-3/4"
            >
              {Utilities.__Op_signInTitle}
            </button>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="flex justify-between gap-4">
              <div>
                <span></span>
              </div>
              <div>
                <LargeIconButton
                  buttonLabel="Icon Button"
                  bgColor="purple-600"
                  textColor="white"
                  bgHover="white"
                  textHover="purple-600"
                  icon={faGithub}
                  iconSize="2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Login Element
        <div className="bg-white rounded-xl h-1/3 w-1/4">
          <div className="flex justify-center items-center p-2">
            <p className="text-purple-600">{Utilities.__Op_signInTitle}</p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center h-1/2 text-sm">
            <input
              type="number"
              className="border border-purple-500 rounded-xl px-8 py-2 w-3/4 outline-none"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <LargeButton
              buttonLabel={Utilities.__Op_sendOTP}
              bgColor="purple-600"
              textColor="white"
              bgHover="white"
              textHover="purple-600"
              onClickFunction={() => setOTPElement(!__otpElement)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
