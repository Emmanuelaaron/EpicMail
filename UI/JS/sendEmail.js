let token = localStorage.getItem("token")
const sendEmail = (e) => {
    e.preventDefault()
    let postData = {
        "subject": document.getElementById("subject").value,
        "message": document.getElementById("messageBody").value,
        "receiver_id": document.getElementById("receiver").value
    }
    fetch('http://127.0.0.1:5000/api/v2/messages', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'x-access-token': token
        },
        body: JSON.stringify(postData)
    })
    .then((response) => response.json())
    .then(function(message){
        if (message["message"] === "You can't send a message to your self"){
            document.getElementById("invalidUser").innerHTML = "Oops ... You can't send a message to your self"
        }
        if (message["message"] === "Oops... Reciever does not exist on this app"){
            document.getElementById("invalidUser").innerHTML = "User with this Id does not exist"
        }
        if (message["missing"] === "All fields must be filled"){
            document.getElementById("invalidUser").innerHTML = "Empty fields somewhere! Check your fields well"
        }
        if (message["message"] == "message sent"){
            document.getElementById("messageSent").innerHTML = "message Sent"
            window.location.reload()
        }
        if (message["message"] == "invalid token!"){
            document.getElementById("messageSent").innerHTML = "Please login again"
            window.location.replace("../temps/signin.html")
        }
        
    })
}