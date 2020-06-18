let jahr = document.getElementById('jahr');
let result = document.getElementById('result');
var yyyy = new Date();
function convert() {
   console.log('its working');
   let bday;
   bday = new Date().getFullYear() - jahr.value;
   result.innerHTML = bday.toFixed();
}
