//Root
const root = document.querySelector('#root')

//Header
const header = document.createElement('header')
root.appendChild(header)

const logoImg = document.createElement('img')
logoImg.className = 'logo-header'
logoImg.src = 'images/image4.png'
logoImg.alt = 'Logo Rick and Morty'
header.appendChild(logoImg)


//Aside (sidebar) ---> Recordar que hay que hacer una funcion con el scroll
const aside = document.createElement('aside')
aside.className = 'sidebar'
root.appendChild(aside)

const listEpisodes = document.createElement('ul')
listEpisodes.className = 'list-episodes-api'
aside.appendChild(listEpisodes)

const searchEpisodesButton = document.createElement('button')
searchEpisodesButton.className = 'button-sidebar'
searchEpisodesButton.type = 'text'
aside.appendChild(searchEpisodesButton)


//Container
const mainContainer = document.createElement('div')
mainContainer.className = 'main-container'
root.appendChild(mainContainer)

const containerInfo = document.createElement('div')
containerInfo.className = 'container-main.info'
mainContainer.appendChild(containerInfo)

const imgEpisode = document.createElement('img')   //para cargar imagen del episodio
imgEpisode.className = 'main-img-info'
containerInfo.appendChild(imgEpisode)

const h2Episode = document.createElement('h2')
h2Episode.className = 'title-episode'
containerInfo.appendChild(h2Episode)

const infoEpisode = document.createElement('span')
infoEpisode.className = 'info-episode'
containerInfo.appendChild(infoEpisode)

const line = document.createElement('hr')
mainContainer.appendChild(line)

const elements = document.createElement('ul')  //para listado de episodios
elements.className = 'main-list-episodes'
mainContainer.appendChild(elements)


//Carga de datos

function loadingEpisodes() {
    fetch('https://rickandmortyapi.com/api/episode')
    .then(response => response.json())
    .then(data => searchEpisodes(data))
}

loadingEpisodes()

//Funciones de busqueda punto 1.1.1, 1.1.2 y 1.1.3

function searchEpisodes(data) {
    data.results
    .forEach(data => {
        listEpisodes.innerHTML = `<li>${data.id} ${data.name}</li>`
    })
    //const listSidebar = document.querySelector('.list-episodes-api')
    //episodes.results
    //.map(episode => loadingEpisodes(episode))
    //.forEach(listSidebar.appendChild('li'))   
}

function searchCharacters() {

}

function searchLocations() {

}

