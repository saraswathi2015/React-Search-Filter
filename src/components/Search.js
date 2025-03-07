import debounce from "lodash.debounce";
import React, { useMemo, useRef, useState } from "react";
const Search = () => {
  const items = ["apple", "orange", "banana", "cherry", "mango"];
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const inputRef = useRef(null);
  const handleSearch = debounce((input) => {
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    console.log("filtered", filtered);
    setFilteredItems(filtered);
  }, 500);
  const handleChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };
  const memoziedFilteredItem = useMemo(() => filteredItems, [filteredItems]);
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="search items"
        value={query}
        onChange={handleChange}
      />
      <ul>
        {memoziedFilteredItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
