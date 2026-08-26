import { useState, useEffect } from 'react';
import { obtenerChecadas } from '../services/api';

export function useChecadas() {
  const [checadas, setChecadas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [ordenarPor, setOrdenarPor] = useState('fecha');
  const [direccion, setDireccion] = useState('desc');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      setLoading(true);
      const data = await obtenerChecadas(pagina, ordenarPor, direccion);
      if (data) {
        setChecadas(data.registros || []);
        setTotalPaginas(data.totalPaginas || 1);
      }
      setLoading(false);
    };
    cargarDatos();
  }, [pagina, ordenarPor, direccion]);

  const cambiarOrden = (columna) => {
    if (ordenarPor === columna) {
      setDireccion(direccion === 'asc' ? 'desc' : 'asc');
    } else {
      setOrdenarPor(columna);
      setDireccion('asc');
    }
    setPagina(1);
  };

  return {
    checadas,
    pagina,
    setPagina,
    totalPaginas,
    ordenarPor,
    direccion,
    cambiarOrden,
    loading
  };
}