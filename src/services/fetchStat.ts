import axios from "axios";
import { baseUrl } from "../utils.config";

function fetchProducts() {
  return axios
    .get(baseUrl)
    .then((res) => res.data.data)
    .catch((error) => {
      console.log(error);
    });
}

export default fetchProducts;