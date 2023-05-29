 function Scroll() {
    let boxed = document.querySelector('.box');
     if(boxed){
        boxed.addEventListener('scroll',function(){
                //  console.log(boxed.scrollTop);  
                console.log('offsetWidth'+boxed.offsetWidth);   
                console.log("scrollWidth" +boxed.scrollWidth);   
        })
     }
 }
 Scroll();