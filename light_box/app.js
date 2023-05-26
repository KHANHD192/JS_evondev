function lightBox_handl() {
  let template = `<div class="lightbox">
  <div class="lightbox__content">
      
    <i class="fa fa-angle-left lightbox-previous"></i>   
      <div class="lightbox__image1">
          <img src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80" alt="">
      </div>
          <i class="fa fa-angle-right lightbox-next"></i>
      </div>
  </div>
</div>`;
 let classItemImage = document.querySelectorAll('.container__item img');
 let srcimage;
 let index;
  [...classItemImage].forEach((item)=>{
       item.addEventListener('click',function(e){
             if(e.target.matches('.lightbox__image')){
               document.body.insertAdjacentHTML('afterbegin',template);
        let imagecurrent = document.querySelector('.lightbox__image1 img');
            imagecurrent.src = e.target.src;      
              srcimage = e.target.src;
             }
       })
  })
  document.body.addEventListener('click',function(e){
  
    if(e.target.matches('.lightbox__content')){
        document.body.removeChild(e.target.parentElement);

      }else if (e.target.matches('.lightbox-next')){
  
           index = [...classItemImage].findIndex((item)=>{
               return item.src === srcimage;
           })
         
  
          if(index > classItemImage.length - 2) return ;
           document.querySelector('.lightbox__image1 img').src = classItemImage[index +1].src;
          srcimage = classItemImage[index +1].src;
         
         
            
      }else if(e.target.matches('.lightbox-previous')){
        index = [...classItemImage].findIndex((item)=>{
          return item.src === srcimage;
      })
             if(index == 0 )return;
             document.querySelector('.lightbox__image1 img').src = classItemImage[index -1].src;
             srcimage = classItemImage[index -1].src;
      }
      }
)



}
lightBox_handl();
