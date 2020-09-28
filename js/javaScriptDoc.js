document.addEventListener('DOMContentLoaded', function() {
    
    var newsLetter = document.getElementById('submitButton');
    console.log(newsLetter);
    newsLetter.addEventListener('click', function () {
        alert('Message sent!');
    })
})
