import { Link } from "react-router-dom";
import ProductCard from "../components/product-cart";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="asdfgh"
          name="Mac"
          photo="https://media.cnn.com/api/v1/images/stellar/prod/211025072623-macbook-pro-14-display-5.jpg"
          price={12345}
          stock={2}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
