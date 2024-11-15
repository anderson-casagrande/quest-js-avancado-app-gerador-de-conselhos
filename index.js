const idDoConselho = document.querySelector('.titulo')
const textoDoConselho = document.querySelector('.advice')
const botaoDoGeradorDeConselho = document.querySelector('.botao')

async function buscarUmConselho() {
const resposta = await fetch("https://api.adviceslip.com/advice");

const adviceContent = await resposta.json();
const adviceID = `Advice #${adviceContent.slip.id}`;
const adviceText = `"${adviceContent.slip.advice}"`;

idDoConselho.innerText = adviceID;
textoDoConselho.innerText = adviceText

}

botaoDoGeradorDeConselho.addEventListener('click', buscarUmConselho)




