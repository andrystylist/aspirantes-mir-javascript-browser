import './App.css'
import DataTable from './components/DataTable'

const tableConfig = {
  headers: [
    {
      text: 'Id',
      className: 'number-column',
      mapColumn: 'id'
    },
    {
      text: 'Nombre',
      className: 'text-column',
      mapColumn: 'name'
    },
    {
      text: 'Apellido',
      className: 'text-column',
      mapColumn: 'lastName'
    },
    {
      text: 'Email',
      className: 'text-column',
      mapColumn: 'email'
    },
    {
      text: 'Fecha de Nacimiento',
      className: 'center-column',
      mapColumn: 'birthday'
    }
  ],
  data: [
    {
      id: 1,
      name: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      birthday: '1980-01-01'
    },
    {
      id: 2,
      name: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      birthday: '1981-02-02'
    },
    {
      id: 3,
      name: 'Mike',
      lastName: 'Jones',
      email: 'mike.jones@example.com',
      birthday: '1982-03-03'
    },
    {
      id: 4,
      name: 'Sarah',
      lastName: 'Williams',
      email: 'sarah.williams@example.com',
      birthday: '1983-04-04'
    },
    {
      id: 5,
      name: 'David',
      lastName: 'Brown',
      email: 'david.brown@example.com',
      birthday: '1984-05-05'
    },
    {
      id: 6,
      name: 'Emily',
      lastName: 'Green',
      email: 'emily.green@example.com',
      birthday: '1985-06-06'
    },
    {
      id: 7,
      name: 'Peter',
      lastName: 'Johnson',
      email: 'peter.johnson@example.com',
      birthday: '1986-07-07'
    },
    {
      id: 8,
      name: 'Susan',
      lastName: 'Davis',
      email: 'susan.davis@example.com',
      birthday: '1987-08-08'
    },
    {
      id: 9,
      name: 'Michael',
      lastName: 'Carter',
      email: 'michael.carter@example.com',
      birthday: '1988-09-09'
    },
    {
      id: 10,
      name: 'Alice',
      lastName: 'Anderson',
      email: 'alice.anderson@example.com',
      birthday: '1989-10-10'
    }
  ]
}

function App() {

  return (
    <>
      <h1>Hello World!</h1>
      <section>
        <DataTable tableConfig={tableConfig} />
      </section>
    </>
  )
}

export default App
