document.querySelector("form").addEventListener("submit",regApply);

let regArr=JSON.parse(localStorage.getItem("regArr"))||[];

function regApply(event){
    event.preventDefault();
    console.log("hi");
    let regObj={
        personal_name:document.querySelector("#name").value,
        personal_email:document.querySelector("#email").value,
        personal_password:document.querySelector("#password").value,
        personal_mobno:document.querySelector('#mobno').value
    };
    regArr.push(regObj);
    localStorage.setItem("regDetail",JSON.stringify(regArr));
    window.location.href = "./login.html";
}