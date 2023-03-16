import { selector } from "recoil";
import axios from "axios";
import { IData } from "../type/data.type";

const url = "https://dummyjson.com/products/";



export const fetchPostData = selector<IData[]>({
  key: "fetchPostData",
  get: async ({get}) => {
    try {
      const response = await axios.get(url);
      return response.data.products;
    } catch (err) {
      console.log(err);
    }
  }
});
