import "./styles/App.css";
import Account from "./pages/Account";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Rankings from "./pages/Rankings";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="info" element={<Info />} />
      <Route path="rankings" element={<Rankings />} />
      <Route path="events" element={<Events />} />
      <Route path="account" element={<Account />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
