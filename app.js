let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero');
} else {
    alert('No acertaste el numero. El numero era ' + numeroSecreto);
}
