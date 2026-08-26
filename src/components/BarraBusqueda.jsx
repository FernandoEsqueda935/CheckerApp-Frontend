
import styles from './BarraBusqueda.module.css';

export default function BarraDeBusqueda() {
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const datos = new FormData(form);
        const nombre = datos.get('nombre');
        alert(`Buscando checadas para el nombre: ${nombre}`);
    }

    return (
    <div className={styles.Buscador}>
            <input className={styles.input} name = "nombre" type="text" placeholder="Buscar por nombre" />
            <button className={styles.button} type="submit">Buscar</button>
    </div>
    )
}