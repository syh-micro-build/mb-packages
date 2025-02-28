import {
  IButton
} from "./button";
import {
  ILink
} from "./link";
import {
  ISelect
} from "./select";

export type TPropsComponents = IButton | ISelect | ILink;

interface IProps {
  items: TPropsComponents[];
  margin?: string;
  padding?: string;
  class?: string;
}

type TProps = IProps | TPropsComponents;

export default TProps;
