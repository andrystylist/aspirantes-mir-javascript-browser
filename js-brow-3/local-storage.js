const nombreInput = document.querySelector('#name')
const form = document.querySelector('#form')
const sectionResult = document.querySelector('#mensaje-nombre-guardado')
const emailInput = document.querySelector('#email')

const KEY_STORAGE = 'data'

/**
 *
 * @param {{name, email}}} data
 * @returns
 */
function guardarData (data) {
  if (!data.name || !data.email) {
    return
  }

  localStorage.setItem(KEY_STORAGE, JSON.stringify(data))
}

function showData () {
  const strData = localStorage.getItem(KEY_STORAGE)
  const tagP = document.createElement('p')
  let deleteButton
  let mensaje = 'No hay datos guardados en el local storage.'

  if (strData) {
    const data = JSON.parse(strData)

    deleteButton = document.createElement('button')
    deleteButton.textContent = 'Borrar'
    deleteButton.addEventListener('click', handleDelete)
    mensaje = `El nombre guardado es ${data.name} y el correo es ${data.email}.`
  }

  tagP.textContent = mensaje
  sectionResult.innerHTML = ''
  sectionResult.appendChild(tagP)
  sectionResult.appendChild(deleteButton)
}

function deleteData () {
  localStorage.removeItem(KEY_STORAGE)
}

function handleSubmit (event) {
  event.preventDefault()

  const name = nombreInput.value.trim()
  const email = emailInput.value.trim()

  guardarData({ name, email })

  nombreInput.value = ''
  emailInput.value = ''

  showData()
}

function handleDelete (event) {
  deleteData()
  showData()
}

form.addEventListener('submit', handleSubmit)

showData()
