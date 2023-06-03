window.addEventListener('load',function(){
    let slider = document.querySelector('.slider');
    let silder_main = document.querySelector('.slider_main');
    let silder_dots_item = document.querySelectorAll('.slider_dots-item');
    let ArrayItem = document.querySelectorAll('.slider_main .slider_item');
    let currentPosition = 0 ; // lấy số px cần dịch dựa vào current ! , mỗi lần sẽ dịch chuyển số px bằng width của img nên cần lưu lại !
    let index=0;  // tham chiếu vào dots ! 
    let widthOfItem = ArrayItem[0].offsetWidth;
    if(slider){
        slider.addEventListener('click',handler);
        silder_dots_item[index].classList.add('active');
    }
    function handler(e){
        // setdefault
              if(e.target.matches('.fa-arrow-right') && index < ArrayItem.length -1 ){
                  currentPosition -= widthOfItem;
                  silder_main.style.left =`${currentPosition}px`;
                  index++;   
                
                  document.querySelector('.slider_dots-item.active').classList.remove('active');
                  silder_dots_item[index].classList.add('active');

            }else if(e.target.matches('.fa-arrow-left') && index >0){
                currentPosition += widthOfItem;
                silder_main.style.left =`${currentPosition}px`;
                index--;
                document.querySelector('.slider_dots-item.active').classList.remove('active');
                silder_dots_item[index].classList.add('active');
            }else if(e.target.matches('.slider_dots-item')){
                silder_main.style.left =`${e.target.dataset.index * -widthOfItem}px`;
                index=e.target.dataset.index;
                document.querySelector('.slider_dots-item.active').classList.remove('active');
                silder_dots_item[index].classList.add('active');
            }
             

     }
});