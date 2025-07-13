let myLibrary = []

let book_id = 0
function Book(title,author,pages,read) {
    if (!new.target) {
        throw new Error('Você deve criar um novo objeto utilizando new')
    }
    this.id = book_id
    book_id++
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
    this.info = function() {
        let read = this.read ? 'was read' : 'was not read'
        console.log(`The book ${this.title}, written by ${this.author} has ${this.pages} pages and ${read}.`)
    }  
}

function addBook(title,author,pages,read) {
    myLibrary.push(new Book(title,author,pages,read))
}

function displayBooks(arr) {
    let div = document.querySelector('.cards')
    div.innerHTML = ''
    for (let book of myLibrary) {
        let newDiv = document.createElement("div")
        newDiv.classList.add('card')
        newDiv.setAttribute('data-id',book.id)
        newDiv.innerHTML = `
            <div class='titulo'>${book.title}</div>
            <div class='autor'>${book.author}</div>
            <div class='pages'>${book.pages}</div>
            <div class='read'>${book.read ? 'lido' : 'Não lido'}</div>
            <button class='remove' data-id=${book.id}>Remover Livro</button> 
            `
        div.appendChild(newDiv)
    }
    document.querySelectorAll('.remove').forEach((div) => div.addEventListener('click', (e) => {document.querySelector(`.card[data-id='${e.target.getAttribute('data-id')}']`).remove()
    myLibrary = myLibrary.filter((book) => book.id != e.target.getAttribute('data-id'))
    console.log(myLibrary)
    }))   
}

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('dialog').showModal()
    console.log('clique')
})

const form = document.querySelector("form")
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(form)
    let infoArr = []
    for (let [key, value] of formData) {
        infoArr.push(value)
    }

    addBook(...infoArr)
    displayBooks()
    setTimeout(() => {
        form.reset()
    }, 2);
    document.querySelector('dialog').close()
    alert('Livro adicionado!')
})

addBook('O senhor dos aneis', 'um autor', 230,true)
addBook('Biblia', 'Deus', 2000,true)

displayBooks(myLibrary)

console.log(myLibrary)