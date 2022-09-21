import { useSelector } from "react-redux";

function Total() {
    const cart = useSelector((state) => state.cart);

    const getTotal = () => {
        let totalQuantity = 0;
        let totalAmount = 0;

        cart.forEach(item => {
            totalQuantity += item.quantity;
            totalAmount += item.price * item.quantity;
        });
        return {totalAmount, totalQuantity};
    }

    return (
        <div className="total-amount">
            <h2>Your Order</h2>
            <div>
                <p className="total-p">
                    total ({getTotal().totalQuantity} products)
                    : ${getTotal().totalAmount}
                </p>
            </div>
        </div>
    )
}

export default Total;