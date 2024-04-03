import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
});

const itemsReducer = (state, action) => {
    const updatedItems = [...state];

    if (action.type === "ADD_ITEM") {
        const currentItemIndex = state.findIndex(
            (item) => item.id === action.item.id
        );
        const currentItem = state[currentItemIndex];

        if (currentItemIndex > -1) {
            const newItem = {
                ...currentItem,
                quantity: currentItem.quantity + 1,
            };

            updatedItems[currentItemIndex] = newItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return updatedItems;
    }

    if (action.type === "REMOVE_ITEM") {
        const currentItemIndex = state.findIndex(
            (item) => item.id === action.id
        );
        const currentItem = state[currentItemIndex];

        if (currentItem.quantity === 1) {
            updatedItems.splice(currentItemIndex, 1);
        } else {
            const newItem = {
                ...currentItem,
                quantity: currentItem.quantity - 1,
            };

            updatedItems[currentItemIndex] = newItem;
        }

        return updatedItems;
    }

    return state;
};

export function CartCtxProvider({ children }) {
    const [cartItems, dispatchCartItems] = useReducer(itemsReducer, []);

    const handleAddItem = (passedItem) => {
        dispatchCartItems({
            type: "ADD_ITEM",
            item: passedItem,
        });
    };

    const handleRemoveItem = (passedId) => {
        dispatchCartItems({
            type: "REMOVE_ITEM",
            id: passedId,
        });
    };

    const valueCtx = {
        items: cartItems,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
    };

    return (
        <CartContext.Provider value={valueCtx}>{children}</CartContext.Provider>
    );
}

export default CartContext;
