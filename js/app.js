function validatePassword(){
    console.log("[loginButton]");

    let password = document.getElementById("password").value;
    console.log(password);
    if(password.length<8){
        alert("length should be greater than 7");
    }
    var pat=/(?=.*[a-z])/
    var uPat=/(?=.*[A-Z])/
    if(!(pat.test(password))){
        alert("should contain atleast one lowercase char");
    }
    if(!(uPat.test(password))){
        alert("should contain atleast one uppercase char");
    }
}

function onmouseout(){
    document.getElementById("loginButton").style.background="yellowgreen"; 
}
function colorchange(){
    console.log("[colorchange]");
    document.getElementById("loginButton").style.background="#008000";
}
function cancel(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}
//validatePassword("pooj")
