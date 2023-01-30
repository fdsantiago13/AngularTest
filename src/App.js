import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main/main";
import BookingForm from "./components/FirebaseDB/BookingForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/BookingForm" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
