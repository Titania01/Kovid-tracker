import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "./services/fetchStat";
import { fetchStat, saveStat } from "./store/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts().then((res: any) => {
      dispatch(fetchStat(res));
      return res;
    });
  }, []);

  const s = useSelector((store) => store.stat);
  return (
    <div className="text-3xl font-bold underline">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
