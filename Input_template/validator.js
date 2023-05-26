// bài toán viết nó ra có thể sử dụng ở các form khác ! 
// khoi tao function (cung la 1 object)
 function validator (option) {

  function getParent(element,selector){
    while(element.parentElement){
      if(element.parentElement.matches(selector)){
               return element.parentElement;
              }
              element = element.parentElement;
  }
}
   var selectorRules = {};
    //  console.log(option); // bên script bên kia đã truyền 1 object vào đây ! 
   function validate(inputElement,element){ // hàm validate
    let messageElment = formElement.querySelector(`${element.selector} ~ span`);
      let messageError; // nếu mà ở đây sự kiện oninput value được update liên tục
      // lấy ra rules của thẻ đó ! 
    let Rules = selectorRules[element.selector];
        for(let i = 0 ; i < Rules.length ;i++){
         messageError = Rules[i](inputElement.value);
         if(messageError){
           break;
         } 
        }
      // set text to textnode 
       if(messageError){
         inputElement.classList.add('invalid');
       messageElment.innerText =messageError;
       }else {
         inputElement.classList.remove('invalid');
         messageElment.innerText ="";
       }
       return !(messageError);
     }   
     //lấy element của form cần validate
    let formElement = document.querySelector(option.form);
  
       if(formElement){
        // xử lí submit và lấy data ra ! 
        formElement.onsubmit = function (e){
              e.preventDefault();
              // lặp qua từng rules và validate hết !
              let isFormValid = true;
              option.rules.forEach(function(element){
                let inputElement = formElement.querySelector(element.selector); 
                    let isValid = validate(inputElement,element);
                    if(!isValid){
                        isFormValid = false;
                    }
              })
              let formEnableInput = formElement.querySelectorAll('[name]:not([disable])');
              // CONVERT NODELIST QUA ARRAy 
              let formValues = Array.from(formEnableInput).reduce(function(object,Current){
                            object[Current.name] = Current.value;
                             return object;
              },{});
              if(isFormValid){
                       option.onSubmit(formValues);
                          
                       
              }else{
                console.log("co loi");
              }

        }
        option.rules.forEach(function(element){  
            
             // lưu lại rules cho mỗi input
             if(Array.isArray(selectorRules[element.selector])){
              selectorRules[element.selector].push(element.test);
             }else{
              selectorRules[element.selector] = [element.test];
             }
             // lấy cha nó chọc vào luôn ( tránh nhầm con vì có thể trùng tên )
              let inputElement = formElement.querySelector(element.selector); 
              if(inputElement){
                // xử lí trường hợp blur ra ngoài 
                  inputElement.addEventListener('blur',function(){
                    
                        validate(inputElement,element);
                        
                  })
                  // xử lí trường hợp on input 
                  inputElement.addEventListener('input',function(){
                              validate(inputElement,element);
                  })
              }

        })
       }
  

 }
 /**
  * 
  * {form: '#form-1', rules: Array(2)} : object được truyền vào
form
: 
"#form-1"
rules
: 
Array(2)
0
: 
undefined
1
: 
undefined
length
: 
2
[[Prototype]]
: 
Array(0)
[[Prototype]]
: 
Object
  */
// Dn rules
// nguyên tắc của các rules :
//1 : khi có lỗi => trả ra message lỗi 
//2 : Khi hợp lệ -=> Không trả ra cái gì 
 validator.isRequired = function (selector){
        return { //  return object
            selector : selector ,
            test : function (value){ // isrequired 
                   return value.trim() ? undefined : "VUI LÒNG NHẬP TÊN ĐẦY ĐỦ CỦA BẠN !";

            }
        }
 }
 validator.isEmail = function (selector){
    return {
        selector : selector ,
        test : function (value){ //  check it ís Email ?? 
          let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
          return  regex.test(value) ? undefined : "VUI LÒNG NHẬP EMAIL CHÍNH XÁC";
        }
    }
 }
validator.minLength= function (selector,size){ // method
    return {
    selector : selector ,
    test : function (value){
              return value.length < size ? "VUI LÒNG NHẬP TỐI THIỂU 6 KÝ TỰ !" : undefined ;
    }
  }
}
validator.confirmPass= function (selector,function1,message){ // method
    return {
    selector : selector ,
    test : function (value){
              return  value === function1() ? undefined : message ? message : "Gia tri vua nhap khong khop" ;
    }
  }
}