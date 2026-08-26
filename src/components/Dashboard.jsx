import { useChecadas } from '../hooks/useChecadas';
import ChecadasTable from './ChecadasTabla';
import Pagination from './Paginacion';
import BarraDeBusqueda from './BarraBusqueda';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const {
    checadas,
    pagina,
    setPagina,
    totalPaginas,
    ordenarPor,
    direccion,
    cambiarOrden,
    loading
  } = useChecadas();

  return (
    <div className={styles.Contenedor}>
        <h2>Control de asistencia</h2>
        <BarraDeBusqueda/>
      {loading && <p>Esperando datos</p>}

      <ChecadasTable 
        checadas={checadas} 
        ordenarPor={ordenarPor} 
        direccion={direccion} 
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