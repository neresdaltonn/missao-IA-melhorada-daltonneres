const nomes = ["Bruna", "Dalton", "João", "Junior", "Luiz", "José", "Carlos", "Mateus", "Felipe"; ]

export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}