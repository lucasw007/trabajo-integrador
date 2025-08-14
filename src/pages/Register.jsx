import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import '../styles/pages/Register.css';

const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const { register } = useUser();
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 
    

    const success = await register(username, password);

    if (success) {

      navigate('/login');
    } else {

      setError('El registro falló. El nombre de usuario ya existe o hubo un problema.');
    }
  };

  return (
    <div className="register-container">
      <h2>Crear una cuenta</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="register-button">
          Registrarse
        </button>
      </form>
      <p className="login-link-container">
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
      </p>
    </div>
  );
};

export { Register };
