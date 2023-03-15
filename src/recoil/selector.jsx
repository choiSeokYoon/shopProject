import { selector } from "recoil";
import axios from "axios";

const url = "https://dummyjson.com/products/"

export const fatchPostData = selector({
    key: "fatchPostData",
    get: async ({get}) => {
        try{
            const response  = await axios.get(url)
            return response.data.products
        }catch(err){
            console.log(err)
        }

    }
})