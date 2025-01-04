import { obterTecnologiaAleatoria } from "./data.js";
import { calcularBatalha } from "./battle.js";

import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const historico = [];

app.get("/api/tecnologia", (req, res) => {
  res.json(obterTecnologiaAleatoria());
});

app.post("/api/batalha", (req, res) => {
  /**
   * Exemplo de objeto que será recebido:
   *
   * {
   *  tecnologia1: {
   *   nome: "tecnologia1",
   *   desempenho: 9,
   *   flexibilidade: 8,
   *   popularidade: 7,
   *   complexidade: 6,
   *   categoria: "fullStack"
   *  },
   *  tecnologia2: {
   *   nome: "tecnologia2",
   *   desempenho: 8,
   *   flexibilidade: 9,
   *   popularidade: 7,
   *   complexidade: 5,
   *   categoria: "backend"
   * }
   *
   */
  const { tecnologia1, tecnologia2 } = req.body;
  const resultado = calcularBatalha(tecnologia1, tecnologia2);

  res.json(resultado);
});

app.post("/api/batalha/historico", (req, res) => {
  /**
   * Exemplo de objeto que será recebido:
   *
   * {
   *  lutadores: ["tecnologia1", "tecnologia2"],
   *  vencedor: "tecnologia1",
   * }
   *
   */
  historico.push(req.body);

  res.sendStatus(201);
});

app.get("/api/batalha/historico", (req, res) => {
  res.json(historico);
});

app.listen(port, () => {
  console.log(`Servidor iniciado em: http://localhost:${port}`);
});
