let users_tokenn = localStorage.getItem("token")
const createGroup =(e)=>{
    e.preventDefault()
    document.getElementById("my_groupz").style.display = 'none'
    let postData = {
        "group_name": document.getElementById("group_name").value
    }
    fetch('https://epicmail.herokuapp.com/api/v2/groups',{
        method: 'POST',
        headers: {
            'Content_type': 'application/json',
            'x-access-token': users_tokenn
        },
        body: JSON.stringify(postData)
    })
    .then((response) => response.json())
    .then(function(message){
        if (message["message"] === "Group already exists! Please choose another name"){
            document.getElementById("no_group").innerHTML = "Oops .. Group already exists! Consider another name"
        }
        if (message["message"] === "No group name inserted!"){
            document.getElementById("no_group").innerHTML = "No group name inserted!"
        }
        if (message["message"] === "sucessfully created a group"){
            document.getElementById("yes_group").innerHTML = "Created a group sucessfully!"
            window.location.reload()
        }
        
    })
}