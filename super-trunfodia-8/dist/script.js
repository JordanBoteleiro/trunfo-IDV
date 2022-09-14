var carta1 = {
  nome: "Disciple",
  imagem:
    "https://static1.personality-database.com/profile_images/af1b997ba4e54302868ae134cfccf0bc.png",
  atributos: {
    ataque: 5,
    defesa: 2,
    magia: 7
  }
};

var carta2 = {
  nome: "Geisha",
  imagem:
    "https://i.pinimg.com/originals/28/f3/b8/28f3b8642fb95b1b319e30d572d1fa61.jpg",
  atributos: {
    ataque: 6,
    defesa: 4,
    magia: 8
  }
};

var carta3 = {
  nome: "Soul Weaver",
  imagem:
    "https://static1.personality-database.com/profile_images/08f586f076024256aea9d6a31d13106d.png",
  atributos: {
    ataque: 7,
    defesa: 6,
    magia: 4
  }
};

var carta4 = {
  nome: "Axe Boy",
  imagem:
    "https://pm1.narvii.com/7492/911d693dd460ffbf8c5cfeb3cd7dee138d737a75r1-720-1106v2_hq.jpg",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 9
  }
};

var carta5 = {
  nome: "Smiley Face",
  imagem:
    "http://pm1.narvii.com/6992/1947344c274791186371e1ef9cf0edfca8cdede4r1-283-327v2_00.jpg",
  atributos: {
    ataque: 6,
    defesa: 5,
    magia: 0
  }
};

var carta6 = {
  nome: "Guard 26",
  imagem: "https://i.ytimg.com/vi/AMgy4VYJ3bY/maxresdefault.jpg",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 10
  }
};
carta6;

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 6);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Você Venceu!</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML =
      "<p class='resultado-final'>Você perdeu, a carta da maquina é maior</p>";
  } else {
    elementoResultado.innerHTML = "<p class='resultado-final'>Empatou</p>";
  }

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p> `;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p> `;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}