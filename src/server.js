import { obterTecnologiaAleatoria } from "./data.js";

import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const historico = [];

app.get("/tecnologia", (req, res) => {
    res.send(obterTecnologiaAleatoria());
});

app.post("/batalha", (req, res) => {
    // TODO: Implementar a lógica da batalha
});

app.post("/batalha/historico", (req, res) => {
    // TODO: Implementar a lógica de adição de novo resultado no histórico de batalhas
});

app.get("/batalha/historico", (req, res) => {
    // TODO: Implementar a lógica de obtenção de histórico de batalhas
});

app.listen(port, () => {
    console.log(`Servidor iniciado em: http://localhost:${port}`);
});
