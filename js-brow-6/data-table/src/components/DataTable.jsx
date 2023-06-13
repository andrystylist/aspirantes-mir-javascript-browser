function DataTable({ tableConfig }) {
  function handleClickEmail (event) {
    console.log(event)
    alert(`Envía un correo a ${event.target.textContent}`)
  }

  return (
    <table>
      <thead>
        <tr>
          { tableConfig.headers.map((head) => (
            <th key={head.mapColumn}>
              {head.text}
            </th>
          )) }
        </tr>
      </thead>
      <tbody>
        { tableConfig.data.map((item) => (
          <tr key={item.id}>
            { tableConfig.headers.map((head) => (
              <td key={`td-${head.mapColumn}-${item.id}`} onClick={handleClickEmail}>
                {item[head.mapColumn]}
              </td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default DataTable;