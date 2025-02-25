# Coding Dojo com a LAWD

_Dojo_ é uma palavra de origem japonesa que significa "local de treinamento", portanto, **Coding Dojo** nada mais é do que um local para treinamento de código, mas como funciona isso?

## Dinâmica

A dinâmica do coding dojo é em grupo, onde o grupo tem como objetivo de resolver um desafio. Cada membro do grupo possui um papel, e durante a dinâmica, os membros do grupo alternam os papéis de 5 em 5 minutos, respeitando sempre a seguinte formação:

-   1 piloto
-   1 co-piloto
-   2 plateias/observadores

Cada papel tem uma função, o **piloto** será a pessoa que estará com as mãos de fato no código, será ela que estará no comando do teclado e mouse. O **co-piloto** será o ajudante do **piloto**, dando todo o auxílio na resolução do problema. A **plateia** tem a única função de observar o **piloto** e **co-piloto** na resolução do problema proposto.
Após 5 minutos, todos do grupo trocam de papéis, respeitando o seguinte fluxo:

Piloto -> Plateia -> Co-Piloto -> Piloto

O **piloto** sempre irá para a **plateia**, um membro da **plateia** vai para o lugar do **co-piloto** e o **co-piloto** assume o comando, atuando como **piloto**.
E essa dinâmica continua até a resolução do problema.

## Formato de Resolução do Problema

O problema deve ser solucionado utilizando a prática do **TDD** (Test Driven Development), que incentiva o uso de **baby steps** (passos de bebê), ou seja, o desenvolvimento através de passos curtos. O **TDD** tem os seguintes passos:

1. Escrever um teste que falha - _Red_ 🔴;
2. Escrever uma solução simples para o teste - _Green_ 🟢;
3. Melhorar a solução (se puder ser melhorada) - _Refactor_ 🔵;
4. Escrever um novo teste.

E esse deve ser o fluxo, cíclico e contínuo, durante todo o desenvolvimento. A ideia é que o problema seja resolvido aos poucos, influenciando os participantes a pensarem no problema de pouco em pouco, sem colocar a "carroça na frente dos bois".

## O Desafio

O desafio envolve um jogo de batalha de tecnologias web, onde cada carta de tecnologia possui valores de **0 a 10** para os seguintes atributos:

-   **Desempenho**: avalia a velocidade e a eficiência da tecnologia. (0 a 10)
-   **Flexibilidade**: mede a capacidade da tecnologia de se adaptar a diferentes contextos. (0 a 10)
-   **Popularidade**: representa o número de desenvolvedores que usam ou conhecem a tecnologia. (0 a 10)
-   **Compatibilidade**: avalia a integração da tecnologia com frameworks e tecnologias web. (0 a 10)
-   **Categoria**: A categoria da tecnologia é representada por um dos seguintes valores:
    -   **Frontend**: Linguagens voltadas para o desenvolvimento do lado do cliente.
    -   **Backend**: Linguagens para o desenvolvimento do lado do servidor.
    -   **Full Stack**: Linguagens que podem ser usadas tanto no lado do cliente quanto do servidor.
    -   **Database**: Linguagens específicas para manipulação de dados e integração com bancos de dados.

A batalha funciona através da verificação do maior valor do cálculo dos atributos entre as duas linguagens, onde o cálculo é feito através da seguinte fórmula:

$$
\text{Resultado} = \left( \frac{\text{Desempenho}}{\text{Flexibilidade do oponente}} \right) \cdot \text{Potência}
$$

A **Potência** é feita com base na **Popularidade** e na **Compatibilidade**, através do cálculo da média ponderada dos dois atributos dividida por 10, sendo que a **Popularidade** tem peso 7 e a **Compatibilidade** tem peso 3.

$$
\text{Potência} = \frac{ \frac{\text{Popularidade} \cdot 7 + \text{Compatibilidade} \cdot 3}{10}}{10}
$$

Sobre as **Categorias**, eles têm a capacidade de aplicar um multiplicador em um dos atributos, se a **Categoria** da carta tiver vantagem sobre a **Categoria** do oponente:

-   **Backend** ganha de **Frontend**: É aplicado um multiplicador de 1.2 à **Desempenho**;
-   **Frontend** ganha de **Full Stack**: É aplicado um multiplicador de 1.5 à **Popularidade**;
-   **Full Stack** ganha de **Database** e **Backend**: É aplicado um multiplicador de 1.4 à **Flexibilidade**;
-   **Database** ganha de **Frontend** e **Backend**: É aplicado um multiplicador de 1.7 à **Compatibilidade**;
-   Categorias **iguais** não aplicam multiplicadores.

**Exemplo**:

| Atributos           | Tecnologia A | Tecnologia B |
| ------------------- | ------------ | ------------ |
| **Desempenho**      | 5            | 7            |
| **Flexibilidade**   | 8            | 6            |
| **Popularidade**    | 8            | 5            |
| **Compatibilidade** | 6            | 9            |
| **Categoria**       | Backend      | Frontend     |

Nesse exemplo, a tecnologia A tem vantagem de elemento de **Backend**, por isso ele recebe um multiplicador de 1.2 no atributo de **Desempenho**, o cálculo fica assim:

$$
\text{A} = \left( {\frac{5 \cdot 1.2} {6}} \right) \cdot \frac{\frac {8 \cdot 7 + 6 \cdot 3} {10}} {10}
$$

$$
\text{A} = {0.74}
$$

$$
\text{B} = \left( {\frac{7} {8}} \right) \cdot \frac{\frac {5 \cdot 7 + 9 \cdot 3} {10}} {10}
$$

$$
\text{B} = {0.5425}
$$

$$
{0.74 > 0.5425}
$$

$$
\text{A > B}
$$

Portanto, o vencedor é **A**!

O desafio será desenvolver um código para seguir essa lógica e dinâmica de jogo e demonstrar em uma interface web, dentro de um template já pré-definido, em cards que mostrem os atributos das duas tecnologias da batalha, além de uma forma de indicar o vencedor. A parte do backend será responsável por sortear os lutadores e calcular o resultado das lutas, enquanto que o frontend será responsável por acionar esses eventos e mostrar em tela.
