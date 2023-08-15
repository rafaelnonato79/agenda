import { Contato } from "./model/contato.js";


let contatos:Contato[] = [];
let indiceEdicao: number = null;

document.addEventListener('DOMContentLoaded',() =>{
    const formulario = document.getElementById('formulario-de-cadastro') as HTMLFormElement;
    formulario.onsubmit = submeterFormulario;
})

function submeterFormulario(evento: Event): void{
    evento.preventDefault();
    
    const nome = document.getElementById('nome') as HTMLInputElement;
    const fone = document.getElementById('fone') as HTMLInputElement;

    const contato = new Contato(nome.value, fone.value);

    if(indiceEdicao === null){
        contatos.push(contato);
    } else {
        contatos[indiceEdicao] = contato;
        indiceEdicao = null;
    }
    
    atualizarListaDeContatos(contatos);

    console.log(contatos);

    limparFormulario(nome, fone);
}

function limparFormulario(nome: HTMLInputElement, fone: HTMLInputElement): void{
    nome.value ='';
    fone.value ='';
    nome.focus();
}

function atualizarListaDeContatos(contatos: Contato[]): void {
    const listaDeContatos = document.querySelector('#lista-de-contatos tbody') as HTMLTableElement;
    listaDeContatos.innerHTML='';
    contatos.forEach((contato, indice)=>{
    const linhaDaTabela = listaDeContatos.insertRow();
  
    linhaDaTabela.insertCell().textContent = contato.nome 
    linhaDaTabela.insertCell().textContent = contato.fone

    const iconeEditar = document.createElement('i');
    iconeEditar.className = 'fas fa-edit'

    const botaoEditar = document.createElement('button');
    botaoEditar.className = 'btn btn-success';
    botaoEditar.onclick=() => editarContato(indice);
    botaoEditar.appendChild(iconeEditar);
        
    const iconeExcluir = document.createElement('i');
    iconeExcluir.className = 'fas fa-trash-alt'

    const botaoExcluir = document.createElement('button');
    botaoExcluir.className = 'btn btn-danger';
    botaoExcluir.onclick = () => excluirContato(indice);
    botaoExcluir.appendChild(iconeExcluir);

    linhaDaTabela.insertCell().append(botaoEditar, botaoExcluir);


    });
}

function editarContato(indice: number): void{
    //implementação
    const contato = contatos[indice];
    indiceEdicao = indice;

    const nome = document.getElementById('nome') as HTMLInputElement;
    const fone = document.getElementById('fone') as HTMLInputElement;

    nome.value = contato.nome;
    fone.value = contato.fone;
}

function excluirContato(indice: number): void {
    //implementação
    const contato = contatos[indice];
    const confirme = confirm(`Deseja excluir o contato ${contato.nome}`)
    if(confirme == true){
        contatos.splice(indice, 1);
        atualizarListaDeContatos(contatos);
    }

}
