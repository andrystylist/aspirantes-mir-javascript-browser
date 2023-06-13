(function () {
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

  function handleClickEmail (event) {
    console.log(event)
    alert(`Envía un correo a ${event.target.textContent}`)
  }

  function createHeader (headers) {
    const tagHead = document.createElement('thead')
    const tagTr = document.createElement('tr')

    for (let head of headers) {
      const tagTh = document.createElement('th')

      tagTh.classList.add(head.className)
      tagTh.textContent = head.text
      tagTr.appendChild(tagTh)
    }
    tagHead.appendChild(tagTr)
    return tagHead
  }

  function createBodyData ({ headers, data }) {
    const tagBody = document.createElement('tbody')

    for (let datum of data) {
      const tagTr = document.createElement('tr')

      for (let head of headers) {
        const tagTd = document.createElement('td')
        tagTd.classList.add(head.className)
        tagTd.textContent = datum[head.mapColumn]

        if (head.mapColumn === 'email') {
          tagTd.addEventListener('click', handleClickEmail)
        }

        tagTr.appendChild(tagTd)
      }

      tagBody.appendChild(tagTr)
    }

    return tagBody
  }

  // **** MAIN ****
  const tableContainer = document.querySelector('#table-container')

  const tagTable = document.createElement('table')
  tagTable.setAttribute('border', '1')
  tagTable.appendChild(createHeader(tableConfig.headers))
  tagTable.appendChild(createBodyData(tableConfig))

  tableContainer.appendChild(tagTable)
})()
