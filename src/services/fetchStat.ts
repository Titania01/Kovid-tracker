import { useDispatch } from "react-redux";
import { fetchStat } from "../store/action";
import axios from 'axios';

function fetchProducts() {
    return axios.get('https://covidnigeria.herokuapp.com/api')
        .then(res => (res.data.data))
        .catch(error => {
            console.log(error)
        })
    }


export default fetchProducts;