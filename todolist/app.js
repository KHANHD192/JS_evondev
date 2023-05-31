window.addEventListener('load',function(){
   // lay data ! 
   let formElent = document.querySelector('.input');
   let index;
   let todos = localStorage.length > 0 ? JSON.parse(localStorage.getItem('todolist')) : [];
   // local storage restore !
   if( todos.length > 0){
    todos.forEach((item)=>{
        creatItem(item);
    })
   }
   function creatItem(title) {
    let template =` <div class="todo_item">
    <div class="status"></div>
    <div class="heading">${title}</div>
    <div class="ders">Expire: 10am today </div>
    <i class="fa-solid fa-trash"></i>
 </div>`;
    document.querySelector('.todo_list').insertAdjacentHTML('beforeend',template);
   } 
   function deleteItem(){
     document.querySelector('.container').addEventListener('click',function(e){
        if(e.target.matches('.fa-trash')){
            //remove in DOM
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            //REMOVE IN local storega
          if(todos){
            const todo_text = e.target.previousElementSibling.previousElementSibling.innerText;
            index = todos.findIndex((item) =>{
                 return item === todo_text;
             })
            todos.splice(index,1);
            localStorage.setItem('todolist',JSON.stringify(todos));
          }

        }
     })
   }
   formElent.addEventListener('submit',function(e){
      e.preventDefault();
     var todo_value = this.elements['todo'].value;
// main code 
if(todo_value){
    creatItem(todo_value);
    todos.push(todo_value);
    localStorage && localStorage.setItem('todolist',JSON.stringify(todos));

}

 //save to local storage 
     this.elements['todo'].value='';
   })
   deleteItem();
})