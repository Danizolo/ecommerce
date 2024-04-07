/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 07/04/2024 - 12:31:31
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 07/04/2024
 * - Author          : DHANUSH
 * - Modification    :
 **/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {SizeProp} from "@fortawesome/fontawesome-svg-core"

interface LargeIconButtonProps {
  buttonLabel: string;
  icon: IconProp;
  bgColor: string;
  textColor: string;
  bgHover: string;
  textHover: string;
  iconSize: SizeProp;
}

export default function LargeIconButton(props: LargeIconButtonProps) {
  return (
    <div>
      <button
        type="submit"
        className={`flex justify-center items-center px-8 w-56 rounded-xl border p-2 ${
          " bg-" +
          props.bgColor +
          " text-" +
          props.textColor +
          " hover:bg-" +
          props.bgHover +
          " hover:text-" +
          props.textHover
        }`}
      >
        <FontAwesomeIcon icon={props.icon} size={props.iconSize} />

        <span className="w-full">{props.buttonLabel}</span>
      </button>
    </div>
  );
}
