import {
  Button
} from "../button";
import {
  Link
} from "../link";

type TPropsComponents = Button | Link;

interface IProps {
  items: TPropsComponents[];
  margin?: string;
  padding?: string;
  class?: string;
}

type TProps = IProps | TPropsComponents;

export {
  TProps,
  TPropsComponents
};
