import styles from './ChecadasTabla.module.css';

// Este componente solamente integra una tabla para mostrar los datos y los encabezados de Nombre y Fecha son clickeables para manejar el ordenamiento
// tambien se mapea la informacion recibida a traves del hook y pasada hasta aqui por medio de checadas
export default function ChecadasTable({ checadas, sortBy, direction, cambiarOrden }) {
  return (
    <div className={styles.TablaContainer}>
      <table className={styles.Tabla}>
      <thead>
        <tr>
          <th>Número de empleado</th>
          <th onClick={() => cambiarOrden('nombre')}>
            Nombre {sortBy === 'nombre' && (
              <span aria-label={direction === 'asc' ? 'ascendente' : 'descendente'}>
                {direction === 'asc' ? ' ↑' : ' ↓'}
              </span>
            )}
          </th>
          <th onClick={() => cambiarOrden('fecha')}>
            Fecha {sortBy === 'fecha' && (
              <span aria-label={direction === 'asc' ? 'ascendente' : 'descendente'}>
                {direction === 'asc' ? ' ↑' : ' ↓'}
              </span>
            )}
          </th>
          <th>Llegada</th>
          <th>Salida</th>
          <th>Turno</th>
          <th>Puntualidad</th>
          <th>Estatus</th>
        </tr>
      </thead>
      <tbody>
        {checadas.map((checada, index) => (
          <tr key={index}>
            <td>{checada.numEmp}</td>
            <td>{checada.nombreCompleto}</td>
            <td>{checada.fecha}</td>
            <td>{checada.llegada}</td>
            <td>{checada.salida}</td>
            <td>{checada.turno}</td>
            <td className={obtenerPuntualidad(checada.puntualidad)}>
              {checada.puntualidad}
            </td>
            <td className={obtenerEstatus(checada.estatus)}>
              {checada.estatus}
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

function obtenerPuntualidad(estatus) {
  switch (estatus) {
    case 'Retardo':
      return styles.inpuntual;
    case 'A tiempo':
      return styles.puntual;
    default:
      return '';
  }
}

function obtenerEstatus(estatus) {
  switch (estatus) {
    case 'En Turno':
      return styles.inpuntual;
    case 'Finalizado':
      return styles.puntual;
    case 'Salida Omitida':
      return styles.omision;
    default:
      return '';
  }
}
