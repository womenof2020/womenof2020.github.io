document.addEventListener('DOMContentLoaded', function() {
    
    var sendMessage = document.getElementsByClassName('submit-btn');
    console.log(sendMessage);
    sendMessage.addEventListener('click', function () {
        alert('Message sent!');
    })
})
