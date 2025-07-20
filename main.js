//Apporter les element 

const lower_case =  document.querySelector('#letter-lower');
const upper_case =  document.querySelector('#letter-upper');
const numbers  =  document.querySelector('#numbers');
const symbols  =  document.querySelector('#symbols');
const leght_el =  document.querySelector('#nbr-length');
const  password_el =  document.querySelector('#password');


//Buutons element
const generate_btn =  document.querySelector('#generateure');
generate_btn.addEventListener('click',GenaratePassword);
const  copy_btn =  document.querySelector('#copy-btn');
copy_btn.addEventListener('click',copied);

//Crarcter pour generation de password
const lowercase_chars =  'abcdefghijklmnopqrstuvwxyz';
const numbers_chars = '0123456789';
const symbols_chars =  '!.?*-@#&';
const uppercase_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


//creation de function  pour genaration 

function GenaratePassword(){
    let password = '' ; 
    let leght = leght_el.value; 
    let chars = "" ; 
    
    chars +=  upper_case.checked ? uppercase_chars : "" ;
    chars +=  lower_case.checked ? lowercase_chars : "" ;
    chars +=  symbols.checked ? symbols_chars  : "" ;
    chars +=  numbers.checked ? numbers_chars  : "" ;


    for(let i = 0 ;  i <= leght ; i++){
            let round = Math.floor(Math.random()*chars.length);
             password += chars.charAt(round);
    }
    password_el.value =  password ;
}



//function    pour copier 

async  function copied(){
        if(navigator.clipboard){
            await navigator.clipboard.writeText(password_el.value);
            alert('Password copied  ')
        }
}