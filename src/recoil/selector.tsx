import { selector } from "recoil";
import axios from "axios";

const url = "https://dummyjson.com/products/";

interface IData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

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
