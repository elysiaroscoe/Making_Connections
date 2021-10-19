function changeName() {
    var element = document.querySelector("#myname");
    element.innerText = "Fawna Deere"
}

function removeTodd() {
    var element = document.querySelector("#todd")
    element.remove();
}

function removePhil() {
    var element = document.querySelector("#phil")
    element.remove();
}


function respondRequest() {
    var element = document.querySelector("#numrequest")
    element.innerText--;
}

function acceptRequest(){
    var element = document.querySelector("#numconnect")
    element.innerText++;
}

/* somehow i can only get the numbers to shift once. will refer to Marisa's code
Okay i totally understand where she's coming from and she simplified it so much more nicely by using id and then specifying id in the html */