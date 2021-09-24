var cartas = [
  (carta1 = {
    nome: "Gnoll",
    imagem:
      "https://static.wikia.nocookie.net/forgottenrealms/images/1/17/Gnoll-5e.png",
    atributos: {
      ataqueCorpoAcorpo: 6,
      ataqueAdistancia: 4,
      ataqueMagico: 0,
      defesaFisica: 10,
      defesaMagica: 6
    }
  }),
  (carta2 = {
    nome: "Devorador de mentes",
    imagem:
      "https://static.wikia.nocookie.net/forgottenrealms/images/2/2b/Mind_flayer_-_5E.jpg",
    atributos: {
      ataqueCorpoAcorpo: 4,
      ataqueAdistancia: 0,
      ataqueMagico: 12,
      defesaFisica: 8,
      defesaMagica: 12
    }
  }),
  (carta3 = {
    nome: "Goblin",
    imagem:
      "https://www.dndbeyond.com/avatars/thumbnails/0/351/1000/1000/636252777818652432.jpeg",
    atributos: {
      ataqueCorpoAcorpo: 4,
      ataqueAdistancia: 6,
      ataqueMagico: 0,
      defesaFisica: 7,
      defesaMagica: 6
    }
  }),
  (carta4 = {
    nome: "Observador",
    imagem:
      "https://static.wikia.nocookie.net/forgottenrealms/images/2/2c/Monster_Manual_5e_-_Beholder_-_p28.jpg",
    atributos: {
      ataqueCorpoAcorpo: 8,
      ataqueAdistancia: 4,
      ataqueMagico: 15,
      defesaFisica: 10,
      defesaMagica: 7
    }
  }),
  (carta5 = {
    nome: "Pantera deslocadora",
    imagem:
      "https://static.wikia.nocookie.net/forgottenrealms/images/d/df/Displacer_Beast_MM_4e.jpg",
    atributos: {
      ataqueCorpoAcorpo: 12,
      ataqueAdistancia: 6,
      ataqueMagico: 0,
      defesaFisica: 12,
      defesaMagica: 6
    }
  }),
  (carta6 = {
    nome: "Lich",
    imagem:
      "https://static.wikia.nocookie.net/forgottenrealms/images/3/3e/Monster_Manual_4e_-_Lich_-_p177_-_Chris_stevens_%26_Jim_zubkavich.jpg",
    atributos: {
      ataqueCorpoAcorpo: 2,
      ataqueAdistancia: 0,
      ataqueMagico: 20,
      defesaFisica: 5,
      defesaMagica: 10
    }
  })
];

var cartaMaquina;
var cartaJogador;

document.getElementById("carta-maquina").innerHTML = "";

function sortearCarta() {
  document.getElementById("carta-maquina").style.backgroundImage = "";
  document.getElementById("carta-maquina").innerHTML = "";
  document.getElementsByName("atributo").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("carta-jogador").style.backgroundImage = "";
  document.getElementById("carta-jogador").innerHTML = "";
  document.getElementsByName("atributo").innerHTML = "";
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  cartaJogador = cartas[numeroCartaJogador];

  if (numeroCartaJogador == numeroCartaMaquina) {
    document.getElementById("carta-jogador").style.backgroundImage = "";
    document.getElementById("carta-jogador").innerHTML = "";
    sortearCarta();
  }
  console.log(cartaMaquina);
  console.log(cartaJogador);

  document.getElementById("btnJogar").disabled = false;
  document.getElementById("btnSortear").disabled = true;
  //exibirOpcoes();
  exibirCartaJogador();
}

// function exibirOpcoes() {
//   var opcoes = document.getElementById("opcoes");
//   opcoes.innerHTML = "";
//   document.getElementById("resultado").innerHTML = "";
//   for (var atributo in cartaJogador.atributos) {
//     opcoes.innerHTML += `<input type="radio" name="atributo" value="${atributo}">${atributo}`;
//   }
// }

function obterAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  // document.getElementById("resultado").innerHTML = "";
  // document.getElementById("carta-jogador").style.backgroundImage = "";
  // document.getElementById("carta-jogador").innerHTML = "";
  var atributoSelecionado = obterAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<p>Você venceu!</p>";
  } else if (valorCartaJogador == valorCartaMaquina) {
    elementoResultado.innerHTML = "<p>Empate!</p>";
  } else {
    elementoResultado.innerHTML = "<p>Você perdeu!</p>";
  }
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  document.getElementById("carta-jogador").style.backgroundImage = "";
  document.getElementById("carta-jogador").innerHTML = "";
  document.getElementsByName("atributo").innerHTML = "";
  document.getElementById("carta-jogador").style.backgroundImage = `
  url(${cartaJogador.imagem}) `;
  var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
  var tagHTML = `<div id="opcoes" class="carta-status">`;
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `<input type="radio" name="atributo" class="atributo" value="${atributo}">${atributo} ${cartaJogador.atributos[atributo]}</input> <br>`;
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  document.getElementById("carta-jogador").innerHTML +=
    moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  document.getElementById("carta-maquina").style.backgroundImage = "";
  document.getElementById("carta-maquina").innerHTML = "";
  document.getElementsByName("atributo").innerHTML = "";
  document.getElementById("carta-maquina").style.backgroundImage = `
  url(${cartaMaquina.imagem}) `;
  var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
  var tagHTML = `<div id="opcoes" class="carta-status-maquina">`;
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += `<p" name="atributo" class="atributo" id="maquina-atributo" value="${atributo}">${atributo} ${cartaMaquina.atributos[atributo]}</p>`;
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  document.getElementById("carta-maquina").innerHTML +=
    moldura + nome + tagHTML + opcoesTexto + "</div>";
}