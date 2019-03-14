function openPage(PageName){
    var i, tabcontent
    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none"
    }
    document.getElementById(PageName).style.display = "block"
}

function resetPassword(){
    alert("We've sent you an email containing password reset settings!");   
}