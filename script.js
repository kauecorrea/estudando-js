/* variaçoes de sintaxe das aspas */

console.log("Ola Mundo")

console.log('Ola mundo')

console.log("ola 'mundo'")

console.log('Ola "Mundo"')

/* number

No JavaScript temos 4 tipos de números, os inteiros (por exemplo: 13), os reais ou float (por exemplo: 83.1), 
o Not a Number (NaN) e o infinito (Infinity).*/

console.log(30)

console.log(12.5 + 12)

console.log(321 / 32)

console.log(2321 / "asdsa")

console.log(21312.3 === Infinity)

/* Boolean 
    
    Somente 2 valores

        True // verdadeiro
        False // falso

*/

console.log(false)

/* Undefined vs null

   A diferença dos dois é que null é considerado como um objeto vazio, ou seja, algo indefinido não existe, 
   já algo null existe mas não tem valor algum. 
*/

/* Object

    Todo objeto tem: Propriedades / Atributos
                     Funcionalidade / Métodos

    sintaxe de um objeto                 
    { propriedade: "valor" }    

*/

console.log({
    name: "Kauê",
    idade: 18,
    andar: function() {
        console.log('andar')
    }
})

/* Array (vetores)
    * É Uma Lista
    * Agrupamento de dados

    ["Kauê", 18]
*/

console.log([
    "Kauê", 
    18,
    "178cm",
    "Branco"
])

/* ECMAScript

    Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript) 
    temos 9 tipos de dados organizados em 4 categorias: Primitive, Primitive Value, Structural e Structural Primitive. 
    Os primitivos são: String, Number, Boolean, Undefined, Symbol, BigInt. 
    Os estruturais são: Object e Function. 
    Além destes, temos o primitivo estrutural que consiste apenas no dado null

*/


