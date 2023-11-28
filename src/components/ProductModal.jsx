import "./ProductModal.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowBack } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const ProductModal = (props) => {
    const { product, hide } = props;
    return (
        <div className="product-modal">
            <div className="product-modal-window">
                <img src={product.imageUrl} alt={product.name}></img>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
                <button className="back-button" onClick={hide}><MdArrowBack /></button> 
                <button className="favorite-button"><MdFavorite /></button>
                <button className="order-button">DODAJ DO KOSZYKA {product.price}</button>
            </div>
        </div>
    );
};


export default ProductModal