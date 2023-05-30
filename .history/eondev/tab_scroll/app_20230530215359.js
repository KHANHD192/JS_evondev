function click_sildeTab(){
   let button = document.querySelectorAll('.tab-item');
   let tab_list = document.querySelector('.tab_list');
   let ders = document.querySelectorAll('.tab_content');
   var index;
   for(let i = 0 ; i < button.length ; i++){
      button[i].onclick = function(){
         // xử dụng kĩ thuật là css cứng cho 1 item đã active rồi khi click vào button khác thì chỉ việc xóa class active đó rồi gán vô class khác ! 

         let buttonCurrent = document.querySelector('.tab-item.active');
         buttonCurrent.classList.remove('active');
         button[i].classList.add('active'); 
             // bên trái so với parent chứa nó ! 
         let position = button[i].offsetLeft; 
         console.log(position);
         tab_list.scroll(position/2-40,0);
         }
   }
   let icon = document.querySelectorAll('.fa-solid');
   document.addEventListener('click',function(e){
      if (e.target.matches('.fa-angle-right')){
          index = [...button].findIndex(function(item){
               return item.classList.contains('active');
            
          })      
             if(index < button.length-1){
                    button[index].classList.remove('active');
            
             index++;
             button[index].classList.add('active');
             let position = button[index].offsetLeft; 
             tab_list.scroll(position/2+20,0);
             }
      }
      else(e.target.matches('.fa-angle-left')){
          index = [...button].findIndex(function(item){
               return item.classList.contains('active');
            
          })      
             if(index >= 0){
                    button[index].classList.remove('active');
            
             index--;
             button[index].classList.add('active');
             let position = button[index].offsetLeft; 
             tab_list.scroll(position/2+20,0);
             }
      }
   })

}
click_sildeTab();