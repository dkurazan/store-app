import { createContext, useState } from "react";

const UserActionsCtx = createContext({
    action: "",
    showCart: () => {},
    showCheckout: () => {},
    closeModal: () => {},
});

export function UserActionsProvider({ children }) {
    const [userAction, setUserAction] = useState(null);

    const handleShowCart = () => {
        setUserAction("cart");
    };

    const handleShowCheckout = () => {
        setUserAction("checkout");
    };

    const handleCloseModal = () => {
        setUserAction("");
    };

    const userActionsCtx = {
        action: userAction,
        showCart: handleShowCart,
        showCheckout: handleShowCheckout,
        closeModal: handleCloseModal,
    };

    return (
        <UserActionsCtx.Provider value={userActionsCtx}>
            {children}
        </UserActionsCtx.Provider>
    );
}

export default UserActionsCtx;
