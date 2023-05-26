let icon = document.querySelectorAll('i');
let number = document.querySelector('span');
let number_value = 0;
icon[0].addEventListener('click',(e)=>{
    if(number_value != 0){
         console.log(e.target);
            number_value--;
            number.innerText = number_value;
    }
})
icon[1].addEventListener('click',(e)=>{ 
         console.log(e.target);
            number_value++;
            number.innerText = number_value;
    
})