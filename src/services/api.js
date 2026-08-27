// Implementé una funcion para manejar la ruta, ya que estuve utilizando solamente parametros en la url porque son consultas sencillas

export const obtenerChecadas = async (
  pagina,
  sortBy,
  direction,
  cadenaBusqueda,
  fechaInicio,
  fechaFin
) => {
  try {
    const parametros = new URLSearchParams({ pagina, sortBy, direction, fechaInicio, fechaFin, cadenaBusqueda });

    if (fechaInicio) parametros.set('fechaInicio', fechaInicio);
    if (fechaFin) parametros.set('fechaFin', fechaFin);

    const url = `http://localhost:5258/api/checadas?${parametros}`;
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`La API respondió con el estado ${respuesta.status}`);
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error en la API:', error);
    throw error;
  }
};