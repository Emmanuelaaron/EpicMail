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
    fetch('http://127.0.0.1:5000/api/v2/auth/signup', {
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
            if (message['errors']) {
                console.log(message['errors'])
                console.log(message['errors'].length)
                for (let errorCount = 0; errorCount < message['errors'].length; errorCount++) {
                    if (message['errors'][errorCount].missing === "All fields must be filled") {
                        document.getElementById("validator").innerHTML = "One of the fields is missing"
                    }
                }
            }
            if (message['message'] === `congrats ${formData.get("firstname")}! you've sucessfully signed up!`) {
                window.location.replace('../temps/signin.html')
            }
        })

}

