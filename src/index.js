import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Router for creating and navigate between our pages

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/pages/UserProfile/:id" element={<UserProfile />} />
    </Routes>
  </Router>
);
