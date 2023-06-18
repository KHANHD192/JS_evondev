let $ = document.querySelector.bind(document);
let list_item = $('.list_item');
let endpoint = "http://localhost:3000/course";
let FormElement = $('#form1');
let button = $("button");
async function start(){
   getCoures();
   handlForm();
   handlDelete();
  }
  start();
// function 
async function getCoures(){
 let response =  await fetch(endpoint);
 let data =  await response.json();
  render(data);
}
function render(data){
    const htmls = data.map(function(item){
      return `
      <li class="list-item "data-id =${item.id}>
      <h4 style ="display:inline-block">${item.name}</h4>
            <i  class="fa-sharp fa-solid fa-xmark"></i>
            </li>
      `;
    });
    list_item.innerHTML= htmls.join("");
}
function handlForm(){
  FormElement.addEventListener('submit',function(e){
    e.preventDefault();
  let  Name = this.elements['name'].value;
  let  desr = this.elements['desc'].value;
  let data = {
    name : Name,
    desr : desr,
  }
  if(Name  && desr ){
    creatC(data);

  }
  this.elements['name'].value="";
  this.elements['desc'].value="";
  })
}
// thêm 
 async function creatC(data){
  var option = {
    method : "POST",
    body : JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
  
 let response = await fetch(endpoint,option);
 let data1 = await response.json();
 getCoures();
 }
 async function DeleteCourse(id){
   let response = await fetch(endpoint+"/"+id,{
    method : "DELETE",
   });
   let data = await response.json();
  //  console.log(data); return empty 
 }
 function handlDelete(){
  list_item.addEventListener('click',function(e){
    if(e.target.matches(".fa-xmark")){
      // console.log(e.target.parentElement);
      let id_item = e.target.parentElement.dataset.id;
      DeleteCourse(id_item);
      e.target.parentElement.remove();
    }
  })
 }