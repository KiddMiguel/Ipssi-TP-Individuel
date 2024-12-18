// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./components/Login/Login";
// import RegisterPage from "./components/Register/Register";
// import DashboardPage from "./components/Dashboard/Dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/dashboard" element={<DashboardPage />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
