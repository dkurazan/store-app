import { useContext } from "react";
import CartContext from "../store/cartContext";
import UserActionsCtx from "../store/userActionsContext";
import Button from "./UI/Button";

export default function Header() {
    const { showCart } = useContext(UserActionsCtx);
    const { items } = useContext(CartContext);
    
    let itemsQuantity = 0;

    for (const item of items) {
        itemsQuantity += item.quantity;
    }

    return (
        <header id="main-header">
            <h1 id="title">FakeFood</h1>
            <Button textOnly onClick={showCart}>
                Cart ({itemsQuantity})
            </Button>
        </header>
    );
}
