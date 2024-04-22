/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 07/04/2024 - 22:32:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/04/2024
    * - Author          : DHANUSH
    * - Modification    : 
**/

export const generateOtp = (length) => {
  try {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  } catch (error) {
    console.log(error);
  }
};

