// learn about fetch
 let $ = document.querySelector.bind(document);
 let heading = $(".joke .joke_para");
 let button = $(".joke button");
 let container = $('.joke');
 window.addEventListener('load',function(){
     async function getJoke(){
         let endpoint = "https://icanhazdadjoke.com/";
         let respone = await fetch(endpoint,{
             headers :  {
                 Accept :'application/json',
             }
         });
         // console.log(respone);
         let data = await respone.json();
        return data;
     }      
    button.addEventListener('click',function(){
        container.classList.add("is_loading");
        getJoke().then(data =>{
            container.classList.remove("is_loading");
            heading.innerText =data.joke;
        })
 })
})