import axios from "axios"
export interface Product{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  sold:boolean,
  dateOfSale:string
}
export const MainData=async ()=>{
  const response=await axios.get<Product[]>("http://localhost:3000/")
  return response.data;

}