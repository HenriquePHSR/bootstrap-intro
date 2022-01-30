let contador = 0;
const numero = new WeakMap();
const concatenaEndereco = new WeakMap();

// uma por modulo
export default class Pessoa {
   constructor (nome, sobrenome, logradouro, num, complemento) {
      numero.set(this, ++contador);
      this.nome = nome;
      this.sobrenome = sobrenome;
      this._endereco = {
         logradouro: logradouro,
         num: num,
         complemento: complemento
      };
      
      concatenaEndereco.set(this, () =>   
         this._endereco.logradouro + ' ' +
         this._endereco.num + ' ' +
         this._endereco.complemento
      );
   }   
   get endereco() {
      const resposta = concatenaEndereco.get(this)();
      return 'Endereço: ' + resposta;
   }

   get numero() {
      return numero.get(this);
   }

   static set contador(cont) {
      if(isNaN(cont) || cont < 0)
         throw new Error(
            'O valor de contador deve ser maior ou igual a zero.');
      contador = cont;
   }
   static get contador() {
      return contador;
   }
}

// module.exports = {
//     Pessoa,
//     numero
// }