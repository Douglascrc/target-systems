const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1)  A soma é 91
function soma() {
  let INDICE = 13;
  let SOMA = 0;
  let K = 0;
  
  while (K < INDICE) {
    K += 1;
    SOMA += K;
  }
  console.log("1) Valor de SOMA:", SOMA);
}

// 2) Verifica se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
  if (num < 0) return false;
  let a = 0, b = 1;
  while (b < num) {
    [a, b] = [b, a + b];
  }
  return b === num || num === 0;
}

readline.question("2) Informe um número para verificar se pertence à sequência de Fibonacci: ", (input) => {
  const numero = parseInt(input);
  readline.question("5) Informe uma string para inverter: ", (texto) => {
    executarDesafios(numero, texto);
    readline.close();
  });
});

// 3) Análise de faturamento diário
const faturamentoMensal = [
  { "dia": 1, "valor": 19174.16 },
  { "dia": 2, "valor": 24537.60 },
  { "dia": 3, "valor": 26139.60 },
  { "dia": 4, "valor": 0.0 },
  { "dia": 5, "valor": 0.0 },
  { "dia": 6, "valor": 26742.50 },
  { "dia": 7, "valor": 14399.0 }
];

function analisarFaturamento() {
  const valores = faturamentoMensal.filter(d => d.valor > 0).map(d => d.valor);
  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);
  const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
  const diasAcimaMedia = valores.filter(v => v > media).length;

  console.log("3) Menor valor de faturamento:", menorValor);
  console.log("3) Maior valor de faturamento:", maiorValor);
  console.log("3) Dias com faturamento acima da média:", diasAcimaMedia);
}

// 4) Percentual de faturamento por estado
const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

function calcularPercentualEstados() {
  const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);
  Object.entries(faturamentoEstados).forEach(([estado, valor]) => {
    const percentual = ((valor / totalFaturamento) * 100).toFixed(2);
    console.log(`4) ${estado}: ${percentual}%`);
  });
}

// 5) Inversão de string
function inverterString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
}

//Executar desafios
function executarDesafios(numero, texto) {
  soma();
  console.log(`2) O número ${numero} ${isFibonacci(numero) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);
  analisarFaturamento();
  calcularPercentualEstados();
  console.log("5) String invertida:", inverterString(texto));
}