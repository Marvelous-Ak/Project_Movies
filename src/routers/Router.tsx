import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/login/Login";
import PrivateRoute from "./PrivateRouter";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*   <Route path="/" element={ <> <NavbarI/> <Footer/> </>}> */}
        <Route index element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/Now_Playing"
            element={<Home title="Now playing" movieType="now_playing" />}
          />
          <Route
            path="/Popular"
            element={<Home title="Popular" movieType="popular" />}
          />
          <Route
            path="/Top_Rated"
            element={<Home title="Top rated" movieType="top_rated" />}
          />
          <Route
            path="/Upcoming"
            element={<Home title="Upcoming" movieType="upcoming" />}
          />
          <Route path="*" element={<Navigate replace to="/Now_Playing" />} />
        </Route>
        {/*    </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
