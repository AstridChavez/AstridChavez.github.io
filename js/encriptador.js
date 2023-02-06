const text = document.querySelector('textarea');
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');
const btnCopiar = document.querySelector('#btnCopiar');

const initialBlock = document.querySelector('#initialEncript');
const processEncript = document.querySelector('#processEncript');
const dataEncript = document.querySelector('#dataEncript');


btnEncriptar.addEventListener('click', () => {
   if(text.value) {
    initialBlock.style.display = 'none';
    processEncript.style.display = 'block';
    dataEncript.innerHTML = `<p>TEXTO ENCRIPTADO ${text.value}</p>`;
   } else {
    alert('Escriba algun texto')
   }
});

btnDesencriptar.addEventListener('click', () => {
    if(text.value) {
     initialBlock.style.display = 'none';
     processEncript.style.display = 'block';
     dataEncript.innerHTML = `<p id="copiar">TEXTO DESENCRIPTADO ${text.value}</p>`;
    } else {
     alert('Escriba algun texto')
    }
 });

 btnCopiar.addEventListener('click', () => {
     alert(text.value)
 });