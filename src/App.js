import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./components/Context/Appcontext";
import Layouts from "./Layouts/Layouts";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <AppProvider>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      </AppProvider>
    </>
  );
}

export default App;
