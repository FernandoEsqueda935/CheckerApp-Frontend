import styles from './ChecadasTabla.module.css';

// Este componente solamente integra una tabla para mostrar los datos y los encabezados de Nombre y Fecha son clickeables para manejar el ordenamiento
// tambien se mapea la informacion recibida a traves del hook y pasada hasta aqui por medio de checadas
export default function ChecadasTable({ checadas, sortBy, direction, cambiarOrden }) {
  return (
    <table className = {styles.Tabla}>
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
            <td>{checada.puntualidad}</td>
            <td>
              {checada.estatus}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}