function login(){
    let str = `<button onclick="user()" > login</button>
<button onclick="admin()" > admin</button>`
    document.getElementById("index").innerHTML = str;
}
window.onload = function()
{
    login()
};