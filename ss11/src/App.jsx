import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
function App() {
    return (
        <div className="h-[100vh] flex items-center gap-5 justify-center">
            <ProductList></ProductList>
            <Cart></Cart>
        </div>
    );
}

export default App;