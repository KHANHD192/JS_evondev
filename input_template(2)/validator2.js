// tối ưu hơn ! 
function Validator(formSelector){
    let formElement = document.querySelector(formSelector);
    // quy uớc tạo rules nếu có lỗi thì return lỗi , ko thì return undefined 
    // object nằm gồm các key:value là các function làm nhiệm vụ validate
    let validatorRules = {
        required : function (value){
            return value.trim() ? undefined : "VUI LÒNG NHẬP TRƯỜNG NÀY ";
        },
        email : function (value){
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            return  regex.test(value) ? undefined : "VUI LÒNG NHẬP EMAIL CHÍNH XÁC";
        },
        min :  function (min){
              return function(value){
                return value.length >= min ? undefined : "VUI LÒNG NHẬP TỐI THIỂU 6 KÝ TỰ ";
              }     
        }
    }
   if(formElement){ 
     // 
     let inputs = document.querySelectorAll('[name][rules]'); // 4 thẻ input đang cần validator 
    //  console.log(inputs);

   // tạo một object lưu lại rules tương tự như p1
   let formRules = {}; // phải biến nó thành object lưu các rules  
    for(let  i = 0 ; i < inputs.length ; i++){
         let rules = inputs[i].getAttribute('rules').split('|');
            for(let rule of rules){
                var ruleInfo;
                if(rule.includes(':')){      
                    ruleInfo   = rule.split(':');
                    rule = ruleInfo[0];
                }
                var funcTempt = validatorRules[rule];
                if(rule.includes('min')){
                    funcTempt = funcTempt(ruleInfo[1]);
                }

                if(Array.isArray(formRules[inputs[i].name])){
                
                    formRules[inputs[i].name].push(funcTempt);
                   }else{

                    formRules[inputs[i].name] = [funcTempt];
                   }
                
            }
        
         

        // console.log(formRules); // OBJECT LƯU KEY LÀ TÊN THẺ  :  VALUE LÀ CÁC FUNCTION LÀM NHIỆM VỤ VALIDATE! 
        
}
 // gán event cho từng thẻ input
    for(let key in formRules){
        let inputSelecter = "#" + key;
        let inputElement = formElement.querySelector(inputSelecter);
        if(inputElement){
            // xử lí trường hợp blur ra ngoài 
              inputElement.addEventListener('blur',function(){
                
                    validate(inputElement,key);
                    
              })
              // xử lí trường hợp on input 
              inputElement.addEventListener('input',function(){
                          validate(inputElement,key);
                        
              })
          }
    }


    function validate(inputElement,selector){
            let messageElment = formElement.querySelector(`#${selector} ~ span`);
            let messageError; // nếu mà ở đây sự kiện oninput value được update liên tục
            let Rules = formRules[selector];
            for(let i = 0 ; i < Rules.length ;i++){
                messageError = Rules[i](inputElement.value);
                if(messageError){
                  break;
                } 
               }
               if(messageError){
                inputElement.classList.add('invalid');
              messageElment.innerText =messageError;
              }else {
                inputElement.classList.remove('invalid');
                messageElment.innerText ="";
              }
              return !(messageError);
}
 // xử lí submit 
  formElement.onsubmit = function(e){
    e.preventDefault();
   let isValid = false;
   for(let  i = 0 ; i < inputs.length ; i++){
    // console.log(validate(inputs[i],inputs[i].name) +"haha");
       if(validate(inputs[i],inputs[i].name)){
        console.log("loi ne");
        isValid = true;
       }

   }
   if(isValid){
    let formEnableInput = formElement.querySelectorAll('[name]:not([disable])');
    // console.log(formEnableInput);
    // CONVERT NODELIST QUA ARRAy 
    let formValues = Array.from(formEnableInput).reduce(function(object,Current){
                  object[Current.name] = Current.value;
                   return object;
    },{});
    console.log(formValues);
   }
  }
}
}