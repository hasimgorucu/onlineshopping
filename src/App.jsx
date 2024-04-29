import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer/> 
        <Navbar />
        <Routes>
          <Route path="/cart" Component={Cart}/>
          <Route path="/" Component={Home}/>
          <Route path="/notFound" Component={NotFound} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
