import Logo from "../../assets/img/logo.png";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const NavbarI= () => {
  return (
    <>
      <nav className="navbar navBG">
        <div className="container-fluid">
        <Link to="/Home" className="navbar-brand">
            <img src={Logo} alt="Logo" className="LogoD" />
          </Link>
          <Link to="">
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ color: "#ffffff", height: "2rem" }}
            />
          </Link>
        </div>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default NavbarI;