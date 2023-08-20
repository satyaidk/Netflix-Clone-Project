function auth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email== "netflix@gmail.com" && password=="123456789"){
        window.location.href = "home/index.html";
        alert("Login Succesfully ");
    }
    else{
        alert("Login Failed");
        return;
    }
}