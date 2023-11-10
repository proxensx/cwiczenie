const Basket = (props) => {
    const { orderedProducts } = props;
    return <div className="basket">
        {orderedProducts.map((product) => (
            <span>{product.name}</span>
        ))}
    </div>
}

export default Basket;