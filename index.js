function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
    this.info = function() {
        let read = this.read ? 'was read' : 'was not read'
        console.log(`The book ${this.title}, written by ${this.author} has ${this.pages} pages and ${read}.`)
    }  
}

let book1 = new Book('O hobbit','Eu mesmo', '203', true)

book1.info()