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
    request = 2;
    request--;
    element.innerText = request;
}

function acceptRequest(){
    var element = document.querySelector("#numconnect")
    connect = 500;
    connect++;
    element.innerText = connect;
}

/* somehow i can only get the numbers to shift once. will refer to Marisa's code*/