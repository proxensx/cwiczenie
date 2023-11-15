import "./Basket.scss";
import BasketItem from "./BasketItem";

const Basket = (props) => {
  const { orderedProducts } = props;
  const totalCost = orderedProducts.reduce(
    (acc, orderedProduct) => acc + orderedProduct.price, 0
  );

  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>({orderedProducts.length} products)</span>
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
        <button>Order and Pay ({totalCost.toFixed(2)})</button>
      </footer>
    </div>
  );
};

export default Basket;