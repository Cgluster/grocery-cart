import Total from "../components/Total";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";

function Cart() {
    const cart = useSelector((state) => state.cart);

    return (
        <div className="cart">
            <div className="cart-left">
                <h3>Your Cart</h3>
                <div className="cart-display">
                {cart?.map((product) => (
                    <CartProduct
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    />
                ))}
                </div>
            </div>

            <div className="cart-right">
                <Total />
            </div>
        </div>
    )
}

export default Cart;