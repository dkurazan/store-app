import Modal from "./UI/Modal";

export default function Cart() {
    return (
        <Modal className='cart'>
            <h2>Cart</h2>
            <ul>
                <li className="cart-item">
                    <p>Product name</p>
                    <p className="cart-item-actions">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </p>
                </li>
            </ul>
            <p className="cart-total">$700</p>
            <p className="modal-actions">
                <button className="text-button">Close</button>
                <button className="button">Checkout</button>
            </p>
        </Modal>
    );
}
