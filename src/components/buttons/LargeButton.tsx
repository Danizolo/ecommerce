/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 07/04/2024 - 11:49:09
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 07/04/2024
 * - Author          : DHANUSH
 * - Modification    :
 **/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface LargeButtonProps {
  buttonLabel: string;
  bgColor: string;
  textColor: string;
  bgHover: string;
  textHover: string;
  onClickFunction: Function;
}

export default function LargeButton(props: LargeButtonProps) {
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
        onClick={ () =>  props.onClickFunction()}
      >
        {props.buttonLabel}
      </button>
    </div>
  );
}
