// // 
// function accodion_hander() {
//     let heading = document.querySelector('.accodion-heading');
//     let caret_down = document.querySelector('.icon');
// if(caret_down){
//     heading.addEventListener('click',(e)=>{
//           let content_element = document.querySelector('.accodion-content');
//           console.log(content_element);
//           if(content_element){
//              content_element.classList.toggle('hide');
//            let icon = document.querySelector('.fa-sharp');
//               if(icon.classList.contains('fa-caret-down')){
//                 icon.classList.add('fa-caret-up');
//                 icon.classList.remove('fa-caret-down');
//               }else {
//                 icon.classList.remove('fa-caret-up');
//                 icon.classList.add('fa-caret-down');
//               }
//           }
//      })
// }
// }
// accodion_hander();


// xu li giong evondev 
let accodionHeader = document.querySelectorAll('.accodion-heading');
[...accodionHeader].forEach((item) =>{
   item.addEventListener('click',handeClick);

});
function handeClick(e){
    console.log( e.target.nextElementSibling);
    let content =  e.target.nextElementSibling;
    content.classList.toggle('hide'); // ko phải query nhiều ! 
    // change icon 
    let icon = document.querySelector('.fa-sharp');
    icon.classList.toggle('fa-caret-down');
    icon.classList.toggle('fa-caret-up');
    // xu li animation
    //scrollHeight : chiều cao của phần tử bao gồm cả padding 
    content.style.height= `${content.scrollHeight}px`;

}