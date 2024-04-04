import { useContext } from "react";
import UserActionsCtx from "../store/userActionsContext";
import CartContext from "../store/cartContext";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/currencyFormatter";

export default function Checkout() {
    const { action, showCart } = useContext(UserActionsCtx);
    const { items } = useContext(CartContext);

    const totalPrice = items.reduce((accum, item) => {
        return accum + item.price * item.quantity;
    }, 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());

        const response = fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                order: {
                    items,
                    customer: customerData,
                },
            }),
        });
    };

    return (
        <Modal open={action === "checkout"} onClose={showCart}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
                <Input label="Name" id="name" type="text" />
                <Input label="Email" id="email" type="email" />
                <Input label="Street" id="street" type="text" />
                <div className="control-row">
                    <Input label="Postal code" id="postal-code" type="text" />
                    <Input label="City" id="city" type="text" />
                </div>
                <div className="modal-actions">
                    <Button textOnly onClick={showCart}>
                        Back
                    </Button>
                    <Button>Submit</Button>
                </div>
            </form>
        </Modal>
    );
}
