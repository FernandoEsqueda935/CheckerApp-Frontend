export const obtenerChecadas = async (pagina, sortBy, direction) => {
  try {
    const url = `http://localhost:5258/api/checadas?pagina=${pagina}&sortBy=${sortBy}&direction=${direction}`;
    const respuesta = await fetch(url);
    return await respuesta.json();
  } catch (error) {
    console.error("Error en la API:", error);
    return null;
  }
};