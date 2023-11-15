import "./Product.scss"

const Product = (props) => {
    const { product, onProductSelect } = props;
    const { name, price, description, imageUrl } = product;
  
    const handleButtonClick = () => {
      onProductSelect(product);
    };
  
    return (
      <article className="product">
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
            <button onClick={handleButtonClick}>+</button>
          </footer>
        </div>
      </article>
    );
  };

export default Product