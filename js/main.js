var Container =document.querySelector('.container');
var SignInLink =document.querySelector('.signin-link');
var SignUpLink =document.querySelector('.signup-link');
var ContactSignin=document.querySelector('.contact');
var signinContent = document.querySelector(".signinContent");
var signupContent = document.querySelector(".signupContent");
var Contact=document.querySelector('.contact-signin');
var emailSgin =document.querySelector(".email-sgin");
var passSgin =document.querySelector(".pass-sgin");
var userName =document.querySelector(".name-sgup");
var email =document.querySelector(".email-sgup");
var pass =document.querySelector(".pass-sgup");
var par =document.querySelector(".par");
var par1 =document.querySelector(".par1");
var signUp =document.querySelector(".sign-up");
var signIn =document.querySelector(".sign-in");
var Home=document.querySelector('.home');
var logOut=document.querySelector('#logout');
var username=document.querySelector('#username');
var allarry = [];

SignUpLink.addEventListener("click", function () {
    signinContent.classList.remove("d-none");
    signupContent.classList.add("d-none");
  });
  SignInLink.addEventListener("click", function () {
    signinContent.classList.add("d-none");
    signupContent.classList.remove("d-none");
  
  });

  logOut.addEventListener("click", function () {
    Home.classList.add("d-none");
    signinContent.classList.remove("d-none");
    clear();
  });

if(localStorage.getItem("allarry") ==null ){
    allarry=[];
    

}else{
           allarry = JSON.parse(localStorage.getItem("allarry"));
        }

function requireDataUp(){
if(userName.value ==="" || email.value ==="" || pass.value ===""){
par.innerText=  "ALL inputs is required"; 
 
}


else if(userName.value !== null && email.value !== null  && pass.value !== null && vaildmail() ){
    var elemnt ={
        userName:userName.value,
        email:email.value,
        pass:pass.value,
    }
    checkUp();
par.innerText= "success";
par.classList.replace('text-danger','text-success');
allarry.push(elemnt); 
localStorage.setItem("allarry",JSON.stringify(allarry));
signUp.addEventListener("click", function () {
    signupContent.classList.add("d-none");
    signinContent.classList.remove("d-none");
    adname();
  });
}

else{
par.innerText="incoreect email";
par.classList.replace('text-success','text-danger')
}
console.log(elemnt);

}




function requireDataIn(){
    if(emailSgin.value ==="" || passSgin.value ===""){
       par1.innerText=" ALL inputs is required"; 
    }
    else if(emailSgin.value ===email.value  && passSgin.value ===pass.value ){
        var elemnt ={
            emailSgin:email.value,
            passSgin:pass.value,
        }
        signIn.addEventListener("click", function () {
            signinContent.classList.add("d-none");
            Home.classList.remove("d-none");
          });
          
    allarry.push(elemnt); 
    localStorage.setItem("allarry",JSON.stringify(allarry));
    
    
    
    }else{
    par1.innerText="incoreect email or passowrd";
    par1.classList.replace('text-success','text-danger')
    }
    }

    function vaildmail(){
        var emailregex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
        var testing =emailregex.test(email.value);
    if(testing===true){
     email.style.color="green";
    
      return true;
    }else{
        return false
    }
    }

    function checkUp(){
        for(var i =0;i < allarry.length;i++){
            if(allarry[i].email === email.value){
                par.innerText=" email is exist";   
            }
        }
    }
function clear(){
email.value=null;
pass.value=null;
}

function adname(){
    var usernam=JSON.parse(localStorage.getItem("userName"));
    username.innerHTML=`welcome ${usernam}`;

}
