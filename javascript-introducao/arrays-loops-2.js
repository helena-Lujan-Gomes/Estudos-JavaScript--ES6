//AULA

// var ultimoItem = videoGames.pop();

for (var numero = 1; numero <= 4; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4') {
    break;
  }
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index) {
  frutas.pop();
  console.log(fruta, index, frutas)
});

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}

//EXERCÍCIO
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < brasilCampeao.length; i++) {
  console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];