import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Index from "./components/index/index";
import History from "./components/history/history";
import Camera from "./components/camera";
import Error from "./components/error";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
