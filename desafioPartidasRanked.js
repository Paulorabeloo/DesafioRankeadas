let nivel
let saldoRankeadas = calcularNivel(101, 0)

function calcularNivel(vitorias, derrotas){
    let saldoRankeadas = (vitorias - derrotas)
    return saldoRankeadas
}

if (saldoRankeadas < 10){
    nivel = "Ferro"
} else if(saldoRankeadas > 10 && saldoRankeadas <= 20){
    nivel = "Bronze"
} else if(saldoRankeadas > 20 && saldoRankeadas <= 50){
    nivel = "Prata"
} else if(saldoRankeadas > 50 && saldoRankeadas <= 80){
    nivel = "Ouro"
} else if(saldoRankeadas > 80 && saldoRankeadas <= 90){
    nivel = "Diamante"
} else if(saldoRankeadas > 90 && saldoRankeadas <= 100){
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + saldoRankeadas + " está no nível de " + nivel)

