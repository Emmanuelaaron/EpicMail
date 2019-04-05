let users__tokennn = localStorage.getItem("token")
console.log("groups_token", users__tokennn)
const myGroups =()=>{
    fetch('https://epicmail.herokuapp.com/api/v2/groups',{
        method: 'GET',
        headers: {
            'Content_type': 'application/json',
            'x-access-token': localStorage.getItem("token")
        }
    })
    .then((response) => response.json())
    .then(function(message){
        if (message["message"] === "Oops .. You're not in any group!"){
            alert("You do not have any groups")
        }
        else{
            console.log(message.message)
            outPutData = `<h2>My Groups</h2><hr>`
            document.getElementById("my_groupz").innerHTML = outPutData
            document.getElementById("no_messages").style.display = 'none'
            document.getElementById("sent_messos").style.display = 'none'
            message.message.forEach((grp) =>{
                outPutData +=
                ` ${grp}
                <hr>
                `

            })
            document.getElementById("my_groupz").innerHTML = outPutData
            document.getElementById("my_groupz").style.display = 'block'
            document.getElementById("create_group").style.display = 'none'
        }
    })
    
}