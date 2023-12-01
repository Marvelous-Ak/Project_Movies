import Footer from "../../components/Footer/Footer";
import NavbarI from "../../components/Navbar/Navbar";
import { Fragment } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "../../components/Buttons/Buttons";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MoviesLayout = ({ children, page, totalPages,setPage  }: { children: any, page:number, totalPages:number, setPage:React.Dispatch<React.SetStateAction<number>> }) => {

 // Función para ir a la página siguiente
 const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      scrollToTop();
    }
  };

  // Función para ir a la página anterior
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      scrollToTop();
    }
  };

 // Función para hacer scroll hacia arriba
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Usa "smooth" para un desplazamiento suave
    });
  };
  
  return (
    <Fragment>
      <NavbarI />
      <Buttons />
      {children}
      <br />
       {/* Paginación */}
       <div className="pagination justify-content-center ButtonPage">
        <button className="btn rounded-circle  btn-lg" onClick={prevPage}>
        <FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff",}} />
        </button>
        <div className="d-flex align-items-center mx-2 pages">{page} / {totalPages}</div>
        <button className="btn rounded-circle btn-lg" onClick={nextPage}>
        <FontAwesomeIcon icon={faChevronRight}  style={{color: "#ffffff",}}/>
        </button>
      </div>
      <br />
      <Footer />
    </Fragment>
  );
};

export default MoviesLayout;
