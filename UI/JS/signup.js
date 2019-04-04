const signUp = (e) => {
    let signup = document.getElementById("signup_form")
    e.preventDefault()
    let formData = new FormData(signup);
    let postData = {
        "email": formData.get("email"),
        "firstname": formData.get("firstname"),
        "lastname": formData.get("lastname"),
        "password": formData.get("password")

    }
    fetch('https://epicmail.herokuapp.com/api/v2/auth/signup', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then((response) => response.json())
        .then(function (message) {
            if (message['message'] === "Email already exists! Choose another") {
                document.getElementById("validator").innerHTML = "Email already exists! Choose another"
            }
            // if (message["message"])
            else if (message['errors']) {
                console.log(message['errors'])
                console.log(message['errors'].length)
                for (let errorCount = 0; errorCount < message['errors'].length; errorCount++) {
                    if (message['errors'][errorCount].missing === "All fields must be filled") {
                        document.getElementById("validator").innerHTML = "One of the fields is empty"
                    }
                    else if(message["errors"][errorCount].message === "Invalid email") {
                        document.getElementById("validater").innerHTML = "Invalid Email!"
                    }
                }
            }
            else if (message['message'] === "Invalid email"){
                document.getElementById("validator").innerHTML = "Invalid email"
            }
            if (message['message'] === `congrats ${formData.get("firstname")}! you've sucessfully signed up!`) {
                window.location.replace('../temps/dashboard.html')
                let token = message["token"]
                localStorage.setItem("token", token)
    
            }
        })

}

