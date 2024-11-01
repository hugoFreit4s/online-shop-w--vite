type ProductContainerProps = {
    productID: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    addToCart: () => void;
}
function ProductContainer({ productName, productDescription, productPrice, addToCart }: ProductContainerProps) {
    return (
        <div className="product_container">
            <div className="product_img_container">
                <img src="product_img" alt="" className="product_img" />
            </div>
            <div className="product_name_desc_and_price_container">
                <h2 className="product_name">{productName}</h2>
                <p className="product_description">{productDescription}</p>
            </div>
            <h1 className="product_price">{productPrice}</h1>
            <div className="btns_container">
                <div className="buy_btn_container">
                    <button className="buy_btn">Buy now</button>
                </div>
                <div className="add_to_cart_btn_container">
                    <button className="add_to_cart_btn" onClick={() => { addToCart() }}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductContainer;