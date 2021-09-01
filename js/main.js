
// Search Function 
const searchInput = () => {
    const searchInput = document.getElementById('search-Input');
    const searchText = searchInput.value;
    searchInput.value = '';
}
// Book Data Load 
const url = `http://openlibrary.org/search.json?q=javascript`;
fetch(url)
    .then(res => res.json())
    .then(data => displayBookResult(data.docs))

const displayBookResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    // book Search 
    docs.forEach(doc => {
        console.log(doc.title)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <img src="${'https://covers.openlibrary.org/b/id/554106-M.jpg'}" class="card-img-top" alt="...">
        `;
        searchResult.appendChild(div)


    });
}

// book details 
const displayBookDetails = doc => {
    console.log(doc)
    const bookDetails = document.getElementById('book-details');
    bookDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card-body">
    <h4>${doc.subject}</h4>
    <h5>${doc.author_name}</h5>
        <h6 class="card-title">${doc.publish_date}</h6>
    </div>
</div>
    `;
    bookDetails.appendChild(div);
}
