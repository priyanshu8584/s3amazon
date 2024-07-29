import React, { useState, useEffect } from "react";
import { Product } from "../components/MainData";
import { MainData } from "../components/MainData";
import { Search } from "../components/Search";

export const Page1: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await MainData();
      setProducts(data);
      setFilteredProducts(data); // Initially, show all products
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, products]);

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="m-0 p-0 grid sm:grid-cols-1 lg:grid-cols-3">
        {filteredProducts.slice(0, 10).map(product => (
          <div key={product.id} className="p-2">
            <img src={product.image} className="w-20 h-20 sm:ml-10 lg:ml-14" />
            <div className="lg:pt-5 sm:pr-10 lg:pr-14">
              <h1>{product.title}</h1>
              <h3>{product.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
