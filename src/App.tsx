import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "./services/fetchStat";
import { fetchStat } from "./store/action";

import { Dispatch } from "redux";
import { initializeFetchStat } from "./store/actionAsync";

function App() {
  const dispatch = useDispatch<Dispatch<any>>();
  const stat = useSelector((state: any) => state.stat);

  console.log(stat);

  useEffect(() => {
    dispatch(initializeFetchStat());
  }, []);

  return (
    <div className="text-3xl font-bold underline">
      <h1>Hello World!</h1>
      <h1>{JSON.stringify(stat, null, 2)}</h1>
    </div>
  );
}

export default App;
