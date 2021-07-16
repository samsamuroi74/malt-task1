//console.log("hello");

function suBmit() {
    nameFilled();
    emailFilled();
    numberFilled();
    passwordChecker();
}


function nameFilled() {
    
    let a = document.getElementById("name");

    if (a.value.trim() == "") {
        document.getElementById("name-text").style.visibility = "visible";
        return false;
    }
    else {
        document.getElementById("name-text").style.visibility = "hidden";
        return false;
    }
}
function emailFilled() {
    let b = document.getElementById("email");

    if (b.value.length<11) {
        document.getElementById("email-text").style.visibility = "visible";
        return false;
    }
    else {
        document.getElementById("email-text").style.visibility = "hidden";
        return false;

    }
}
function numberFilled() {
    let c = document.getElementById("tel");

    if (c.value.length<10) {
        document.getElementById("number-text").style.visibility = "visible";
        return false;
    }
    else {
        document.getElementById("number-text").style.visibility = "hidden";
        return false;

    }
}
function passwordChecker() {
    let d = document.getElementById("password1");
    let e = document.getElementById("password2");
    if (d.value.length == 0|| e.value.length==0) {
        document.getElementById("pswd-text3").style.visibility = "visible";
    }
    if (d.value.length < 8  ) {
        document.getElementById("pswd-text1").style.visibility = "visible";
        if(d.value !== e.value){
            document.getElementById("pswd-text2").style.visibility = "visible";
            return false;
        } else {
            document.getElementById("pswd-text1").style.visibility = "hidden";
        document.getElementById("pswd-text2").style.visibility = "hidden";
    }
    }
    else {
        console.log("both conditions are checked")
    }

}

