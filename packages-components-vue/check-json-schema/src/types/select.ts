import {
  EUiEleType
} from "../enum";

interface ISelect<T = object> {
  type: EUiEleType.SELECT;
  options: {
    data: Array<T>;
  };
}

export default ISelect;
