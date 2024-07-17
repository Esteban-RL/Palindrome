const input=document.getElementById("text-input");
const boton=document.getElementById("check-btn");
const resultado=document.getElementById("result");

let escritura=""
let reverso=""

const esPalindromo= input => {
  if(input===""){
alert("Please input a value");
return;
  }

  escritura=input.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(escritura);

  reverso=escritura.split("").reverse().join("");
  console.log(reverso);

  if(escritura===reverso){
    console.log("vamooo");
    resultado.classList.remove('hidden');
    resultado.textContent=`${input} is a palindrome`;
  }else{
    resultado.classList.remove('hidden');
    resultado.textContent=`${input} is not a palindrome`;
  }
};

boton.addEventListener('click', () => {
  esPalindromo(input.value);

  input.value = '';
 
});
