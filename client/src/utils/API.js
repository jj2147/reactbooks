import axios from "axios";

export default {
  
    searchBooks:function(title, author){

        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}`)
        .then(res => {
            return res.data.items.map(e => ({
                title: e.volumeInfo.title,
                authors: e.volumeInfo.authors,
                description: e.volumeInfo.description,
                img: e.volumeInfo.imageLinks.thumbnail,
                link: e.selfLink
            }));
        });

    },

    getBooks: function() {
        return axios.get("/api/books");
    },

    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};
