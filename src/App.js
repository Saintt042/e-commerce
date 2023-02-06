import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./components/Context/Appcontext";
import Layouts from "./Layouts/Layouts";
import Aboutus from "./pages/Aboutus/Aboutus";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Howtoshop from "./pages/Howtoshop/Howtoshop";
import Privacy from "./pages/Privacy/Privacy";
import Shopnow from "./pages/Shopnow/Shopnow";
import Terms from "./pages/Terms/Terms";




function App() {
  return (
    <>
      <AppProvider>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
					<Route path='about-us' element={<Aboutus />} />
					<Route path='terms-and-conditions' element={<Terms />} />
					<Route path='privacy-notice' element={<Privacy />} />
					<Route path='contact-us' element={<Contact />} />
					<Route path='how-to-shop-on-ZubisMart' element={<Howtoshop />} />
					<Route path='products' element={<Shopnow />} />
        </Route>
      </Routes>
      </AppProvider>
    </>
  );
}

export default App;
