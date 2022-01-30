
// const {Pessoa, numero} = require('./script');
//import { Pessoa, concatenaEndereco as ce } from "./script.js";
import Pessoa from "./script.js";

const umaPessoa = new Pessoa('Thiago', 'Rocha', 
'Rua das Laranjeiras', 
'100', 'apto 103');
const outraPessoa = new Pessoa('Ricardo', 'Lima', 
  'Rua Cosme Velho', 
  '232', 'apto 401');
console.log(umaPessoa.numero, umaPessoa.nome);
console.log(outraPessoa.numero, outraPessoa.nome);

Pessoa.contador = 10;
// console.log(ce.get(umaPessoa)())

const maisUmaPessoa = new Pessoa('Roberto', 'Cruz',
    'Rua Cosme Velho',
    '524', 'apto 304');
console.log(maisUmaPessoa.numero, maisUmaPessoa.nome);
