import "./Basket.scss";
import BasketItem from "./BasketItem";

const Basket = (props) => {
  const { orderedProducts } = props;

  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>(0 products)</span>
        </h5>
        <button>X</button>
      </header>
      <div>
        <ul>
          {orderedProducts.map((orderedProduct) => (
            <BasketItem orderedProduct={orderedProduct} />
          ))}
        </ul>
      </div>
      <footer>
        <button>Order and Pay (0.00)</button>
      </footer>
    </div>
  );
};

export default Basket;