document.addEventListener('DOMContentLoaded', function () {
    var sendMessage = document.getElementById('submit-btn');
    console.log(sendMessage);
    sendMessage.addEventListener('click', function () {
        var name = document.getElementById("name").value;
        var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
        alert('Thank you ' + nameCapitalized + '! Your message has been sent!');
    })
})


