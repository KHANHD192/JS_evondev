function handler () {
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
}
handler();