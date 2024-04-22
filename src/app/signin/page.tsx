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

import * as Utilities from "../../utilities/appUtilities/Constants";
import { useState } from "react";
import LargeButton from "@/components/buttons/LargeButton";
import LargeIconButton from "@/components/buttons/LargeIconButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { generateOtp } from "@/utilities/helpers/HelperFunctions";

export default function signIn() {
  const [__phoneNumber, setPhoneNumber] = useState("");
  const [__otpElement, setOTPElement] = useState(false);

  const sendOtp = async () => {
    try {
      const otp = generateOtp(6);
      const receiverMobileNumber = "+918825862535";
      const message = "This is your first Message";
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
            <p className="text-purple-600">{Utilities.__BC_ENTEROTP}</p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center h-1/2 text-sm">
            <input
              type="number"
              className="border border-purple-500 rounded-xl px-8 py-2 w-3/4 outline-none"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <LargeIconButton
              buttonLabel={Utilities.__BC_SENDOTP}
              bgColor="purple-600"
              textColor="white"
              bgHover="white"
              textHover="purple-600"
              icon={faGithub}
              iconSize="2xl"
            />
          </div>
        </div>
      ) : (
        // Login Element
        <div className="bg-white rounded-xl h-1/3 w-1/4">
          <div className="flex justify-center items-center p-2">
            <p className="text-purple-600">{Utilities.__TC_SIGNIN}</p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center h-1/2 text-sm">
            <input
              type="number"
              className="border border-purple-500 rounded-xl px-8 py-2 w-3/4 outline-none"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <LargeButton
              buttonLabel={Utilities.__BC_SENDOTP}
              bgColor="purple-600"
              textColor="white"
              bgHover="white"
              textHover="purple-600"
              onClickFunction={() => {
                setOTPElement(!__otpElement);
                sendOtp();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
