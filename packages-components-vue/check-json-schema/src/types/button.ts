import {
  EUiEleType,
  ETypeButton,
  EShapeButton,
  EThemeButton
} from "../enum";

interface IButton {
  type: EUiEleType.BUTTON;
  options: {
    label: string | Element | unknown;
    style?: string;
    class?: string;
    type?: ETypeButton;
    shape?: EShapeButton;
    theme?: EThemeButton;
  };
}

export default IButton;
