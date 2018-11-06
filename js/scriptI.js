/*const nombre = "Jhonny";
localStorage.setItem('nombreUsuario',nombre);

const n = localStorage.getItem('nombreUsuario');
console.log('Mi nombre es: '+n);
localStorage.removeItem('nombreUsuario');*/

const BtnBotones = document.querySelector('#btnBotones');
const botones = document.querySelector('#botones');

(()=>{
	BtnBotones.addEventListener('click',agregarBotones);
})();


function agregarBotones(e){
	e.preventDefault();
	botones.innerHTML =
		'<button class="btn btn-primary">Primary</button>'+
		'<button class="btn btn-segundary">Segundary</button>'+
		'<button class="btn btn-danger">Danger</button>'+
		'<button class="btn btn-success">Success</button>'+
		'<button class="btn btn-warning">Warning</button>';
}