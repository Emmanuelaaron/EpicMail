let user_tokenn = localStorage.getItem("token")
const getSpecificMessage =(message_id) =>{
    url = 'https://epicmail.herokuapp.com/api/v2/messages/'
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
            
            <h3>RE: ${message.data.subject}<div id="sender_email">
            Sent by: ${message.data.sender_email}
            </div></h3>
            <div id="messo">
                ${message.data.message}
            </div>
            <div class="button" id="button_del">
                <button type="submit" class="save_button"onclick="deleteSpecificMessage(${message.data.message_id})">Delete</button>
            </div>
            </div>
            `
            document.getElementById("inboxmesso").innerHTML = outPutData
        }
    })
}

const getSpecificMessageInSentBox =(message_id) =>{
    url  = 'https://epicmail.herokuapp.com/api/v2/messages/'
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
            <h3>RE: ${message.data.subject}<div id="receiver_email">
            Sent to: ${message.data.receiver_email}
            </div></h3>
            <div id="messo">
                ${message.data.message}
            </div>
            
            <div class="button" id="button_del">
                <button type="submit" class="save_button"onclick="deleteSpecificMessage(${message.data.message_id})">Delete</button>
            </div>
            </div>
            `
            document.getElementById("sent_messos").innerHTML = outPutData
        }
    })
}