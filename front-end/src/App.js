import React from "react";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Accueil from "./components/Accueil/Accueil";

function App() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          {!token ? (
            <>
              <li>
                <Link to="/login">Connexion</Link>
              </li>
              <li>
                <Link to="/register">Créer un compte</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/accueil">Accueil</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Déconnexion</button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/accueil" /> : <Login />} />
        <Route path="/login" element={token ? <Navigate to="/accueil" /> : <Login />} />
        <Route path="/register" element={token ? <Navigate to="/accueil" /> : <Register />} />
        <Route path="/accueil" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
