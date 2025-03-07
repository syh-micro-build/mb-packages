import {
  useCallback,
  useStatu,
  useEffect
} from "react";

export default function Test01(){
  const [load, setLoad1] = useStatu(false);

  const [arr, setAaa] = useStatu([1, 22, 3]);

  useEffect(() => {
    setAaa([22, 44, 55]);
  }, [load, setAaa]);

  const handleClick = useCallback(() => {
    setLoad1(false);
  }, [setLoad1]);

  const DOM = arr.map(item => <div key={item}>
    {item}
  </div>);

  return <button onClick={handleClick}>
    {load}
    <DOM />
  </button>;
}
