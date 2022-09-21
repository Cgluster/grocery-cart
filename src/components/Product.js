import { useDispatch } from "react-redux";
import { addToCart } from "../app/cartSlice";

function Product({id, name, price}) {
    const dispatch = useDispatch();

    return (
        <div className="main-product">
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">${price}</p>
            </div>
            <button onClick={() => 
            dispatch(addToCart({
                id, name, price
            }))}>Add to Cart</button>
        </div>
    )
}

export default Product;