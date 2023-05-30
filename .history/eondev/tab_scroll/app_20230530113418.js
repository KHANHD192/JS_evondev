function click_sildeTab(){
   let button = document.querySelectorAll('.tab-item');
   let tab_list = document.querySelector('.tab_list');
   console.log(button);
   let ders = document.querySelectorAll('.tab_content');
   for(let i = 0 ; i < button.length ; i++){
      button[i].onclick = function(){
         // xử dụng kĩ thuật là css cứng cho 1 item đã active rồi khi click vào button khác thì chỉ việc xóa class active đó rồi gán vô class khác ! 

         let buttonCurrent = document.querySelector('.tab-item.active');
         buttonCurrent.classList.remove('active');
         button[i].classList.add('active');     
         let position = button[i].offsetLeft; 
         console.log(position);
         button[i].scroll(position/2,0);
         }
   }

}
click_sildeTab();