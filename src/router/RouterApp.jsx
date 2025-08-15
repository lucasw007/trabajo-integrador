import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; 
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import { Layout } from "../components/Layout";

const RouterApp = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export { RouterApp };