import "./Product.scss";
import { useState } from 'react';
import ProductModal from "./ProductModal";

const Product = (props) => {
  const { product, orderedProducts, onProductSelect } = props;
  const { name, price, description, imageUrl } = product;
  const [showModal, setShowModal] = useState(false);

  const isOrdered = orderedProducts.some(
    (orderedProduct) => orderedProduct.id === product.id
  );

  const orderCount = orderedProducts.filter(
    (orderedProduct) => orderedProduct.id === product.id
  ).length;

  const handleButtonClick = () => {
    onProductSelect(product);
    setShowModal(true);
  };

  return (
    <article className="product" data-ordered={isOrdered}>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <header>
          <h4>{name}</h4>
          <p>{description}</p>
        </header>
        <footer>
          <strong>{price}</strong>
          <button onClick={handleButtonClick}>
           {isOrdered ? orderCount : "+"} 
          </button>
        </footer>
        {showModal && <ProductModal product={product} hide={() => setShowModal(false)}/>}
      </div>
    </article>
  );
};

export default Product;
