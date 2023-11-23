import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";
import Account from "./pages/Account";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Rankings from "./pages/Rankings";

function App() {
  return (
    <Router>
      <Route path="/" Component={Home} />
      <Route path="/account" Component={Account} />
      <Route path="/events" Component={Events} />
      <Route path="/info" Component={Info} />
      <Route path="/rankings" Component={Rankings} />
    </Router>
  );
}

export default App;
