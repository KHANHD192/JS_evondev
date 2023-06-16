 let $ = document.querySelector.bind(document);
 let container_image = $('.image');
 let button = $('button');
 let limit_number = 8;
 let page = 1;
/*
<div class="image-item">
        <img src="https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="">
    </div>
*/ 
function creatItem(url){
    let template = `<div class="image-item">
    <img src=${url} alt="">
</div>` ;
   container_image.insertAdjacentHTML("beforeend",template);
}
 window.addEventListener('load',function(){
       async function getImage(limit_number,page = 1 ){     
        let endpoint = `https://picsum.photos/v2/list?page=${page}&limit=${limit_number}`;
        //api provide limit item ! 
            let response = await fetch(endpoint);
            let data = await response.json();
            return data ;
       }    
        getImage(limit_number).then(data =>{
        data.forEach(item =>{
            creatItem(`${item.download_url}`);
            button.style.display ="block";
        })
       

        })
        button.addEventListener('click',function(){
            button.classList.add('is_loading');
            // limit_number+=8;
            page++;
            getImage(limit_number,page).then(data =>{
                data.forEach(item =>{
                    creatItem(`${item.download_url}`);
                    button.classList.remove('is_loading');

                })
                
        })

 })
})