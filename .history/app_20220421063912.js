

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
        const newRow = document.createElement('tr');
        console.log(newRow);
    }

});