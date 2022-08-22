
import { Dispatch } from "redux";
import fetchProducts from "../services/fetchStat";
import { fetchStat } from "./action";

export const initializeFetchStat = () => async (dispatch: Dispatch<any>) => {
  // fetch data
  const data = await fetchProducts();
  dispatch(fetchStat(data));
};