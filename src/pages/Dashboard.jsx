import { useState } from "react";
import { Layout } from "../components/Layout";
import { useUser } from "../context/UserContext"; 
import '../styles/pages/Dashboard.css'; 

const Dashboard = () => {
  const { user } = useUser();
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 
    if (!name || !price || !description) {
      setError("Debes completar todos los campos");
      return;
    }

    if (name.length < 3) {
      setError("El nombre debe tener al menos 4 caracteres");
      return;
    }

    const newProduct = {
      id: crypto.randomUUID(), 
      title: name,
      price: price,
      description: description,
      category: "miscellaneous", 
      image: "https://placehold.co/400x400/cccccc/333333?text=Sin+Imagen", 
    };

    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
      });

      if (!response.ok) {
        throw new Error("Error al guardar el producto");
      }

      const data = await response.json();
      setProduct(data); 
      
      
      setName("");
      setPrice("");
      setDescription("");

    } catch (err) {
      console.error(err);
      setError("Hubo un error al guardar el producto. Intenta de nuevo.");
    }
  };

  return (
    <Layout>
      <div className="dashboard-container">
        <h1>Panel de Administración</h1>

        {user ? (
          <section className="admin-section">
            <h2>Cargar nuevo producto</h2>
            <form onSubmit={handleSubmit} className="product-form">
              <div className="form-group">
                <label>Nombre del producto:</label>
                <input type="text" name="nombre" onChange={(e) => setName(e.target.value)} value={name} />
              </div>

              <div className="form-group">
                <label>Precio:</label>
                <input type="number" name="precio" onChange={(e) => setPrice(e.target.value)} value={price} />
              </div>

              <div className="form-group">
                <label>Descripción:</label>
                <textarea name="descripcion" rows="4" onChange={(e) => setDescription(e.target.value)} value={description} />
              </div>

              {
                error && <p className="error-message">{error}</p>
              }

              <button type="submit">Guardar producto</button>
            </form>

            {
              product && (
                <div className="success-message">
                  <h3>Producto guardado con éxito:</h3>
                  <h4>{product.title}</h4>
                  <p><strong>Precio:</strong> ${product.price}</p>
                  <p><strong>Descripción:</strong> {product.description}</p>
                </div>
              )
            }
          </section>
        ) : (
          <div className="not-authenticated-message">
            <p>Debes iniciar sesión para acceder al panel de administración.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export { Dashboard };