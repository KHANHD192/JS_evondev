let button = document.querySelector('button');
const Color_array = ['red','blue','green','yellow','pink'];
let color_random;
button.addEventListener('click',()=>{
   color_random = document.body.style.backgroundColor;
     let color  = Color_array[Math.floor(Math.random() * Color_array.length)];   
  if(color_random == color ){
        color=Color_array[Math.floor(Math.random() * Color_array.length)]; 
  }
    document.body.style.backgroundColor= color;
});