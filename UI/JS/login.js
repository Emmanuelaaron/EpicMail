const signIn = (e) => {
    let logIn = document.getElementById('login-form')
    e.preventDefault()
    let postData = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }
    fetch('https://epicmail.herokuapp.com/api/v2/auth/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(postData)
    })
    .then((response) => response.json())
    // alert("dsghd")
    .then(function(message){
        if (message["missing"] === "All fields must be filled"){
            document.getElementById("validator").innerHTML = "one of the fields is empty!"
        }
        if (message["message"] === "Oops... Invalid login credentials"){
            document.getElementById("validator").innerHTML = "Invalid Login credentials"
        }
        if (message["token"] && message["message"] === "sucessfully logged in"){
            window.location.replace("../temps/dashboard.html")
            let token = message["token"]
            localStorage.setItem("token", token)
            
        }
    })
}