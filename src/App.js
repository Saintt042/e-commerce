import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./Layouts/Layouts";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
