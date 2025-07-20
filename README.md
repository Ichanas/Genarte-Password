Repository: ichanas/genarte-password
Files analyzed: 3

Estimated tokens: 1.3k

Directory structure:
└── ichanas-genarte-password/
    ├── index.html
    ├── main.js
    └── style.css


================================================
FILE: index.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
     <link rel='stylesheet' href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genarate Password</title>
</head>
<body>
     <main>
          <div id="containaire">
         <h1>Password Generatore</h1>
          <table>
               <tr>
                    <td><input type="text" placeholder="Password Genarated" name="password" id="password" readonly>
                        <span><img src="copy.png" alt="copy-button" width="25px" id="copy-btn"></span>
                    </td>
               </tr>

                   <tr>
                    <td>
                        <label for="passw-lgh">Password Length</label>
                    <td>
                          <input type="number" name="nbr-length" id="nbr-length">
                    </td>
               </tr>



                <tr>
                     <td>
                        <label for="Uppercase">Include Uppercase Letters</label>
                     </td>
                     <td>
                        <input type="checkbox" name="letter-upper" id="letter-upper">
                     </td>
               </tr>




             <tr>
                     <td>
                        <label for="lowercase">Include Lowercase Letters</label>
                     </td>
                     <td>
                        <input type="checkbox" name="letter-lower" id="letter-lower">
                     </td>
               </tr>



               

             <tr>
                     <td>
                        <label for="numbers">Include Numbers</label>
                     </td>
                     <td>
                        <input type="checkbox" name="numbers" id="numbers">
                     </td>
            </tr>


               <tr>
                     <td>
                        <label for="symbols">Include Symbols</label>
                     </td>
                     <td>
                        <input type="checkbox" name="symbols" id="symbols">
                     </td>
            </tr>

        <tr>
               <td>
                    <button value="generte password" id="generateure">Generate Password</button>
               </td>
        </tr>




          </table>
     </div>
     </main>
     <script src="main.js"></script>
</body>
</html>


================================================
FILE: main.js
================================================
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


================================================
FILE: style.css
================================================
body{
   background-color: #D4D3DC;
   padding: 0px ; 
   margin: 0px ; 
}
main{
     padding: 12px;
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: #dcdbdb ;
     height: auto;
     position: absolute;  
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
}

input[type=checkbox]{
      margin-left: 90px;   
}

input[type=number]{
    width: 30px;
    margin-left: 80px;
     border-color: #dcdbdb;
     background-color: #dcdbdb;
}

button{
     color:white ;
    background: linear-gradient(90deg,rgba(25, 21, 158, 0.57) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    padding: 4px ;
    border-radius: 25px;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

h1{
    text-align: center;
    font-weight: 800;
    color: rgba(105, 105, 240, 0.792);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


input[type=text]{
 border: none ; 
 border-bottom: 2px solid rgb(28, 152, 229);
 width: 130px;
 background-color: #dcdbdb;
}




