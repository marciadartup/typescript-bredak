interface Cachorro{
  nome: string;
  idade: number;
  parqueFavorito?: string;

}
 type CahorroSomenteLeitura = {
  readonly [k in keyof Cachorro]-?: Cachorro[k];
 }  

 class MeuCachorro implements CahorroSomenteLeitura  {
  nome; 
  idade;
  parqueFavorito;
 
  constructor (nome, idade) {
    this.nome= nome;
    this.idade = idade;

  }
}
const cao = new MeuCachorro ('Apolo' , 14);
cao.idade = 8;
console.log(cao);