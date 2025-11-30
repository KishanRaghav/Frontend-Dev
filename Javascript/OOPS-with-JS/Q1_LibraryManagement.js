// Q1 Library Management
class Library {
    constructor() { this.books = []; }
    addBook(book) { this.books.push(book); }
    getAvailableBooks() { return this.books.filter(b => b.available); }
    searchByAuthor(author) { return this.books.find(b => b.author === author); }
}

let lib = new Library();
lib.addBook({ title: "JS Basics", author: "Kishan", available: true });
lib.addBook({ title: "Python Intro", author: "Aman", available: false });
lib.addBook({ title: "AI Guide", author: "Raghav", available: true });

console.log("Available:", lib.getAvailableBooks());
console.log("Search by author:", lib.searchByAuthor("Raghav"));
