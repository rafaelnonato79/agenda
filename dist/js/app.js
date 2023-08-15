import { Contato } from "../model/contato.js";

let contatos = [];

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-de-cadastro');
    formulario.onsubmit = submeterFormulario;
});

function submeterFormulario(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome');
    const fone = document.getElementById('fone');

    const contato = new Contato(nome.value, fone.value);

    contatos.push(contato);

    atualizarListaDeContatos();

    console.log(contatos);
    nome.value = '';
    fone.value = '';
    nome.focus();
}

function atualizarListaDeContatos() {
    const listaDeContatos = document.querySelector('#lista-de-contatos tbody');
    listaDeContatos.innerHTML = '';

    for (const contato of contatos) {
        const linhaDaTabela = listaDeContatos.insertRow();
        linhaDaTabela.insertCell().textContent = contato.nome;
        linhaDaTabela.insertCell().textContent = contato.fone;
    }
}

