function handler_search(){
    window.addEventListener('load',hightlight);
    let value_inpu='';
    function hightlight(){
         let input = document.querySelector('.input input');
         input.addEventListener('changes',(e)=>{
            // console.log(e.target.value);
            value_input=e.target.value.toLowerCase();
            // console.log(value_input);
            let data =document.querySelectorAll('.dropdown_item');
            
          [...data].forEach((item)=>{
            const text = item.innerText.toLowerCase();    
            let index = text.indexOf(value_input) -1 ;

            if(index >= 0 && text.startsWith(value_input.charAt(1))){
              item.innerHTML="abc";
            }

          })
           
            
        })
    }
}
handler_search();