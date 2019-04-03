let user_token = localStorage.getItem("token")
const inbox = () => {
    fetch('http://127.0.0.1:5000/api/v2/messages', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'x-access-token': user_token
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
                document.getElementById("no_messages").style.display = 'block'
            }
            if (message["message"] == "invalid token!") {
                document.getElementById("messageSent").innerHTML = "Please login again"
                window.location.replace("../temps/signin.html")
            }
            if (message["data"]) {
                outPutData = `<h2>My Messages</h2><hr>`
                document.getElementById("inboxmesso").innerHTML = outPutData
                document.getElementById("inboxmesso").style.display = 'block'
                document.getElementById("sent_messos").style.display = 'none'
                var i, tabcontent
                tabcontent = document.getElementsByClassName("tabcontent")
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none"
                }
                console.log(message.data)
                message["data"].forEach((mess) =>{
                    outPutData +=
                    `<div>
                        <a href="#"onclick="getSpecificMessage(${mess.message_id})"> ${mess.subject}</a>
                        <hr>
                    </div>
                    `
                })
                document.getElementById("inboxmesso").innerHTML = outPutData
            }

        })

}

