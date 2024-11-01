type ProductOnCartContainerProps = {
    productName: string;
    productPrice: number;
    productAmount: number
    increaseAmount: () => void;
    decreaseAmount: () => void;
    removeFromCart: () => void;
}

function ProductOnCartContainer({ productName, productPrice, productAmount }: ProductOnCartContainerProps) {
    return (
        <div className="product_on_cart_container">
            <div className="product_on_cart_left_side">
                <h2 className="product_name_on_cart">{productName}</h2>
                <p className="product_price_on_cart">{productPrice}</p>
            </div>
            <div className="product_on_cart_right_side">
                <div className="change_product_amount_container">
                    <div className="decrease_product_amount_btn btn"> - </div>
                    <p className="product_amount_on_cart">{productAmount}</p>
                    <div className="increase_product_amount_btn btn"> + </div>
                </div>
                <div className="remove_product_from_cart_btn btn">Remove</div>
            </div>
        </div>
    )
}

export default ProductOnCartContainer;