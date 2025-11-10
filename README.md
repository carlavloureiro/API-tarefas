# API-tarefas
API REST para uma To-Do-List (Lista de Tarefas)

# 🚀 API de Gestão de Tarefas (To-Do List)

Esta é uma API RESTful completa desenvolvida em Node.js com o framework Express.js e persistência de dados utilizando PostgreSQL. O objetivo é fornecer uma interface para operações CRUD (Criar, Ler, Atualizar, Deletar) em tarefas.

O projeto foi desenvolvido como parte de uma atividade prática de criação e publicação de uma API REST, abrangendo desde a configuração do ambiente (Codespaces) até o deploy na nuvem (Render).

---

## 🔗 Links do Projeto
| **Repositório GitHub** | Público | `https://github.com/carlavloureiro/API-tarefas` |
| **API em Produção (Deploy)** | Online | `https://api-tarefas-xb8p.onrender.com` |

---

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** Node.js
* **Framework:** Express.js
* **Banco de Dados:** PostgreSQL
* **Conexão DB:** `pg` (Node Postgres)
* **Hospedagem:** Render (Web Service)
* **Desenvolvimento:** GitHub Codespaces

---

## 📝 Estrutura do Banco de Dados

O banco de dados PostgreSQL possui uma única tabela `tarefas` com a seguinte estrutura:

```sql
CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    status VARCHAR(50) DEFAULT 'pendente',
    dataCriacao DATE DEFAULT CURRENT_DATE
);

🧭 Endpoints da API (CRUD Completo)
-----------------------------------

O endpoint base para todas as operações é: **https://api-tarefas-xb8p.onrender.com/tarefas**

Todas as requisições que enviam dados (POST, PUT) devem usar o Header Content-Type: application/json.
