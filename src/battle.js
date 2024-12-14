export function calcularPotencia({ popularidade, compatibilidade }) {
  return (popularidade * 7 + compatibilidade * 3) / 100;
}

export function obterMultiplicador(categoria1, categoria2) {
  if (categoria1 === categoria2) return null;

  const vencedores = {
    backend: ["fullStack", "database"],
    frontend: ["backend", "database"],
    fullStack: ["frontend"],
    database: ["fullStack"],
  };

  const multiplicador = {
    backend: { atributo: "desempenho", valor: 1.2, categoria: "backend" },
    frontend: { atributo: "popularidade", valor: 1.5, categoria: "frontend" },
    fullStack: {
      atributo: "flexibilidade",
      valor: 1.4,
      categoria: "fullStack",
    },
    database: {
      atributo: "compatibilidade",
      valor: 1.7,
      categoria: "database",
    },
  };

  if (vencedores[categoria1].includes(categoria2))
    return multiplicador[categoria2];

  return multiplicador[categoria1];
}

export function calcularBatalha(tecnologia1, tecnologia2) {
  const multiplicador = obterMultiplicador(
    tecnologia1.categoria,
    tecnologia2.categoria
  );

  if (tecnologia1.categoria === multiplicador.categoria)
    tecnologia1[multiplicador.atributo] *= multiplicador.valor;
  else tecnologia2[multiplicador.atributo] *= multiplicador.valor;

  const calculo1 =
    (tecnologia1.desempenho / tecnologia2.flexibilidade) *
    calcularPotencia({ ...tecnologia1 });

  const calculo2 =
    (tecnologia2.desempenho / tecnologia1.flexibilidade) *
    calcularPotencia({ ...tecnologia2 });

  return {
    [tecnologia1.nome]: Number(calculo1.toFixed(4)),
    [tecnologia2.nome]: Number(calculo2.toFixed(4)),
  };
}
