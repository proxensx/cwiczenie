export default function Basketitem(props) {
    const { orderedProduct } = props;
    const { name, price } = orderedProduct;
  
    return (
      <li className="basket-item">
        <div className="info">
          <span>1x</span>
          <span>{name}</span>
          <span>{price}</span>
        </div>
        <div className="actions">
          <button type="button">Remove</button>
        </div>
      </li>
    );
  }