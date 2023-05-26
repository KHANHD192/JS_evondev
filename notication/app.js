function creatnoice (titile){
    let template = ` <div class="notice">
<div class="notice__image">
  <img src="https://plus.unsplash.com/premium_photo-1683309568422-dd7ce2288a4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="avater">
</div>
<div class="notice__desr">
    <div class="notice__desr-heading">
        <h3 class="">Welcome to notification</h3>
    </div>
    <div class="notice__content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, pariatur.
    </div>
</div>
</div>`; 
// insertAjacentHTML
let body = document.body;
body.insertAdjacentHTML('afterbegin',template);
let heading  = document.querySelector('h3');
 heading.innerText = titile;
}
const randomData = [
    'welcome to kma',
    'welcome to Hust',
    'welcome to Ptit'
];
const timer = setInterval(()=>{
   let notice = document.querySelector('.notice');
if(notice){
    document.body.removeChild(notice);
}
const titile = randomData[Math.floor(Math.random()* randomData.length)];
creatnoice(titile);


},4000);