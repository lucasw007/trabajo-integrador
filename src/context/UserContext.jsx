import { createContext, useContext, useState } from "react";


const UserContext = createContext();


const UserProvider = (props) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState(null);

  /**
   * @param {string} username - El nombre de usuario.
   * @param {string} password - La contraseña.
   * @returns {boolean} - true si el login fue exitoso, false en caso contrario.
   */
  const login = async (username, password) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
       
        const tokenData = await response.json();
        setUser({ username, token: tokenData.token });
        setIsAuthenticated(true); 
      } else {
        console.error("Error en el login: Credenciales incorrectas.");
        return false;
      }
    } catch (error) {
      console.error("Error de conexión con la API:", error);
      return false;
    }
  };

  
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };
  
  /**
   * @param {string} username - El nombre de usuario para registrar.
   * @param {string} password - La contraseña.
   * @returns {boolean} - true si el registro es exitoso, false si falla.
   */
  const register = async (username, password) => {

    console.log(`Simulando registro del usuario: ${username}`);

    

    await new Promise(resolve => setTimeout(resolve, 500)); 

    if (username && password) {

      return true;
    } else {

      return false;
    }
  };

  return (
    <UserContext.Provider value={{ login, logout, register, isAuthenticated, user }}>
      {props.children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };