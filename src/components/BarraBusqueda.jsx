
import styles from './BarraBusqueda.module.css';

// Este es un componente sencillo que integra un input y un boton para detectar cuando el usuario quiera actualizar la busqueda
// cuando se presiona el boton la onBuscar manda el texto al hook para actualizar la tabla

export default function BarraDeBusqueda({ onBuscar }) {
    function handleSubmit(e) {
        e.preventDefault();

        const datos = new FormData(e.currentTarget);
        const cadena = datos.get('nombre');
        onBuscar(cadena);
        
    }

    return (
    <div className={styles.Buscador}>
        <form className={styles.Buscador} onSubmit={handleSubmit}>
            <input className={styles.input} name = "nombre" type="text" placeholder="Buscar por nombre" />
            <button className={styles.button} type="submit">Buscar</button>
        </form>
    </div>
    )
}