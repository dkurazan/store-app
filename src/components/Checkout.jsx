import { useContext } from "react";
import UserActionsCtx from "../store/userActionsContext";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

export default function Checkout() {
    const { action, showCart } = useContext(UserActionsCtx);

    return (
        <Modal open={action === "checkout"}>
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Checkout</h2>
                <p>Total Amount: </p>
                <Input label="Name" id="name" type="text" />
                <Input label="Email" id="email" type="email" />
                <Input label="Street" id="street" type="text" />
                <div className="control-row">
                    <Input label="Postal code" id="postal-code" type="text" />
                    <Input label="City" id="city" type="text" />
                </div>
                <div className="modal-actions">
                    <Button textOnly onClick={showCart}>Back</Button>
                    <Button>Submit</Button>
                </div>
            </form>
        </Modal>
    );
}
