import { useChecadas } from '../hooks/useChecadas';
import ChecadasTable from './ChecadasTabla';
import Pagination from './Paginacion';
import BarraDeBusqueda from './BarraBusqueda';
import styles from './Dashboard.module.css';

// Este es el componente principal que integra el resto de componentes de react

export default function Dashboard() {
  const {
    checadas,
    pagina,
    setPagina,
    totalPaginas,
    sortBy,
    direction,
    cambiarOrden,
    loading, 
    setCadenaBusqueda
  } = useChecadas();

  return (
    <div className={styles.Contenedor}>
        <h2>Control de asistencia</h2>
        <BarraDeBusqueda onBuscar={setCadenaBusqueda} />
      {loading && <p>Esperando datos</p>}

      <ChecadasTable 
        checadas={checadas} 
        sortBy={sortBy} 
        direction={direction} 
        cambiarOrden={cambiarOrden} 
      />
      
      <Pagination 
        pagina={pagina} 
        totalPaginas={totalPaginas} 
        setPagina={setPagina} 
      />
    </div>
  );
}