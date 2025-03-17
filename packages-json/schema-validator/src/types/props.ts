import {
  Button
} from "../components";

type TPropsComponents = Button;

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
