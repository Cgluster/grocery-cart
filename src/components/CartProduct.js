import { useDispatch } from "react-redux";
import { incrementProduct, decrementProduct, removeProduct } from "../app/cartSlice";

function CartProduct({id, image, name, price, quantity=0}) {
    const dispatch = useDispatch();

    return (
        <div className="cartproduct">
            <div className="cartproduct-info">
                <img src={image} alt="product" height="100px" width="100px" />
                <p className="cartproduct-name">{name}</p>
                <p className="cartproduct-price">${price}</p>
                <div className="cartproduct-incdec">
                    <button onClick={() => dispatch(decrementProduct(id))}>-</button>
                    <p className="cart-amount">{quantity}</p>
                    <button onClick={() => dispatch(incrementProduct(id))}>+</button>
                </div>
                <button
                className="remove-product"
                onClick={() => dispatch(removeProduct(id))}
                >Remove</button>
            </div>
        </div>
    )
}

export default CartProduct;