console.log("hello ")
var istataic=document.querySelector("h5");
var button=document.querySelector(".add");
var falge=2;
console.log(button)
console.log(istataic)
button.addEventListener("click",function(){
  if(falge%2===0)
  {
    istataic.innerHTML="Friend";
    istataic.style.color="green"; 
    button.innerHTML="Friend";
    button.style.fontWeight="30px"
    falge++;
  }
  else{
    istataic.innerHTML="Stranger";
    istataic.style.color="red";
    button.innerHTML=" Add Friend"; 
    falge++;
  }

})
