 // Write TypeScript code!
 const appDiv: HTMLElement = document.getElementById('app');
 appDiv.innerHTML = `<h1> Curso DIO TypeScript </h1>`;

// Import stylesheets
import './style.css';

//types - estrutura de dados dos parametros para criar as funcoes
//interfaces - são contratos para implementar as classes 


//definir classe 
interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

// Type - Juntar diferentes interfaces ou definir que uma varável pode ser uma interface

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface Icanino extends IAnimal{
  porte: 'pequeno' | 'médio' | 'grande' ;
}

type IDomestico = IFelino | Icanino;

const animal: IDomestico = {
  domestico: true,
  nome: 'Elefante',
  porte:'médio',
  tipo: 'terrestre',

  }




// comentando ...
/*const felino: IFelino = {
  nome: 'Leao',
  tipo: 'terrestre',
  visaoNoturna: true,

}
const matilha: IAnimal = {
  nome: 'Cachorro',
  tipo: 'terrestre'
  
}
*/


 