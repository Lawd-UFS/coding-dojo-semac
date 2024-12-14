import {
  calcularBatalha,
  calcularPotencia,
  obterMultiplicador,
} from "../src/battle.js";

describe("Batalha das Tecnologias - Cálculo da Potência", () => {
  it("deve retornar 0.71 para popularidade 8 e compatibilidade 5 no cálculo da potência", () => {
    const potencia = calcularPotencia({ popularidade: 8, compatibilidade: 5 });

    expect(potencia).toBe(0.71);
  });

  it("deve retornar 0.59 para popularidade 5 e compatibilidade 8 no cálculo da potência", () => {
    const potencia = calcularPotencia({ popularidade: 5, compatibilidade: 8 });

    expect(potencia).toBe(0.59);
  });
});

describe("Batalha das Tecnologias - Cálculo de Multiplicador", () => {
  it("deve aplicar um multiplicador de 1.2 à Desempenho de Backend quando Backend batalhar com Frontend", () => {
    const multiplicador = obterMultiplicador("backend", "frontend");

    expect(multiplicador.categoria).toBe("backend");
    expect(multiplicador.atributo).toBe("desempenho");
    expect(multiplicador.valor).toBe(1.2);
  });

  it("deve aplicar um multiplicador de 1.5 à Popularidade de Frontend quando Frontend batalhar com Full Stack", () => {
    const multiplicador = obterMultiplicador("frontend", "fullStack");

    expect(multiplicador.categoria).toBe("frontend");
    expect(multiplicador.atributo).toBe("popularidade");
    expect(multiplicador.valor).toBe(1.5);
  });

  it("deve aplicar um multiplicador de 1.4 à Flexibilidade de Full Stack quando Full Stack batalhar com Database ou Backend", () => {
    let multiplicador = obterMultiplicador("fullStack", "database");

    expect(multiplicador.categoria).toBe("fullStack");
    expect(multiplicador.atributo).toBe("flexibilidade");
    expect(multiplicador.valor).toBe(1.4);

    multiplicador = obterMultiplicador("fullStack", "backend");

    expect(multiplicador.categoria).toBe("fullStack");
    expect(multiplicador.atributo).toBe("flexibilidade");
    expect(multiplicador.valor).toBe(1.4);
  });

  it("deve aplicar um multiplicador de 1.7 à Compatibilidade de Database quando Database batalhar com Frontend ou Backend", () => {
    let multiplicador = obterMultiplicador("database", "frontend");

    expect(multiplicador.categoria).toBe("database");
    expect(multiplicador.atributo).toBe("compatibilidade");
    expect(multiplicador.valor).toBe(1.7);

    multiplicador = obterMultiplicador("database", "backend");

    expect(multiplicador.categoria).toBe("database");
    expect(multiplicador.atributo).toBe("compatibilidade");
    expect(multiplicador.valor).toBe(1.7);
  });

  it("deve aplicar um multiplicador de 1.2 à Desempenho de Backend quando Frontend batalhar com Backend", () => {
    const multiplicador = obterMultiplicador("frontend", "backend");

    expect(multiplicador.categoria).toBe("backend");
    expect(multiplicador.atributo).toBe("desempenho");
    expect(multiplicador.valor).toBe(1.2);
  });

  it("deve aplicar um multiplicador de 1.5 à Popularidade de Frontend quando Full Stack batalhar com Frontend", () => {
    const multiplicador = obterMultiplicador("fullStack", "frontend");

    expect(multiplicador.categoria).toBe("frontend");
    expect(multiplicador.atributo).toBe("popularidade");
    expect(multiplicador.valor).toBe(1.5);
  });

  it("deve aplicar um multiplicador de 1.4 à Flexibilidade de Full Stack quando Database ou Backend batalhar com Full Stack", () => {
    let multiplicador = obterMultiplicador("database", "fullStack");

    expect(multiplicador.categoria).toBe("fullStack");
    expect(multiplicador.atributo).toBe("flexibilidade");
    expect(multiplicador.valor).toBe(1.4);

    multiplicador = obterMultiplicador("backend", "fullStack");

    expect(multiplicador.categoria).toBe("fullStack");
    expect(multiplicador.atributo).toBe("flexibilidade");
    expect(multiplicador.valor).toBe(1.4);
  });

  it("deve aplicar um multiplicador de 1.7 à Compatibilidade de Database quando Frontend ou Backend batalhar com Database", () => {
    let multiplicador = obterMultiplicador("frontend", "database");

    expect(multiplicador.categoria).toBe("database");
    expect(multiplicador.atributo).toBe("compatibilidade");
    expect(multiplicador.valor).toBe(1.7);

    multiplicador = obterMultiplicador("backend", "database");

    expect(multiplicador.categoria).toBe("database");
    expect(multiplicador.atributo).toBe("compatibilidade");
    expect(multiplicador.valor).toBe(1.7);
  });

  it("não deve aplicar nenhum multiplicador para categorias iguais", () => {
    let multiplicador = obterMultiplicador("frontend", "frontend");

    expect(multiplicador).toBeNull();

    multiplicador = obterMultiplicador("backend", "backend");

    expect(multiplicador).toBeNull();

    multiplicador = obterMultiplicador("fullStack", "fullStack");

    expect(multiplicador).toBeNull();

    multiplicador = obterMultiplicador("database", "database");

    expect(multiplicador).toBeNull();
  });
});

describe("Batalha de Tecnologias - Cálculo Final", () => {
  it("deve resultar em 0.74 e 0.5425 para a batalha entre a tecnologia 1 (Desempenho 5, Flexibilidade 8, Popularidade 8, Compatibilidade 6, Categoria Backend) e a tecnologia 2 (Desempenho 7, Flexibilidade 6, Popularidade 5, Compatibilidade 9, Categoria Frontend)", () => {
    const tecnologia1 = {
      nome: "Tecnologia X",
      desempenho: 5,
      flexibilidade: 8,
      popularidade: 8,
      compatibilidade: 6,
      categoria: "backend",
    };

    const tecnologia2 = {
      nome: "Tecnologia Y",
      desempenho: 7,
      flexibilidade: 6,
      popularidade: 5,
      compatibilidade: 9,
      categoria: "frontend",
    };

    expect(calcularBatalha(tecnologia1, tecnologia2)).toEqual({
      "Tecnologia X": 0.74,
      "Tecnologia Y": 0.5425,
    });
  });

  it("deve resultar em 0.4089 e 0.7625 para a batalha entre a tecnologia 1 (Desempenho 8, Flexibilidade 6, Popularidade 4, Compatibilidade 6, Categoria FullStack) e a tecnologia 2 (Desempenho 5, Flexibilidade 9, Popularidade 7, Compatibilidade 6, Categoria Frontend)", () => {
    const tecnologia1 = {
      nome: "Tecnologia X",
      desempenho: 8,
      flexibilidade: 6,
      popularidade: 4,
      compatibilidade: 6,
      categoria: "fullStack",
    };

    const tecnologia2 = {
      nome: "Tecnologia Y",
      desempenho: 5,
      flexibilidade: 9,
      popularidade: 7,
      compatibilidade: 6,
      categoria: "frontend",
    };

    expect(calcularBatalha(tecnologia1, tecnologia2)).toEqual({
      "Tecnologia X": 0.4089,
      "Tecnologia Y": 0.7625,
    });
  });
});
