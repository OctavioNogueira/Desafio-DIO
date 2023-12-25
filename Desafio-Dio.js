//Desafio DIO - FELIPÃO 

// Solicita o nome e a quantidade de experiência (XP) do herói
let nome = (" Homem de Ferro ");
let xp = ("Radiante");

// Utiliza uma estrutura de decisão para determinar o nível do herói
let nivel;

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem final
console.log ("O Herói :  " + nome + " está no nível de " + nivel);