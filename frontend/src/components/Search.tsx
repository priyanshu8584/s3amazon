import React, { useState, ChangeEvent } from "react";

interface SearchProps {
  onSearch: (searchText: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchData, setSearchData] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
    onSearch(e.target.value);
  };

  return (
  <div className="flex justify-center p-4 max-w-fit ">
    <input
      type="text"
      placeholder="Search"
      value={searchData}
      onChange={handleChange}
      className= ""
    />
  </div>
  );
};
