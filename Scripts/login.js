document.querySelector("form").addEventListener("submit",login);
let account=JSON.parse(localStorage.getItem("regDetail"));

function login(event){
    event.preventDefault();
    let email=document.querySelector("#emaillog").value;
    let password=document.querySelector("#passwordlog").value;
    account.forEach(function(el){
        if(email==el.personal_email && password==el.personal_password)
        {
            localStorage.setItem("Name",el.personal_name);
            window.location.href = "./profile.html";
        }
    })
}
