import { useContext } from "react";
import UserActionsCtx from "../store/userActionsContext";
import CartContext from "../store/cartContext";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import CartItem from "./CartItem";

export default function Cart() {
    const { action, closeModal, showCheckout } = useContext(UserActionsCtx);
    const { items, addItem, removeItem } = useContext(CartContext);

    const totalPrice = items.reduce((accum, item) => {
        return accum + item.price * item.quantity;
    }, 0);

    const handleIncreaseItemQuantity = (item) => {
        addItem(item);
    };

    const handleDecreaseQuantity = (id) => {
        removeItem(id);
    };

    return (
        <Modal className="cart" open={action === "cart"} onClose={action === 'cart' ? closeModal : null}>
            <h2>Cart</h2>
            {items.length > 0 && (
                <>
                    <ul>
                        {items.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onDecrease={handleDecreaseQuantity}
                                onIncrease={handleIncreaseItemQuantity}
                            />
                        ))}
                    </ul>
                    <p className="cart-total">total: {totalPrice}</p>
                </>
            )}

            {!items.length && <p>Cart is empty!</p>}
            <div className="modal-actions">
                <Button textOnly onClick={closeModal}>
                    Close
                </Button>
                {items.length > 0 && (
                    <Button onClick={showCheckout}>Checkout</Button>
                )}
            </div>
        </Modal>
    );
}
