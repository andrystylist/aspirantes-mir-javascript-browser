const menu = [
  {
    name: 'Home',
    link: '/',
    items: []
  },
  {
    name: 'About',
    link: '/about',
    items: []
  },
  {
    name: 'Products',
    link: '/products',
    items: [
      {
        name: 'Product 1',
        link: '/products/1',
        items: []
      },
      {
        name: 'Product 2',
        link: '/products/2',
        items: [
          {
            name: 'Product 2.1',
            link: '/products/2/1',
            items: []
          }
        ]
      }
    ]
  },
  {
    name: 'Services',
    link: '/services',
    items: [
      {
        name: 'Service 1',
        link: '/services/1',
        items: [
          {
            name: 'Service 1.1',
            link: '/services/1/1',
            items: []
          }
        ]
      },
      {
        name: 'Service 2',
        link: '/services/2',
        items: [
          {
            name: 'Service 2.1',
            link: '/services/2/1',
            items: []
          },
          {
            name: 'Service 2.2',
            link: '/services/2/2',
            items: []
          }
        ]
      }
    ]
  }
]

const menuNav = document.querySelector('#menu')

function setActiveLink (event) {
  event.preventDefault()

  for (link of document.querySelectorAll('li.menu-item a')) {
    link.classList.remove('active')
  }

  event.target.classList.add('active')
}

function toggleSubMenu (event) {
  const toggleElement = event.target
  const parentElement = toggleElement.parentElement

  toggleElement.classList.toggle('open')

  parentElement.querySelector('ul.menu').classList.toggle('hidden-item')
}

/**
 *
 * @param {MenuItem[]} menuItems
 */
function createMenu (menuItems) {
  const ul = document.createElement('ul')
  ul.classList.add('menu')

  for (item of menuItems) {
    const hasSubMenu = item.items.length > 0

    const li = document.createElement('li')
    const a = document.createElement('a')

    li.classList.add('menu-item')

    a.addEventListener('click', setActiveLink)
    a.textContent = item.name
    a.setAttribute('href', item.link)

    if (hasSubMenu) {
      const b = document.createElement('b')
      b.addEventListener('click', toggleSubMenu)
      li.appendChild(b)
    }

    li.appendChild(a)

    if (hasSubMenu) {
      // Tiene sub-menu (Recursividad)
      const subMenuUl = createMenu(item.items)
      subMenuUl.classList.add('hidden-item')
      li.appendChild(subMenuUl)
    }

    ul.appendChild(li)
  }

  return ul
}

const mainUl = createMenu(menu)

mainUl.childNodes[0].childNodes[0].classList.add('active')

mainUl.classList.add('main-menu')

menuNav.appendChild(mainUl)
