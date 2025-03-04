let login=document.getElementById("login")
let sign=document.getElementById("sign")
let register=document.getElementById("register")
let reglogin=document.getElementById("reglogin")


let loginbox=document.getElementById("loginbox")
let signbox=document.getElementById("signbox")
let regbox=document.getElementById("regbox")

sign.addEventListener("click",()=>{
    loginbox.style.display="none"
    signbox.style.display="block"
    regbox.style.display="none"

})
reglogin.addEventListener("click",()=>{
    loginbox.style.display="block"
    signbox.style.display="none"
    regbox.style.display="none"

})
register.addEventListener("click",()=>{
    loginbox.style.display="none"
    signbox.style.display="none"
    regbox.style.display="block"
})
login.addEventListener("click",()=>{
    loginbox.style.display="block"
    signbox.style.display="none"
    regbox.style.display="none"
})