import { useContext } from "react";
import UserActionsCtx from "../store/userActionsContext";
import CartContext from "../store/cartContext";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

export default function Cart() {
    const { action, closeModal, showCheckout } = useContext(UserActionsCtx);
    const { items, addItem, removeItem } = useContext(CartContext);

    const totalPrice = items.reduce((accum, item) => {
        return accum + (item.price * item.quantity);
    }, 0);

    const handleIncreaseItemQuantity = (item) => {
        addItem(item);
    };

    const handleDecreaseQuantity = (id) => {
        removeItem(id);
    };

    return (
        <Modal className="cart" open={action === "cart"}>
            <h2>Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        <p className="cart-item-actions">
                            <button
                                onClick={() => handleDecreaseQuantity(item.id)}
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() => handleIncreaseItemQuantity(item)}
                            >
                                +
                            </button>
                        </p>
                    </li>
                ))}
            </ul>
            <p className="cart-total">total: {totalPrice}</p>
            <div className="modal-actions">
                <Button textOnly onClick={closeModal}>
                    Close
                </Button>
                <Button onClick={showCheckout}>Checkout</Button>
            </div>
        </Modal>
    );
}
