var arrayBotao = [
{label:1, onclick: funcaoOnclick},
{label:2, onclick: funcaoOnclick},
{label:3, onclick: funcaoOnclick},
{label:"/", onclick: operador},
{label:4, onclick: funcaoOnclick},
{label:5, onclick: funcaoOnclick},
{label:6, onclick: funcaoOnclick},
{label:"*", onclick: operador},
{label:7, onclick: funcaoOnclick},
{label:8, onclick: funcaoOnclick},
{label:9, onclick: funcaoOnclick},
{label:"-", onclick: operador},
{label:0, onclick: funcaoOnclick},
{label:"=", onclick: equal},
{label:"+", onclick: operador},
{label:"C", onclick: cleanDisplay}];

var botoes = document.getElementsByClassName('botoes');
var entradas = [];

function criarBotao(){
  var divBotao = document.createElement('div');
  divBotao.classList.add('botao');
  botoes[0].append(divBotao);
  divBotao.innerHTML = arrayBotao[x].label;
  divBotao.onclick = arrayBotao[x].onclick;
}

for(var x in arrayBotao){
	criarBotao();
}

function funcaoOnclick(e){
	var valor = e.target.innerHTML;
  entradas.push(valor);
  document.getElementById('display').innerHTML += valor;
}

function cleanDisplay(){
	document.getElementById('display').innerHTML = "";
}

function operador(e){
	var display = document.getElementById('display').innerHTML;
	var valor = e.target.innerHTML;
  entradas.push(valor);
  document.getElementById('display').innerHTML = "";
  }

function equal(e){
	document.getElementById('display').innerHTML = "";
	var result = eval(entradas.join(" "));
  document.getElementById('display').innerHTML = result;
}
