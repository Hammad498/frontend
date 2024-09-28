import { useEffect, useState } from "react"
import ProductCard from "../components/product-cart";



const Search = () => {

  const [search,setSearch]=useState('');
  const[sort,setSort]=useState('');
  const [maxPrice,setMaxPrice]=useState(10000);
  const[category,setCategory]=useState('');
  const[page,setPage]=useState(1);



  const addToCartHandler = () => {};

  const isPrevPage=page > 1;
  const isNextPage=page < 4;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filter</h2>
        <div>
          <h4>sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price(Low to High)</option>
            <option value="dsc">Price(High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={10000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="camera">Camera</option>
            <option value="game">Game</option>
            <option value="laptop">Laptop</option>
          </select>
        </div>
      </aside>

      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard
            productId="asdfgh"
            name="Mac"
            photo="https://media.cnn.com/api/v1/images/stellar/prod/211025072623-macbook-pro-14-display-5.jpg"
            price={12345}
            stock={2}
            handler={addToCartHandler}
          />
        </div>

        <article>
          <button
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}
          >
            {" "}
            Prev
          </button>
          <span>
            {page} of {4}
          </span>
          <button
            disabled={!isNextPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            {" "}
            next
          </button>
        </article>
      </main>
    </div>
  );
}

export default Search
