/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 13/04/2024 - 18:24:04
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 13/04/2024
 * - Author          : DHANUSH
 * - Modification    :
 **/
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NotificationCardProps {
  cardLabel: string;
  icon: IconProp;
  cardBgColor: string;
  cardTextColor: string;
  iconSize: SizeProp;
  onClickFunction: Function;
  buttonLabel: string;
  btnBgColor: string;
  btnTextColor: string;
  btnBgHover: string;
  btnTextHover: string;
}

export default function NotificationCard(props: NotificationCardProps) {
  return (
    <div>
      <div
        className={`w-full ${
          " bg-" + props.cardBgColor + " text-" + props.cardTextColor
        }`}
      >
        <FontAwesomeIcon icon={props.icon} size={props.iconSize} />
        {props.cardLabel}

        <button
          className={`flex justify-center items-center px-4 rounded-xl border p-2 ${
            " bg-" +
            props.btnBgColor +
            " text-" +
            props.btnTextColor +
            " hover:bg-" +
            props.btnBgHover +
            " hover:text-" +
            props.btnTextHover
          }`}
          onClick={() => props.onClickFunction()}
        >
          {props.buttonLabel}
        </button>
      </div>
    </div>
  );
}
