import Input from "./UI/Input";
import Modal from "./UI/Modal";

export default function Checkout() {
    return (
        <Modal>
            <form>
                <h2>Checkout</h2>
                <p>Total Amount: </p>
                <Input label="Name" id="name" type="text" />
                <Input label="Email" id="email" type="email" />
                <Input label="Street" id="street" type="text" />
                <p className="control-row">
                    <Input label="Postal code" id="postal-code" type="text" />
                    <Input label="City" id="city" type="text" />
                </p>
                <p className="modal-actions">
                    <button className="text-button">Back</button>
                    <button className="button">Submit</button>
                </p>
            </form>
        </Modal>
    );
}
