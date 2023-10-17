import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CountryDetailsPage from "./pages/CountryDetailsPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:alpha3Code" element={<CountryDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
