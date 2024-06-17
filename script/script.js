

const episodios = [
    {
        id: 1,
        img: '/imgs/oip01.jpeg',
        tempo: '24min'
    },
    {
        id: 2,
        img: '/imgs/oip02.jpeg',
        tempo: '26min'
    },
    {
        id: 3,
        img: '/imgs/oip03.jpeg',
        tempo: '29min'
    },
]

const listaEpisodios = document.getElementById('lista-episodios')

episodios.forEach(episodio => {
    const cardEpisodio = document.createElement('div')
    cardEpisodio.className = 'card-episodio'
    cardEpisodio.innerHTML = `
                        <span>${episodio.img}</spam>
                        <span>${episodio.tempo}</span>
                        <button onclick="assistirEpisodio(${episodio.id})">Assistir</button>
                        `
    listaEpisodios.appendChild(cardEpisodio)
})

function assistirEpisodio(id) {
    console.log('clicou para assistir o episódio ', id)            
}

function listaSobre() {
    alert('Pagina em construção')
}

function listaTrailer() {
    alert('Pagina em construção')
}

function listaAtores() {
    alert('Pagina em construção')
}

function listaAvaliacoes() {
    alert('Pagina em construção')
}