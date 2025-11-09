const express = require("express");
const app = express();

const pool = require("./db"); 

app.use(express.json());

// Importa e usa a rota de Tarefas
const tarefasRoutes = require("./routes/tarefas");
app.use("/tarefas", tarefasRoutes);

// <-- Adicionado: Teste de conexão (Passo 4) [cite: 456, 457, 458, 459, 460, 461, 462]
pool.query("SELECT NOW()", (err, result) => {
    if (err) {
        console.error("Erro ao conectar ao banco:", err);
    } else {
        console.log("Banco conectado:", result.rows);
    }
});
// --> Fim do teste

app.get("/", (req, res) => {
    res.json({ message: "API de Tarefas rodando" });
});

// Ajuste de porta para deploy no Render 
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});