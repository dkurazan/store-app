import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import { CartCtxProvider } from "./store/cartContext";
import { UserActionsProvider } from "./store/userActionsContext";

function App() {
    return (
        <UserActionsProvider>
            <CartCtxProvider>
                <Header />
                <AllProducts />
                <Cart />
                <Checkout />
            </CartCtxProvider>
        </UserActionsProvider>
    );
}

export default App;
