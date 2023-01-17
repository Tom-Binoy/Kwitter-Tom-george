function login(){
    user = document.getElementById("name").value;
    localStorage.setItem("user",user);
    window.location = "kwitter_room.html";
}