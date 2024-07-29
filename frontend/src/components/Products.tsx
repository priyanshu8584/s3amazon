
import { useState,useEffect } from "react"
import { Product } from "./MainData"
import { MainData } from "./MainData"

export const List=()=>{
const [products,setProducts]=useState<Product[]>([]);
useEffect(()=>{
  const renderData=async ()=>{
    const data=await MainData();
    setProducts(data);
  }
  renderData();
},[]);

return <div className="m-0 p-0 grid sm:grid-cols-1 lg:grid-cols-3">
  {products.slice(0,10).map(product=>(
    <div className=" ">
      <div key={product.id} className="p-2">
      <img src={product.image} className="w-20 h-20 sm:ml-10 lg:ml-14 "/>
      <div className="lg:pt-5 sm:pr-10 lg:pr-14">
           <h1>{product.title}</h1>
           
           <h3>{product.price}</h3>
      </div>
    </div>
    </div>
    
  ))}
</div>

}