import { Contato } from "./model/contato.js";
let contatos = [];
let indiceEdicao = null;
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-de-cadastro');
    formulario.onsubmit = submeterFormulario;
});
function submeterFormulario(evento) {
    evento.preventDefault();
    const nome = document.getElementById('nome');
    const fone = document.getElementById('fone');
    const contato = new Contato(nome.value, fone.value);
    if (indiceEdicao === null) {
        contatos.push(contato);
    }
    else {
        contatos[indiceEdicao] = contato;
        indiceEdicao = null;
    }
    atualizarListaDeContatos(contatos);
    console.log(contatos);
    limparFormulario(nome, fone);
}
function limparFormulario(nome, fone) {
    nome.value = '';
    fone.value = '';
    nome.focus();
}
function atualizarListaDeContatos(contatos) {
    const listaDeContatos = document.querySelector('#lista-de-contatos tbody');
    listaDeContatos.innerHTML = '';
    contatos.forEach((contato, indice) => {
        const linhaDaTabela = listaDeContatos.insertRow();
        linhaDaTabela.insertCell().textContent = contato.nome;
        linhaDaTabela.insertCell().textContent = contato.fone;
        const iconeEditar = document.createElement('i');
        iconeEditar.className = 'fas fa-edit';
        const botaoEditar = document.createElement('button');
        botaoEditar.className = 'btn btn-success';
        botaoEditar.onclick = () => editarContato(indice);
        botaoEditar.appendChild(iconeEditar);
        const iconeExcluir = document.createElement('i');
        iconeExcluir.className = 'fas fa-trash-alt';
        const botaoExcluir = document.createElement('button');
        botaoExcluir.className = 'btn btn-danger';
        botaoExcluir.onclick = () => excluirContato(indice);
        botaoExcluir.appendChild(iconeExcluir);
        linhaDaTabela.insertCell().append(botaoEditar, botaoExcluir);
    });
}
function editarContato(indice) {
    //implementação
    const contato = contatos[indice];
    indiceEdicao = indice;
    const nome = document.getElementById('nome');
    const fone = document.getElementById('fone');
    nome.value = contato.nome;
    fone.value = contato.fone;
}
function excluirContato(indice) {
    //implementação
    const contato = contatos[indice];
    const confirme = confirm(`Deseja excluir o contato ${contato.nome}`);
    if (confirme == true) {
        contatos.splice(indice, 1);
        atualizarListaDeContatos(contatos);
    }
}
