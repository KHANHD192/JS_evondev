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
            if(index >= 0 && text.startsWith(value_input[0])){
              // if(value_input === null){
              //   console.log('haha');
              //   let sliceString = text.slice(0,text.length);
              // }
              let sliceString = text.slice(value_input.length,text.length);
              console.log(sliceString);
              console.log(value_input.length);
                  item.innerHTML=`
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <span class = 'primary'>${text.substring(index,index+value_input.length).toUpperCase()}</span>${text.substring(index+value_input.length).toUpperCase()}`;
                    
                }


          })
           
            
        })
    }
}
handler_search();