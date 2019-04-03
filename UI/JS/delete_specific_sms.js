let userr_token = localStorage.getItem("token")
const deleteSpecificMessage =(message_id) => {
    url = 'https://epicmail.herokuapp.com/api/v2/messages/'
    fetch(url + message_id,{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': userr_token
        }
    })
    .then((response) => response.json())
    .then(function(message){
        if (message["message"] == "invalid token!") {
            document.getElementById("messageSent").innerHTML = "Please login again"
            window.location.replace("../temps/signin.html")
        }
        else{
            alert("message deleted!")
            window.location.replace("../temps/dashboard.html")
        }
    })
}