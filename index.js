// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível do herói
function determinarNivel(vitorias) {
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

// Simulação com vários jogadores usando laço de repetição
let jogadores = [
    { nome: "Herói1", vitorias: 8, derrotas: 2 },
    { nome: "Herói2", vitorias: 15, derrotas: 5 },
    { nome: "Herói3", vitorias: 45, derrotas: 20 },
    { nome: "Herói4", vitorias: 75, derrotas: 40 },
    { nome: "Herói5", vitorias: 85, derrotas: 10 },
    { nome: "Herói6", vitorias: 95, derrotas: 15 }
];

// Percorrendo os jogadores
for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    let saldo = calcularSaldo(jogador.vitorias, jogador.derrotas);
    let nivel = determinarNivel(jogador.vitorias);

    console.log(`O herói ${jogador.nome} tem o saldo de vitórias de: ${saldo} e ele está no nível de: ${nivel}`);
}
