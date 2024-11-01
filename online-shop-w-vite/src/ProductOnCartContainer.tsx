type ProductOnCartContainerProps = {
    productName: string;
    productPrice: number;
    productAmount: number;
    increaseAmount: () => void;
    decreaseAmount: () => void;
    removeFromCart: () => void;
}

function ProductOnCartContainer({ productName, productPrice, productAmount, increaseAmount, decreaseAmount, removeFromCart }: ProductOnCartContainerProps) {
    return (
        <div className="cart_main_container">
            <div className="product_on_cart_container">
                <div className="product_on_cart_left_side">
                    <h2 className="product_name_on_cart">{productName}</h2>
                    <p className="product_price_on_cart">{productPrice.toFixed(2)}</p>
                </div>
                <div className="product_on_cart_right_side">
                    <div className="change_product_amount_container">
                        <div className="decrease_product_amount_btn btn" onClick={() => decreaseAmount()}> - </div>
                        <p className="product_amount_on_cart">{productAmount}</p>
                        <div className="increase_product_amount_btn btn" onClick={() => increaseAmount()}> + </div>
                    </div>
                    <div className="remove_product_from_cart_btn btn danger_msg" onClick={() => removeFromCart()}>Remove</div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ProductOnCartContainer;