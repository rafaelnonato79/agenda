import { Contato } from "./model/contato.js";

let contatos:Contato[] = [];

document.addEventListener('DOMContentLoaded',()=>{
    const formulario = document.getElementById('formulario-de-cadastro' as HTMLFormElement)
    formulario.onsubmit = submeterFormulario();
})

function submeterFormulario(evento: Event): void{
    evento.preventDefault();
    
    const nome = document.getElementById('nome') as HTMLInputElement;
    const fone = document.getElementById('fone') as HTMLInputElement;

    const contato = new Contato(nome.value, fone.value);

    contatos.push(contato);

    atualizarListaDeContatos();

    console.log(contatos);
    nome.value = '';
    fone.value = '';
    nome.focus();


}

function atualizarListaDeContatos(contatos: Contato[]): void {
    const listaDeContatos = document.querySelector('#lista-de-contatos tbody') as HTMLTableElement;
    listaDeContatos.innerHTML='';
    contatos.forEach(contato=>{
    const linhaDaTabela = listaDeContatos.insertRow();
    linhaDaTabela.insertCell().textContent = contato[0].nome 
    linhaDaTabela.insertCell().textContent = contato[0].fone
    });
}