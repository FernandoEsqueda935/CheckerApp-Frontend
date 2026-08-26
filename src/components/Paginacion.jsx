import styles from './Paginacion.module.css';

export default function Pagination({ pagina, totalPaginas, setPagina }) {
  return (
    <div className={styles.Container}>
      <button className={styles.Button} onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
        Anterior
      </button>
      <span>Página {pagina} de {totalPaginas}</span>
      <button onClick={() => setPagina(pagina + 1)} disabled={pagina >= totalPaginas}>
        Siguiente
      </button>
    </div>
  );
}