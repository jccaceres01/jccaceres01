let resNav = document.querySelector('.responsive-nav')
let menuButton = document.querySelector('.menu-button')

// Show hide
menuButton.addEventListener('click', () => {
  if (resNav.style.opacity == '0') {
    resNav.style.opacity = '1'
  } else {
    resNav.style.opacity = '0'
  }
})

// Close navbar on resize
window.onresize = () => {
  resNav.style.opacity = 0;
}

let aboutArea = document.getElementById('about')
let projectsArea = document.getElementById('projects')
let skillsArea = document.getElementById('skills')
let contactArea = document.getElementById('contact')

const showAbout = () => {
  projectsArea.style.display = 'none'
  skillsArea.style.display = 'none'
  contactArea.style.display = 'none'
  aboutArea.style.display = 'flex'

}

const showProjects = () => {
  skillsArea.style.display = 'none'
  aboutArea.style.display = 'none'
  contactArea.style.display = 'none'
  projectsArea.style.display = 'flex'
  
}

const showSkills = () => {
  projectsArea.style.display = 'none'
  aboutArea.style.display = 'none'
  contactArea.style.display = 'none'
  skillsArea.style.display = 'flex'
}

const showContact = () => {
  projectsArea.style.display = 'none'
  aboutArea.style.display = 'none'
  contactArea.style.display = 'flex'
  skillsArea.style.display = 'none'
}


// Projects content data
let projectsData = [
  {
    id: 'gmail',
    title: 'Gmail',
    description: 'Gmail (abreviación de Google Mail) es un servicio de correo electrónico proporcionado por la empresa estadounidense Google desde el 1 de abril de 2004. Tras más de cinco años en fase "beta" (de pruebas), el 7 de julio de 2009 Gmail pasó a ser considerado un producto terminado. Las cuentas básicas de Gmail son gratuitas pero Google se remunera mostrando anuncios al usuario mientras que la versión para empresas, de pago, está libre de publicidad',
    icon: 'fas fa-envelope',
    imgPath: 'img/gmail.png'
  },
  {
    id: 'outlook',
    title: 'Outlook',
    description: 'Durante un período de transición entre el 31 de julio de 2012 y el 18 de febrero de 2013, las direcciones @outlook.com se ofrecieron a todos los usuarios, y quienes ya tenían cuenta en Hotmail pudieron optar por actualizarse voluntariamente a la interfaz de Outlook Hotmail que ofrecía un espacio de almacenamiento con medidas de seguridad patentadas,2​ tecnología Ajax.',
    icon: 'fas fa-at',
    imgPath: 'img/outlook.jpg'
  },
  {
    id: 'rhymthmbox',
    title: 'Rhythmbox',
    description: 'Rhythmbox es un reproductor de audio que reproduce y ayuda a organizar la música digital. Fue originalmente inspirado por el reproductor de Apple, iTunes. Es software libre, diseñado para trabajar bien bajo el escritorio GNOME, y usa el motor GStreamer o Xine Media. Actualmente está bajo desarrollo activo',
    icon: 'fas fa-podcast',
    imgPath: 'img/Rhythmbox.jpg'
  }
]

const fillSkillMenu = () => {
  let menu = document.querySelector('.projects-menu ul')

  projectsData.forEach(el => {
    let liItem = document.createElement('li')
    let aItem = document.createElement('a')
    let pItem = document.createElement('p')
    let iItem = document.createElement('i')
    iItem.className = `${el.icon} fa-3x`

    aItem.setAttribute('href', '#')
    pItem.innerHTML = el.title
    aItem.appendChild(pItem)
    aItem.appendChild(iItem)
    liItem.setAttribute('id', el.id)

    liItem.appendChild(aItem)

    aItem.addEventListener('click', e => {
      e.preventDefault()
      let id = e.currentTarget.parentElement.getAttribute('id')

      dataIndex = projectsData.findIndex(idx => idx.id == id)

      document.getElementById('p_title').innerHTML = 
        projectsData[dataIndex].title
      
      document.getElementById('p_description').innerHTML =
        projectsData[dataIndex].description

      document.getElementById('p_img').src =
        projectsData[dataIndex].imgPath
    })

    menu.appendChild(liItem)
  })
}

fillSkillMenu()