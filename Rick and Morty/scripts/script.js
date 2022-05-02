/*//Root
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

const listEpisodes = document.createElement('div')
listEpisodes.className = 'episodes'
aside.appendChild(listEpisodes)

const searchEpisodesButton = document.createElement('button')
searchEpisodesButton.className = 'button-sidebar'
searchEpisodesButton.type = 'text'
aside.appendChild(searchEpisodesButton)
searchEpisodesButton.innerText = 'Load More'


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
elements.className = 'main-list'
mainContainer.appendChild(elements)*/


/*function loadEpisodes(url) {
    fetch(url || 'https://rickandmortyapi.com/api/episode')
        .then(res => res.json())
        .then(episodes => showEpisodesLinks(episodes))
        .catch(reason => console.log(reason))
}

function showEpisodesLinks(episodes) {
    const episodesContainer = document.querySelector('episodes')
    episodes.results
        .map(createEpisodeLink)
        .forEach(node => episodesContainer.appendChild(node))
    const loadMore = document.querySelector('loadMore')
    if (episodes.info.next) {
        loadMore.onclick = () => loadEpisodes(episodes.info.next)
    } else {
        loadMore.classList.add('hidden')
    }
}

function createEpisodeLink(episode) {
    const episodeLink = document.createElement('div')
    episodeLink.classList.add('episodeLink')
    episodeLink.innerHTML = episode.name
    episodeLink.addEventListener('click', () => showEpisodesDetail(episode))
    return episodeLink
}

function showEpisodesDetail(episode) {
    const main = document.querySelector('main-container')
    main.innerHTML = `<h2>${episode.name}</h2>` + `<h3>${episode.espisode} | ${episode.air_date}</h3>`

    const charactersContainer = document.createElement('div')
    charactersContainer.id = 'caractersContainer'
    main.appendChild(charactersContainer)
        .forEach(characterUrl => createCharacterThumbnail(charactersContainer, characterUrl))
}

function createCharacterThumbnail(parent, characterUrl) {
    const div = document.createElement('div')
    div.classList.add('characterThumbnail')
    fetch(characterUrl)
        .then(res => res.json())
        .then(character => renderCharacterThumbnail(div, character))
    parent.appendChild(div)
}

function renderCharacterThumbnail(parent, character) {
    parent.innerHTML = `<img src = ${character.image}>` + `<h4>${character.name}</h4>` + `<h5>${character.species} | ${character.status}</h5>`
}

loadEpisodes()*/
/*//Carga de datos

function loadingEpisodes() {
    fetch('https://rickandmortyapi.com/api/episode')
    .then(response => response.json())
    .then(data => searchEpisodes(data))
}

loadingEpisodes()

//Funciones de busqueda punto 1.1.1, 1.1.2 y 1.1.3

function searchEpisodes(data) {
    data.results
    .map(eachEpisode)
    .forEach(data => {
       listEpisodes.innerHTML = `<li><button class="episode">${data.id} ${data.name}</button></li>`
    })

    const loadMore = searchEpisodesButton
    if (data.info.next) {
        loadMore.onclick = () => loadingEpisodes(data.info.next)
    } else {
        loadMore.classList.add('hidden')
    }
    //const listSidebar = document.querySelector('.list-episodes-api')
    //data.results
    //.map(createEpisodeLink)
    //.forEach(node => listSidebar.appendChild(node))
}

function eachEpisode (data) {
    const btnEpisode = document.createElement('button')
    btnEpisode.classList.add('btnEpisode')
    btnEpisode.innerText = `${data.id} ${data.name}` 
    btnEpisode.addEventListener('click', () => showEpisode(data))
    return btnEpisode
}
function searchCharacters() {

}

function searchLocations() {

}

*/


const root = document.querySelector("root")

const head = document.createElement('div')
head.id = 'header'
head.innerHTML= '<h1>Rick and Morti API</h1>'
root.appendChild(head)

const divSidebar = document.createElement('div')
divSidebar.id = 'sidebar'
root.appendChild(divSidebar)
const divEpisodes = document.createElement('div')
divEpisodes.id = 'episodes'
divSidebar.appendChild(divEpisodes)
const buttonSidebar = document.createElement('button')
buttonSidebar.id = 'loadMore'
buttonSidebar.innerText = 'Load More'
divSidebar.appendChild(buttonSidebar)

const divMain = document.createElement('div')
divMain.id = 'main'
root.appendChild(divMain)

  
  function loadEpisodes(url) {
    fetch(url || "https://rickandmortyapi.com/api/episode")
      .then(res => res.json())
      .then(episodes => showEpisodeLinks(episodes))
      .catch(reason => console.log(reason))
  }
  
  function showEpisodeLinks(episodes) {
    const episodesContainer = document.querySelector("episodes")
    episodes.results
      .map(createEpisodeLink)
      .forEach(node => episodesContainer.appendChild(node))
    const loadMore = document.querySelector("loadMore")
    if (episodes.info.next) {
      loadMore.onclick = () => loadEpisodes(episodes.info.next)
    } else {
      loadMore.classList.add("hidden")
    }
  
  }
  
  function createEpisodeLink(episode) {
    const episodeLink = document.createElement("div")
    episodeLink.classList.add("episodeLink")
    episodeLink.innerText = episode.name
    episodeLink.addEventListener("click", () => showEpisodeDetail(episode))
    return episodeLink
  }
  
  function showEpisodeDetail(episode) {
    const main = document.querySelector("main")
    main.innerHTML = `<h2>${episode.name}</h2>` + `<h3>${episode.episode} | ${episode.air_date} </h3>`
  
    const charactersContainer = document.createElement("div")
    charactersContainer.id="charactersContainer"
    main.appendChild(charactersContainer)
    episode.characters
    .forEach(characterUrl => createCharacterThumbnail(charactersContainer, characterUrl))
  }
  
  function createCharacterThumbnail(parent, characterUrl) {
    const div = document.createElement("div")
    div.classList.add("characterThumbnail")
    fetch(characterUrl)
      .then(res => res.json())
      .then(character => renderCharacterThumbnail(div, character))
    parent.appendChild(div)
  }
  
  function renderCharacterThumbnail(parent, character) {
    parent.innerHTML = `<img src=${character.image}>` +
    `<h4>${character.name}</h4>` +
    `<h5>${character.species} | ${character.status}</h5>`
  }
  
  loadEpisodes()