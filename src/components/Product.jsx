import { useContext } from "react";
import CartContext from "../store/cartContext";
import Button from "./UI/Button";
import { currencyFormatter } from "../util/currencyFormatter";

export default function Product({ product }) {
    const { addItem } = useContext(CartContext);
    
    const handleAddProductToCart = () => {
        addItem(product);
    }

    return (
        <li className="meal-item">
            <article>
                <img
                    src={`http://localhost:3000/${product.image}`}
                    alt="Product image"
                />
                <div>
                    <h3>{product.name}</h3>
                    <p className="meal-item-description">
                        {product.description}
                    </p>
                    <p className="meal-item-price">
                        {currencyFormatter.format(product.price)}
                    </p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddProductToCart}>
                        Add to cart
                    </Button>
                </p>
            </article>
        </li>
    );
}
