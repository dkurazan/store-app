import { useContext } from "react";
import UserActionsCtx from "../store/userActionsContext";
import CartContext from "../store/cartContext";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/currencyFormatter";
import useHttp from "../hooks/useHttp";

const requestConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};

export default function Checkout() {
    const { action, showCart, closeModal } =
        useContext(UserActionsCtx);
    const { items, clearCart } = useContext(CartContext);

    const {
        data,
        isLoading: isSending,
        error,
        sendRequest,
        clearData
    } = useHttp("http://localhost:3000/orders", requestConfig);

    const totalPrice = items.reduce((accum, item) => {
        return accum + item.price * item.quantity;
    }, 0);

    const handleFinish = () => {
        closeModal();
        clearData();
        clearCart();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(
            JSON.stringify({
                order: {
                    items: items,
                    customer: customerData,
                },
            })
        );

        console.log({
            items: items,
            customer: customerData,
        });
    };

    let actions = (
        <>
            <Button textOnly onClick={showCart}>
                Back
            </Button>
            <Button>Submit</Button>
        </>
    );

    if (isSending) {
        actions = <span>Sending order data...</span>;
    }

    if (data && !error) {
        return (
            <Modal open={action === "checkout"} onClose={handleFinish}>
                <h2>Success!</h2>
                <p>Your order was submitted successfully.</p>
                <p>
                    We will get back to you with more details via email within
                    the next few minutes
                </p>
                <p className="modal-actions">
                    <Button onClick={closeModal}>Okay</Button>
                </p>
            </Modal>
        );
    }

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
                <div className="modal-actions">{actions}</div>
            </form>
        </Modal>
    );
}
