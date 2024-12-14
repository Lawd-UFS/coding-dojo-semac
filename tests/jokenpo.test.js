import { jogar } from "../src/jokenpo.js";

describe("Pedra, Papel e Tesoura", () => {
  it("pedra ganha de tesoura", () => {
    const ganhador = jogar("pedra", "tesoura");

    expect(ganhador).toBe("pedra");
  });

  it("tesoura ganha de papel", () => {
    const ganhador = jogar("tesoura", "papel");

    expect(ganhador).toBe("tesoura");
  });

  it("papel ganha de pedra", () => {
    const ganhador = jogar("papel", "pedra");

    expect(ganhador).toBe("papel");
  });

  it("pedra perde de papel", () => {
    const ganhador = jogar("pedra", "papel");

    expect(ganhador).toBe("papel");
  });

  it("papel perde de tesoura", () => {
    const ganhador = jogar("papel", "tesoura");

    expect(ganhador).toBe("tesoura");
  });

  it("tesoura perde de pedra", () => {
    const ganhador = jogar("tesoura", "pedra");

    expect(ganhador).toBe("pedra");
  });

  it("jogadas iguais empatam", () => {
    let ganhador = jogar("pedra", "pedra");
    expect(ganhador).toBe("empate");

    ganhador = jogar("papel", "papel");
    expect(ganhador).toBe("empate");

    ganhador = jogar("tesoura", "tesoura");
    expect(ganhador).toBe("empate");
  });
});
