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
  const [error, setError] = useState('');
  const [cadenaBusqueda, setCadenaBusqueda] = useState('');
  const [fechas, setFechas] = useState({ fechaInicio: '', fechaFin: '' });

  const aplicarFechas = (nuevasFechas) => {
    setFechas(nuevasFechas);
    setPagina(1);
  };

  useEffect(() => {
    const cargarDatos = async () => {
      setLoading(true);
      setError('');

      try {
        const data = await obtenerChecadas(
          pagina,
          sortBy,
          direction,
          cadenaBusqueda,
          fechas.fechaInicio,
          fechas.fechaFin
        );

        setChecadas(data.registros || []);
        setTotalPaginas(data.totalPaginas || 1);
      } catch {
        setError('No se pudieron cargar los registros, espere y vuelva a intentar.');
      } finally {
        setLoading(false);
      }
    };
    cargarDatos();
  }, [pagina, sortBy, direction, cadenaBusqueda, fechas]);

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
    error,
    setCadenaBusqueda,
    setFechas: aplicarFechas
  };
}