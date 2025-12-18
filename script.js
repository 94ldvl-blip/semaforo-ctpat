// Elementos
const luzRoja = document.getElementById('luzRoja');
const luzVerde = document.getElementById('luzVerde');
const btnAccionar = document.getElementById('btnAccionar');
const btnReset = document.getElementById('btnReset');

function setEstado(color){
  // Apagar
  luzRoja.classList.remove('activa');
  luzVerde.classList.remove('activa');
  // Encender seleccionado
  if(color === 'rojo'){
    luzRoja.classList.add('activa');
  }else{
    luzVerde.classList.add('activa');
  }
}

function accionar(){
  const r = Math.random();
  const color = r < 0.6 ? 'rojo' : 'verde'; // Rojo 60% | Verde 40%
  setEstado(color);
}

function reset(){
  luzRoja.classList.remove('activa');
  luzVerde.classList.remove('activa');
}

btnAccionar.addEventListener('click', accionar);
btnReset.addEventListener('click', reset);
