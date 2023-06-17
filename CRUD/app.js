let $ = document.querySelector.bind(document);
let list_item = $('.list_item');
let endpoint = "http://localhost:3000/course";
let FormElement = $('#form1');
let button = $("button");
async function start(){
   getCoures();
   handlForm();

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
            <li>
                <h4>${item.name}</h4>
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
     creatC(data);
  })
}

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
  console.log(data1);
 }