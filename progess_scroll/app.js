function handler () {
    let progess = document.querySelector('.progess');
    let  menu = document.querySelector('.menu');
    let image = document.querySelector('.background img');
    console.log(menu.getBoundingClientRect());
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset > image.getBoundingClientRect().top){
            menu.classList.add('fixed');
            document.querySelector('.container_head').classList.add('has_space');
       }else {
        menu.classList.remove('fixed');
        document.querySelector('.container_head').classList.remove('has_space');
       }
    })
    window.addEventListener('scroll',function(){
        // Lấy ra position đang ở hiện tại
        const scrollTop = window.pageYOffset;
        const height = 
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // scrollHeight : lấy ra height làm xuất hiện scroll , là tất cả 
        // clientHeight :  chính là màn hình chúng ta nhìn thấy trước khi scroll ( khung nhìn của user)
        // trừ đi thì được số px của height có thể scroll 
        const width_percent = (scrollTop / height) * 100;
       progess.style.width =`${width_percent}%`;
    })
}
handler();