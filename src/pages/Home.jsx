import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext"; 
import '../styles/pages/Home.css'; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { isAuthenticated } = useUser(); 

  const fetchingProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", { method: "GET" });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    fetchingProducts();
  }, []); 

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <section className="intro-section">
        <h1>Bienvenido a Nuestra Tienda</h1>
        <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
      </section>

      <section className="benefits-section">
        <h2>¿Por qué elegirnos?</h2>
        <ul className="benefits-list">
          <li>
            <h3>Envíos a todo el país</h3>
            <p>Recibí tu compra en la puerta de tu casa estés donde estés.</p>
          </li>
          <li>
            <h3>Pagos seguros</h3>
            <p>Trabajamos con plataformas que garantizan tu seguridad.</p>
          </li>
          <li>
            <h3>Atención personalizada</h3>
            <p>Estamos disponibles para ayudarte en todo momento.</p>
          </li>
        </ul>
      </section>

      <section className="products-section">
        <h2>Nuestros productos</h2>
        <p>Elegí entre nuestras categorías más populares.</p>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/products/${product.id}`}> 
                  <img src={product.image} alt={`Imagen de ${product.title}`} />
                  <h3>{product.title}</h3>
                </Link>
                <p className="product-price">${product.price}</p>
                <p className="product-category"><strong>{product.category}</strong></p>
                {isAuthenticated && (
                  <div className="admin-actions">
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No se encontraron productos que coincidan con la búsqueda.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;