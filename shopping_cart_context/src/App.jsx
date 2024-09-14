import Card from "./components/Card";
import Header from "./components/Header";
import Cart from './components/Cart';
import { AppProvider } from "./context/AppContext";
function App() {
  return (
    <div className="relative">
      <AppProvider>
        <Header />
        <Card />
        <Cart/>
      </AppProvider>
    </div>
  );
}

export default App;
