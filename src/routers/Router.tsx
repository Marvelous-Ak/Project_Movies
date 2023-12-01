import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NavbarI from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Upcoming from "../pages/Upcoming/Upcoming";
import TopRated from "../pages/Top_Rated/Top_Rated";
import Popular from "../pages/Popular/Popular";
import Now_Playing from "../pages/Now_Playing/Now_Playing";
import Login from "../pages/Auth/login/Login";
import PrivateRoute from "./PrivateRouter";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <> <NavbarI/> <Footer/> </>}>
          <Route index element={<Login />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/Home" element={<Home />} />
            <Route path="/Now_Playing" element={<Now_Playing />} />
            <Route path="/Popular" element={<Popular />} />
            <Route path="/Top_Rated" element={<TopRated />} />
            <Route path="/Upcoming" element={<Upcoming />} />
            <Route path="*" element={<Navigate replace to="/Home" />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
