window.addEventListener('load',function(){
 function validator(){
    let formElment = document.querySelector('.form1');
    function handler(e){
        e.preventDefault();
        // main code 
         let inputElement = this.elements['email'];
    // email pattern :  username123@domain.com
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
       if(regex.test(inputElement.value)){
           let icon = document.querySelector('.fa-circle-check');
         
           icon.classList.add('active');
       }

         // reset value 
        
    } 
    if(formElment){
        formElment.addEventListener('submit',handler);
    }
 }
validator();



})