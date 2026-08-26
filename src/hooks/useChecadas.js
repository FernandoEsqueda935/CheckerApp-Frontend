import { useState, useEffect } from 'react';
import { obtenerChecadas } from '../services/api';

// Implemnté un hook para manejar los cambios dentro de los componentes del dashboard para saber cuando actualizar la tabla

export function useChecadas() {
  const [checadas, setChecadas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [sortBy, setsortBy] = useState('fecha');
  const [direction, setDireccion] = useState('desc');
  const [loading, setLoading] = useState(false);
  const [cadenaBusqueda, setCadenaBusqueda] = useState('');


  useEffect(() => {
    const cargarDatos = async () => {
      setLoading(true);
      const data = await obtenerChecadas(pagina, sortBy, direction, cadenaBusqueda);
      if (data) {
        setChecadas(data.registros || []);
        setTotalPaginas(data.totalPaginas || 1);
      }
      setLoading(false);
    };
    cargarDatos();
  }, [pagina, sortBy, direction, cadenaBusqueda]);

  const cambiarOrden = (columna) => {
    if (sortBy === columna) {
      setDireccion(direction === 'asc' ? 'desc' : 'asc');
    } else {
      setsortBy(columna);
      setDireccion('asc');
    }
    setPagina(1);
  };

  return {
    checadas,
    pagina,
    setPagina,
    totalPaginas,
    sortBy,
    direction,
    cambiarOrden,
    loading,
    setCadenaBusqueda
  };
}