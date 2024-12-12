const tecnologias = [
    {
        nome: "JavaScript",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        desempenho: 7,
        flexibilidade: 9,
        popularidade: 10,
        compatibilidade: 9,
        categoria: "fullStack",
    },
    {
        nome: "Python",
        imagem: "https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-1713885634631.webp",
        desempenho: 6,
        flexibilidade: 8,
        popularidade: 9,
        compatibilidade: 8,
        categoria: "backend",
    },
    {
        nome: "Java",
        imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/242px-Java_programming_language_logo.svg.png",
        desempenho: 8,
        flexibilidade: 7,
        popularidade: 8,
        compatibilidade: 8,
        categoria: "backend",
    },
    {
        nome: "PHP",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/242px-PHP-logo.svg.png",
        desempenho: 6,
        flexibilidade: 7,
        popularidade: 7,
        compatibilidade: 7,
        categoria: "backend",
    },
    {
        nome: "Ruby",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/242px-Ruby_logo.svg.png",
        desempenho: 6,
        flexibilidade: 8,
        popularidade: 6,
        compatibilidade: 7,
        categoria: "backend",
    },
    {
        nome: "C#",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/260px-C_Sharp_Logo_2023.svg.png",
        desempenho: 8,
        flexibilidade: 7,
        popularidade: 7,
        compatibilidade: 8,
        categoria: "backend",
    },
    {
        nome: "HTML",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png",
        desempenho: 5,
        flexibilidade: 6,
        popularidade: 10,
        compatibilidade: 9,
        categoria: "frontend",
    },
    {
        nome: "CSS",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Html5_css3_styling.svg/240px-Html5_css3_styling.svg.png",
        desempenho: 5,
        flexibilidade: 6,
        popularidade: 10,
        compatibilidade: 9,
        categoria: "frontend",
    },
    {
        nome: "SQL",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/1024px-Sql_data_base_with_logo.svg.png?20231031073357",
        desempenho: 7,
        flexibilidade: 5,
        popularidade: 8,
        compatibilidade: 7,
        categoria: "database",
    },
    {
        nome: "TypeScript",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/128px-Typescript_logo_2020.svg.png",
        desempenho: 7,
        flexibilidade: 8,
        popularidade: 8,
        compatibilidade: 9,
        categoria: "fullStack",
    },
    {
        nome: "Go",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/520px-Go_Logo_Blue.svg.png",
        desempenho: 9,
        flexibilidade: 7,
        popularidade: 7,
        compatibilidade: 8,
        categoria: "backend",
    },
    {
        nome: "Rust",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/520px-Rust_programming_language_black_logo.svg.png",
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
