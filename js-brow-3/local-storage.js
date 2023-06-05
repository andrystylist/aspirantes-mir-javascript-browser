const nombreInput = document.querySelector('#name')
const form = document.querySelector('#form')
const sectionResult = document.querySelector('#mensaje-nombre-guardado')

function guardarNombre (name) {
  if (!name) {
    return
  }
  localStorage.setItem('name', name)
  nombreInput.value = ''
}

function mostrarNombre () {
  const name = localStorage.getItem('name')
  const tagP = document.createElement('p')
  let tagButton
  let mensaje = 'No hay datos'

  if (name) {
    tagButton = document.createElement('button')
    tagButton.addEventListener('click', handleDelete)
    tagButton.textContent = 'Borrar'
    mensaje = `El nombre guardado es: ${name}`
  }

  tagP.textContent = mensaje
  sectionResult.innerHTML = ''
  sectionResult.appendChild(tagP)
  sectionResult.appendChild(tagButton)
}

function borrarNombre () {
  localStorage.removeItem('name')
}

function handleSubmit (event) {
  event.preventDefault()
  const nombre = nombreInput.value.trim()
  guardarNombre(nombre)
  mostrarNombre()
}

function handleDelete (event) {
  borrarNombre()
  mostrarNombre()
}

form.addEventListener('submit', handleSubmit)

mostrarNombre()
