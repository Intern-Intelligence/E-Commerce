
let alertShown = false; 
let hamburger=document.getElementById('3dots');
let cross=document.getElementById('cross');
let hidden=document.getElementsByClassName('hidden')[0];
let show=document.getElementsByClassName('show')[0];
//..................
let aboutvar=document.getElementById('first');
let blog1=document.querySelectorAll('.heading2')[0];
let blog2=document.querySelectorAll('.heading2')[1];
let blog3=document.querySelectorAll('.heading2')[2];
let blog4=document.querySelectorAll('.second')[0];
let blog5=document.querySelectorAll('.second')[1];
let blog6=document.querySelectorAll('.second')[2];
//.........................
let aboutcont=document.getElementById('aboutcont');
//..............................
let connectvar=document.getElementById('Connect');
//..............................
// modal1
let modal=document.getElementById('myModal');
let openbtn=document.getElementById('openModal');
let closebtn=document.getElementById('closeModal');
// model2
let modal2=document.getElementById('myModal2');

let closebtn2=document.getElementById('closeModal2');
const form = document.getElementById("contactForm");

closebtn.addEventListener("click",()=>{
     modal.close();
});



function changer(){
        hamburger.style.display="none";
        cross.style.display="block";
        hidden.style.display="block"
        show.style.display="block"
}
function changer2(){
    hamburger.style.display="block";
    cross.style.display="none";
    hidden.style.display="none"
    show.style.display="none"
}
function color(event) {
  
    event.target.classList.toggle('active');
    if(event.target.classList.contains('active')){
      modal.showModal();
    }
    else{
      modal.close();
    }
    if (!alertShown) { 
       
        alertShown = true;
       
    }
    
      
 
 
}

function shope(){
  
  hamburger.style.display="none";
 hidden.style.display="none"
   hamburger.style.display="block"
    connectvar.style.display="none"
    aboutvar.style.display="none"
       blog4.style.display="none"
      blog5.style.display="block"
    //   about.style.display="block"
      blog1.style.display="block"
      blog2.style.display="block"
      blog3.style.display="block"
      blog6.style.removeProperty('display');
      blog4.style.removeProperty('display');
      blog5.style.removeProperty('display');
       aboutcont.style.display="none"
}
function blog(){
  hamburger.style.display="none";
   hidden.style.display="none"
   hamburger.style.display="block"
      connectvar.style.display="none"
      aboutvar.style.display="none"
    //   sh.style.display="none"
    //   show.style.display="none"
      
      blog1.style.display="none"
      blog2.style.display="none"
      blog3.style.display="block"
    //   blog6.style.display="inline-block"
    blog6.style.removeProperty('display');
      blog4.style.display="none"
      blog5.style.display="none"
    //   blog6.style.display="block"
      aboutcont.style.display="none"
}
function about(){
  hamburger.style.display="none";
  hidden.style.display="none"
   hamburger.style.display="block"
    connectvar.style.display="none"
  aboutvar.style.display="none"
  aboutcont.style.display="block"
  blog1.style.display="none"
  blog2.style.display="none"
  blog3.style.display="none"
  blog6.style.display="none"
  
  blog4.style.display="none"
  blog5.style.display="none"
}
function contact(){
    hamburger.style.display="none";
  hidden.style.display="none"
   hamburger.style.display="block"
  connectvar.style.display="block"
  aboutvar.style.display="none"
  aboutcont.style.display="none"
  blog1.style.display="none"
  blog2.style.display="none"
  blog3.style.display="none"
  blog6.style.display="none"
  
  blog4.style.display="none"
  blog5.style.display="none"
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    modal2.showModal();

 
});
  closebtn2.addEventListener("click",()=>{
    modal2.close();
    window.location.reload();
});