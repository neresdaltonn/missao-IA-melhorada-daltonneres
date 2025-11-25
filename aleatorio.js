const nomes = ["Bruna", "Dalton", "João", "Junior", "Luiz", "José", "Carlos" ]

export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}