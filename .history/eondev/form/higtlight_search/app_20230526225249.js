function handler_search(){
    window.addEventListener('load',hightlight);
    let value_input='';
    let data =document.querySelectorAll('.dropdown_item');
    function hightlight(){
         let input = document.querySelector('.input input');
         input.addEventListener('input',(e)=>{
            // console.log(e.target.value);
            value_input =e.target.value;
            value_input =value_input.toLowerCase();
           
            
          [...data].forEach((item)=>{
            const text = item.innerText.toLowerCase().trim();    
            let index = text.indexOf(value_input);
            // console.log(value_input);
            console.log(text);
          console.log(index);
          console.log(text.startsWith(value_input[0]));
            if(index >= 0 && text.startsWith(value_input[0])){
               text.innerHTML = "avc";
            }

          })
           
            
        })
    }
}
handler_search();