const pswrdField=document.querySelector(".form input[type='password']"),
toggleBnt = document.querySelector(".form .field i");

toggleBnt.onclick=()=>{
    if (pswrdField.type=="password"){ 
        pswrdField.type="text";
    
}
        else{
pswrdField.type="password"; 
toggleBnt.classList.remove("active");

         }

}