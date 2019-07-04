function validatePassword(password){
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
function colorchange(){
    document.getElementById("login").style.background="#008000";
}
function cancel(){
    document.getElementById("username").innerHTML="";
    document.getElementById("password").innerHTML="";
}
//validatePassword("pooj")
cancel();