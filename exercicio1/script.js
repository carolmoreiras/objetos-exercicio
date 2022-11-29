/*Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

```jsx
nome: string;
preco: number;
disponibilidade: boolean;
```
*/

const sacolao = []

const fruta1 = {
    nome: "banana",
    preco: 2.00,
    disponibilidade: true
}

const fruta2 = {
    nome: "maca",
    preco: 1.00,
    disponibilidade: false
}

const fruta3 = {
    nome: "morango",
    preco: 4.00,
    disponibilidade: true
}

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(fruta1, fruta2, fruta3)


//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao)