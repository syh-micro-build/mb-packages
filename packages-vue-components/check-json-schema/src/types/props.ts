import {
  IButton
} from "./button";
import {
  ISelect
} from "./select";

export type TPropsComponents = IButton | ISelect;

interface IProps {
  items: TPropsComponents[];
  margin?: string;
  padding?: string;
  class?: string;
}

type TProps = IProps | TPropsComponents;

export default TProps;
