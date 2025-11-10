const express = require("express");
const router = express.Router();
const pool = require("../db"); // Importa a conexão com o banco

// Rota 1: Listar todas as Tarefas - MÉTODO LISTAR
router.get("/", (req, res) => {
    // Retorna todos os campos, ordenados pela data de criação
    pool.query("SELECT * FROM tarefas", (err, result) => {
        if (err) {
            console.error("Erro ao listar tarefas:", err);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
        res.json(result.rows); // Status Code 200 (OK)
    });
});

// Rota 2: Buscar Tarefa por ID 
router.get("/:id", (req, res) => {
    const id = req.params.id;
    pool.query("SELECT * FROM tarefas WHERE id = $1", [id], (err, result) => {
        if (err) {
            console.error("Erro ao buscar tarefa:", err);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
        if (result.rows.length === 0) {
            return res.status(400).json({ mensagem: `Tarefa ${id} não encontrada` }); // Status 404 (Not Found)
        }
        res.json(result.rows[0]); // Status 200 (OK)
    });
});

// Rota 3: Criar Nova Tarefa (POST /tarefas)
router.post("/", (req, res) => {
    const { titulo, descricao, status } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: "Título é obrigatório." });
    }

    const sql = 'INSERT INTO tarefas(titulo, descricao, status) VALUES($1, $2, $3)';
    const params = [titulo, descricao || null, status || 'pendente'];

    pool.query(sql, params, (err, result) => {
        if (err) {
            console.error("Erro ao criar:", err);
            return res.status(500).json({ error: "Erro interno." });
        }
        
        res.status(201).json({ 
            mensagem: "Tarefa criada com sucesso",
            tarefa: { titulo, descricao, status } 
        });
    });
});

// Rota 4: Atualizar Tarefa (PUT)
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const { titulo, descricao, status } = req.body;

    if (!titulo && !descricao && !status) {
        return res.status(400).json({ mensagem: "Nenhum campo fornecido." });
    }


    const sql = 'UPDATE tarefas SET titulo = $1, descricao = $2, status = $3 WHERE id = $4';
    
    const params = [
        titulo, 
        descricao || null, // Permite NULL para campos TEXT
        status || 'pendente', // Garante que o status tenha um valor
        id
    ];

    pool.query(sql, params, (err, result) => {
        if (err) {
            console.error("Erro ao atualizar:", err);
            return res.status(500).json({ error: "Erro interno. Garante que o TÍTULO foi preenchido" }); 
        }

        if (result.rowCount === 0) {
            return res.status(404).json({ mensagem: `Tarefa ${id} não encontrada.` });
        }
        
        res.json({
            mensagem: `Tarefa ${id} atualizada com sucesso.`
        });
    });
});

// Rota 5: Excluir Tarefa 
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    pool.query('DELETE FROM tarefas WHERE id = $1', [id], (err, result) => {
        if (err) {
            console.error("Erro ao excluir:", err);
            return res.status(500).json({ error: "Erro interno." });
        }
        
        if (result.rowCount === 0) {
            return res.status(404).json({ mensagem: `Tarefa ${id} não encontrada.` });
        }
        
        res.json({ mensagem: `Tarefa ${id} deletada com sucesso.` });
    });
});

module.exports = router;