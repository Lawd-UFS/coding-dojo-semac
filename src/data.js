const tecnologias = [
  {
    nome: "JavaScript",
    imagem: "assets/javascript.png",
    desempenho: 7,
    flexibilidade: 9,
    popularidade: 10,
    compatibilidade: 9,
    categoria: "fullStack",
  },
  {
    nome: "Python",
    imagem: "assets/python.png",
    desempenho: 6,
    flexibilidade: 8,
    popularidade: 9,
    compatibilidade: 8,
    categoria: "backend",
  },
  {
    nome: "Java",
    imagem: "assets/java.png",
    desempenho: 8,
    flexibilidade: 7,
    popularidade: 8,
    compatibilidade: 8,
    categoria: "backend",
  },
  {
    nome: "PHP",
    imagem: "assets/php.png",
    desempenho: 6,
    flexibilidade: 7,
    popularidade: 7,
    compatibilidade: 7,
    categoria: "backend",
  },
  {
    nome: "Ruby",
    imagem: "assets/ruby.png",
    desempenho: 6,
    flexibilidade: 8,
    popularidade: 6,
    compatibilidade: 7,
    categoria: "backend",
  },
  {
    nome: "C#",
    imagem: "assets/c-sharp.png",
    desempenho: 8,
    flexibilidade: 7,
    popularidade: 7,
    compatibilidade: 8,
    categoria: "backend",
  },
  {
    nome: "HTML",
    imagem: "assets/html.png",
    desempenho: 5,
    flexibilidade: 6,
    popularidade: 10,
    compatibilidade: 9,
    categoria: "frontend",
  },
  {
    nome: "CSS",
    imagem: "assets/css.png",
    desempenho: 5,
    flexibilidade: 6,
    popularidade: 10,
    compatibilidade: 9,
    categoria: "frontend",
  },
  {
    nome: "SQL",
    imagem: "assets/sql.png",
    desempenho: 7,
    flexibilidade: 5,
    popularidade: 8,
    compatibilidade: 7,
    categoria: "database",
  },
  {
    nome: "TypeScript",
    imagem: "assets/typescript.png",
    desempenho: 7,
    flexibilidade: 8,
    popularidade: 8,
    compatibilidade: 9,
    categoria: "fullStack",
  },
  {
    nome: "Go",
    imagem: "assets/go.png",
    desempenho: 9,
    flexibilidade: 7,
    popularidade: 7,
    compatibilidade: 8,
    categoria: "backend",
  },
  {
    nome: "Rust",
    imagem: "assets/rust.png",
    desempenho: 9,
    flexibilidade: 6,
    popularidade: 6,
    compatibilidade: 7,
    categoria: "backend",
  },
];

let ultimoIndice = -1;

export function obterTecnologiaAleatoria() {
  const indice = Math.floor(Math.random() * tecnologias.length);

  if (ultimoIndice === indice) return obterTecnologiaAleatoria();

  ultimoIndice = indice;

  return tecnologias[indice];
}
