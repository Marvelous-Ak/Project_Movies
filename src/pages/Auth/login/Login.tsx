import { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Verifica si todos los campos son válidos
    setIsFormValid(validateEmail(email) && password !== "" && isChecked);
  }, [email, password, isChecked]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const validateEmail = (email) => {
    // Valida el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleToken = async() =>{
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/authentication/guest_session/new',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjRmNmFkYjIwMWZkZTJjYjZiMjgwOTZlOWFjOTY0ZiIsInN1YiI6IjY0ZjkxYjc1ZTBjYTdmMDE0ZjZkODcxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pP37E0DGSr6CXmHYXBqsjxRVM7fAHHQ0hDEg2rArq28'
      }
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        sessionStorage.setItem('token', response.data.guest_session_id);
        setTimeout(() => {
          navigate('/Now_Playing');
        }),500;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="title_L">
          <h3>Login</h3>
          <h6 className="fw-light">¡Bienvenido!</h6>
        </div>
      </div>
      {/* Formulario */}
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="login">
          {/* E-mail */}
          <div className="col-md-6">
            <label for="inputEmail" className="form-label fw-light">
              Correo Electronico de DaCodes
            </label>
            <input type="email" className="form-control" id="inputEmail" required
             value={email} onChange={handleEmailChange}/>
            <div className="invalid-feedback">
            {email !== "" && !validateEmail(email)
                ? "Ingresa un correo válido."
                : "Este campo es obligatorio."}
            </div>
          </div>
          <br />
          {/* Password */}
          <div className="col-md-6">
            <label for="inputPassword" className="form-label fw-light">
              Contraseña
            </label>
            <input type="password" className="form-control" id="inputPassword" required
            value={password} onChange={handlePasswordChange}/>
            <div className="invalid-feedback">Contraseña no valida</div>
          </div>
          <br />
          {/* Check */}
          <div className="form-check col-12 custom-checkbox">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required
            checked={isChecked} onChange={handleCheckboxChange}/>
            <label className="form-check-label fw-light fst-italic" for="invalidCheck">
              He leido y acepto los terminos y condiciones
            </label>
            <div className="invalid-feedback">
            Debes aceptar los terminos antes de enviar.
            </div>
          </div>
          <br />
          {/* Button */}
        <div className="col-12">
          <button className="btn btn-login" type="submit" disabled={!isFormValid} onClick={handleToken}>
            Crear Cuenta
          </button>
        </div>
        </div>
    </form>
    </>
  );
};
Login.displayName = 'Login'
export default Login;
