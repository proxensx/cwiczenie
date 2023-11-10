import "./Product.scss"

const Product = (props) => {
    const { product } = props;
    const { name, price, description, imageUrl } = product;
    return(
        <article className="product">
            <div>
                <img src={imageUrl} alt={name} />
            </div>
            <div>
                {""}
                <header>
                    <h4>{name}</h4>
                    <p>{description}</p>
                </header>
                <section>
                    <strong>{price}</strong>
                    <button type="button"></button>
                </section>
            </div>
        </article>
    );
};

export default Product