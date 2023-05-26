let x_close = document.getElementsByClassName('fa-circle-xmark')[0];
let form = document.getElementsByClassName('active_modal')[0];
let body = document.body;
console.log(body);
x_close.addEventListener('click',function(e){
        console.log('x-close');
        e.stopPropagation();
        form.classList.toggle('hide');
});
form.addEventListener('click',function(e){
        form.classList.toggle('hide');
});
body.addEventListener('click',function(e){
       console.log("body");
        form.classList.toggle('hide');
},);
