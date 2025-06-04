import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="h-[100vh] flex items-center gap-5 justify-center relative">
        <ProductList></ProductList>
        <Cart></Cart>
      </div>
    </Provider>
  );
}

export default App;
