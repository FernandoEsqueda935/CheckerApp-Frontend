// Implementé una funcion para manejar la ruta, ya que estuve utilizando solamente parametros en la url porque son consultas sencillas

export const obtenerChecadas = async (pagina, sortBy, direction, cadenaBusqueda) => {
  try {
    const url = `http://localhost:5258/api/checadas?pagina=${pagina}&sortBy=${sortBy}&direction=${direction}&cadenaBusqueda=${cadenaBusqueda}`;
    const respuesta = await fetch(url);
    return await respuesta.json();
  } catch (error) {
    console.error("Error en la API:", error);
    return null;
  }
};