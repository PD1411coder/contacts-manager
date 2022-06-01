import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TotalContacts from "./pages/TotalContacts";
import { AuthContextProvider } from "./context/AuthContext";
import ContactsTable from "./components/ContactsTable";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contacts" element={<TotalContacts />} />
          <Route path="/contactstable" element={<ContactsTable />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
