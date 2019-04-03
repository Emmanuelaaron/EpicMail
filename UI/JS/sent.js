let userrr_token = localStorage.getItem("token")
const getSentMessages = () => {
    fetch('http://127.0.0.1:5000/api/v2/messages/sent', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': userrr_token
        }
    })
        .then((response) => response.json())
        .then(function (message) {
            if (message["message"] === "Oops..you do not have any messages!") {
                let tab, tabcontent
                tabcontent = document.getElementsByClassName("tabcontent")
                for (tab = 0; tab < tabcontent.length; tab++) {
                    tabcontent[tab].style.display = "none"
                }
                document.getElementById("no_sent").style.display = 'block'
                document.getElementById("inboxmesso").style.display = 'none'
            }
            if (message["message"] == "invalid token!") {
                document.getElementById("messageSent").innerHTML = "Please login again"
                window.location.replace("../temps/signin.html")
            }
            if (message["data"]){
                outPutData = `<h2>Sent Messages</h2><hr>`
                document.getElementById("sent_messos").innerHTML = outPutData
                document.getElementById("sent_messos").style.display = 'block'
                document.getElementById("no_messages").style.display = 'none'
                console.log(message["data"])
                message["data"].forEach((mess) =>{
                    outPutData +=
                    `<div>
                        <a href="#"onclick="getSpecificMessageInSentBox(${mess.message_id})"> ${mess.subject}</a>
                        <hr>
                    </div>`
                    console.log(mess.message_id)
                })
                document.getElementById("sent_messos").innerHTML = outPutData
                
            }
        })
}