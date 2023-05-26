function link_hover(){
    let links = [...document.querySelectorAll('.list li')];
    const line = document.createElement('div');
    line.classList.add('line-effect');
    document.body.append(line);
   links.forEach((item)=>{
   item.addEventListener('mouseenter',handler);
  
 });
 function handler(e){
      const {left,top,height,width} = e.target.getBoundingClientRect();
      console.log( {left,top,height,width});
       line.style.width= `${width}px`;
       line.style.left = `${left}px`;
       
       line.style.top = `${top + height + 2 }px` ;
 }
 let menu = document.querySelector('.container');
 menu.addEventListener('mouseleave',(e) =>{
     line.style.width = '0px';
 })
}
link_hover();