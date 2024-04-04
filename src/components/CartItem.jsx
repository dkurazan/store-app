import { currencyFormatter } from "../util/currencyFormatter";

export default function CartItem({item, onIncrease, onDecrease}) {
    return (
        <li className="cart-item">
            <p>{item.name} - {item.quantity} x {currencyFormatter.format(item.price)}</p>
            <p className="cart-item-actions">
                <button onClick={() => onDecrease(item.id)}>
                    -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrease(item)}>
                    +
                </button>
            </p>
        </li>
    );
}
