/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 13/04/2024 - 18:09:05
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 13/04/2024
 * - Author          : DHANUSH
 * - Modification    :
 **/

import NotificationCard from "@/components/Cards/NotificationCard";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import * as Messages from "@/utilities/appUtilities/Messages";
import * as Constants from "@/utilities/appUtilities/Constants";



export default function SessionExpired() {


  const myFunc = () => {
    console.log('hello ');
    
  }





  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        
        <NotificationCard
          cardBgColor="slate-900"
          cardTextColor="slate-900"
          icon={faFaceSadTear}
          cardLabel={Messages.ResponseMessages.__RM_SESSION_EXP}
          iconSize="10x"
          btnBgColor='slate-900'
          btnTextColor='white'
          btnBgHover='slate-300'
          btnTextHover='slate-900'
          onClickFunction={() => myFunc()}
          buttonLabel={Constants.__BC_LOGIN}
        />
      </div>
    </div>
  );
}
