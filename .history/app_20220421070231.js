

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');


btn.addEventListener('click', function(e){

    e.preventDefault();

    // input must be field
    if(title.value == '' && author.value == '' && year.value == ''){
        alert('Vi kusi akta dan');
    }else{
        // Title Row make
        const newRow = document.createElement('tr');

        // Title Header make
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        

        // Title Header make
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = title.value;
        newRow.appendChild(newAuthor);
        

        // Title Header make
        const newYear = document.createElement('th');
        newYear.innerHTML = title.value;
        newRow.appendChild(newYear);
        
        newRow.appendChild(newRow);
    }

});