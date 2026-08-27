
import styles from './BarraBusqueda.module.css';

// Este es un componente sencillo que integra un input y un boton para detectar cuando el usuario quiera actualizar la busqueda
// cuando se presiona el boton la onBuscar manda el texto al hook para actualizar la tabla
// Agregué el filtro por fechas, quedó bien adentro de este componente y puedo mandar los datos junto con los de busqueda
export default function BarraDeBusqueda({ onBuscar, onFiltrar }) {
    function handleSubmit(e) {
        e.preventDefault();

        const datos = new FormData(e.currentTarget);
        const cadena = datos.get('nombre');
        const fechaInicio = datos.get('fechaInicio');
        const fechaFin = datos.get('fechaFin');

        //Validamos que no sea null y la fecha de fin no sea menor
        if (fechaInicio && fechaFin && fechaInicio > fechaFin) {
            return;
        }

        onBuscar(cadena);
        onFiltrar({ fechaInicio, fechaFin });
        
    }

    return (
    <form className={styles.Buscador} onSubmit={handleSubmit}>
      <input
        className={styles.inputBusqueda}
        name="nombre"
        type="text"
        placeholder="Buscar por nombre"
      />

      <label className={styles.grupoFecha}>
        Desde
        <input className={styles.inputFecha} name="fechaInicio" type="date" />
      </label>

      <label className={styles.grupoFecha}>
        Hasta
        <input className={styles.inputFecha} name="fechaFin" type="date" />
      </label>

      <button className={styles.button} type="submit">
        Filtrar
      </button>
    </form>
    
    )   
}