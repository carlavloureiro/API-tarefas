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
```

🧭 Endpoints da API (CRUD Completo)
-----------------------------------

O endpoint base para todas as operações é: **https://api-tarefas-xb8p.onrender.com/tarefas**

Todas as requisições que enviam dados (POST, PUT) devem usar o Header Content-Type: application/json.

<img width="469" height="308" alt="image" src="https://github.com/user-attachments/assets/fe711d0d-5908-4142-8408-d931718a290d" />

🔑 Como Utilizar (Exemplo Postman)
----------------------------------

### 1\. Criar Tarefa (POST)

Envia os dados e recebe o código 201 Created e a confirmação.
```json
{
  "titulo": "Implementar o README",
  "descricao": "Adicionar o arquivo de documentação ao GitHub.",
  "status": "pendente"
}
```
### 2\. Atualizar Tarefa (PUT)

Para atualizar, envie o **objeto completo** (todos os campos) com o ID na URL para garantir que o campo titulo (NOT NULL) não seja sobrescrito com um valor vazio.
```json
{
    "titulo": "Implementar o README",
    "descricao": "Adicionar o arquivo de documentação ao GitHub.",
    "status": "concluído" 
}
```
### 3\. Listar Todas as Tarefas (GET)

A operação GET /tarefas não requer um corpo de requisição. A resposta será um array de objetos JSON.
Resposta de Exemplo:
```json
[
    {
        "id": 1,
        "titulo": "Implementar o README",
        "descricao": "Adicionar o arquivo de documentação ao GitHub.",
        "status": "concluído",
        "datacriacao": "2025-11-10"
    },
    {
        "id": 2,
        "titulo": "Testar rota DELETE",
        "descricao": null,
        "status": "pendente",
        "datacriacao": "2025-11-10"
    }
]
```

### 4\. Excluir Tarefa (DELETE)

A operação DELETE não requer um corpo JSON, apenas o ID na URL.
Resposta de Sucesso:
```json
{
    "mensagem": "Tarefa 1 deletada com sucesso."
}
```

👥 Equipe de Desenvolvimento
----------------------------

*   Carla Vazzoler Loureiro
    
*   Gabriel Ramos Maciel
    
*   Luis Gustavo de Jesus Ribeiro Pimentel
    
*   Luiz Henrique Lesquives Sartório
    
*   Vinicio Mendes
