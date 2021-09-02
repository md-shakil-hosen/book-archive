let searchItem = () => {
    let result = document.getElementById('result')
    const searchBtn = document.getElementById('search-button')
    let inputField = document.getElementById('input-field')
    let inputData = inputField.value;
    inputField.value = '';
    let url = `http://openlibrary.org/search.json?q=${inputData}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs.slice(0, 50)))
}
// Show Display 
const displayBook = books => {
    const bookField = document.getElementById('book-field');
    books.forEach(book => {
        // Show Display Book Result 0 - 30
        result.innerHTML = `<h2 class = "text-center ">Search Result ${books.length} Found</h2>`;
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
                <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg " class="card-img-top" id="image" alt="Image">
                <div class="card-body">
                <h6 class="card-title"><span>Book Title: </span>${book.title}</h6>
                  <h6 class="card-title">Author name: ${book.author_name}</h6>
                  <h6 class="card-title">First publish: ${book.first_publish_year}</h6>
                  <h6 class="card-title">Publisher: ${book.publisher}</h6>
                </div>
            `
        bookField.appendChild(div);

    });
}