import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";

import Error from "./pages/Error/index.jsx";
import Home from "./pages/Home/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/error" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
