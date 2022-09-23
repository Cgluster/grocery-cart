import { useDispatch } from "react-redux";
import { addToCart } from "../app/cartSlice";

function Product({id, image, name, price}) {
    const dispatch = useDispatch();

    return (
        <div className="main-product">
            <div className="product-info">
                <img src={image} alt="product" height="100px" width="100px" />
                <p className="product-name">{name}</p>
                <p className="product-price">${price}</p>
            </div>
            <button onClick={() => 
            dispatch(addToCart({
                id, image, name, price
            }))}>Add to Cart</button>
        </div>
    )
}

export default Product;