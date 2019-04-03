let user_tokenn = localStorage.getItem("token")
const getSpecificMessage =(message_id) =>{
    url = 'http://127.0.0.1:5000/api/v2/messages/'
    fetch(url + message_id,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': user_tokenn
        }
    })
    .then((response) => response.json())
    .then(function(message){
        if (message["message"] === "invalid token!") {
            document.getElementById("messageSent").innerHTML = "Please login again"
            window.location.replace("../temps/signin.html")
        }
        else {
            console.log(message.data)
            outPutData = `<h2>My Messages</h2><hr>`
            outPutData +=
            `<div>
            <h3>${message.data.subject}</h3>
            <div>
                ${message.data.message}
            </div>
            <div id="sender_email">
                Sent by: ${message.data.sender_email}
            </div>
            <div class="button">
                <button type="submit" class="save_button"onclick="deleteSpecificMessage(${message.data.message_id})">Delete</button>
            </div>
            </div>
            `
            document.getElementById("inboxmesso").innerHTML = outPutData
        }
    })
}

const getSpecificMessageInSentBox =(message_id) =>{
    url  = 'http://127.0.0.1:5000/api/v2/messages/'
    fetch(url + message_id,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': user_tokenn
        }
    })
    .then((response) => response.json())
    .then(function(message){
        if (message["message"] === "invalid token!"){
            document.getElementById("messageSent").innerHTML = "Please login again"
            window.location.replace("../temps/signin.html")
        }
        else{
            outPutData = `<h2>Sent Messages</h2>`
            outPutData +=
            `<div>
            <h3>${message.data.subject}</h3>
            <div>
                ${message.data.message}
            </div>
            <div id="receiver_email">
                Sent to: ${message.data.receiver_email}
            </div>
            <div class="button">
                <button type="submit" class="save_button"onclick="deleteSpecificMessage(${message.data.message_id})">Delete</button>
            </div>
            </div>
            `
            document.getElementById("sent_messos").innerHTML = outPutData
        }
    })
}