import "./ProductModal.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductModal = (props) => {
    const { product, show, hide } = props;
    return (
        <div className="product-modal">
            <div className="product-modal-window">
                <img src={product.imageUrl} alt={product.name}></img>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
                <button onClick={hide}>Zamknij</button> 
            </div>
        </div>
    );
};


export default ProductModal