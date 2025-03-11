import {
  Button,
  Link
} from "../components";

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
