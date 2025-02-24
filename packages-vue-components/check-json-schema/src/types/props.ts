import {
  IButton
} from "./button";
import {
  ISelect
} from "./select";

type TComponentsProps = IButton | ISelect;

interface IProps {
  items: TComponentsProps[];
  margin: string;
  padding: string;
}

type TProps = IProps | TComponentsProps;

export default TProps;
