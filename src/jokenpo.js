export function jogar(jogador1, jogador2) {
  if (jogador1 == jogador2) return "empate";

  const ganhador = {
    pedra: "papel",
    tesoura: "pedra",
    papel: "tesoura",
  };

  // function obterGanhador(opcao) {
  //   if (opcao == "pedra") return "papel";
  //   if (opcao == "papel") return "tesoura";

  //   return "pedra";
  // }
  // const ganhador = obterGanhador(jogador1)
  // if (ganhador == jogador2) return jogador2

  if (ganhador[jogador1] == jogador2) return jogador2;

  return jogador1;
}
