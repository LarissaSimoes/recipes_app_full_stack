# App de Receitas Full Stack

Este repositório contém a implementação do back-end e a integração com o front-end para o projeto App de Receitas. O front-end já foi desenvolvido, e a seguir, você encontrará instruções para configurar e executar a aplicação.

## Estrutura do Projeto

### 1️⃣ Docker

O Docker é utilizado para containerizar todos os serviços (back-end, front-end e database). Para iniciar o projeto, utilize o comando:

```bash
docker-compose up -d
```

### 2️⃣ Back-end

O back-end é responsável por realizar a maior parte das implementações e roda na porta 3001.

Principais URLs do back-end:
- http://localhost:3001/meals
- http://localhost:3001/drinks

### 3️⃣ Front-end

O front-end já foi desenvolvido, e a única modificação feita foi configurar o arquivo Dockerfile e o fetch para a nova URL. O front-end se comunica com o serviço de back-end pela URL http://localhost:3001.

### 4️⃣ Banco de dados

O banco de dados fornece dados para o serviço de back-end. 

Principais URLs do back-end:
- http://localhost:3001/meals
- http://localhost:3001/drinks

## Endpoints do Back-end

Os endpoints do back-end foram adaptados conforme a tabela abaixo:

| Descrição                  | Novo Endpoint no Back-end    | Meals | Cocktail |
| -------------------------- | ---------------------------- | ----- | -------- |
| Buscar todos os nomes       | /name?q=                    | ✅    | ✅       |
| Buscar por nome específico  | /name?q=Arrabiata           | ✅    | ✅       |
| Buscar por primeira letra   | /letter?q=a                 | ✅    | ✅       |
| Buscar por aleatoriedade    | /random                     | ✅    | ✅       |
| Buscar todas as categorias  | /categories                 | ✅    | ✅       |
| Buscar todas as áreas       | /areas                      | ✅    | X        |
| Buscar todos os ingredientes| /ingredients                | ✅    | ✅       |
| Buscar por um ingrediente   | /ingredient?q=chicken_breast| ✅    | ✅       |
| Buscar por uma categoria    | /category?q=Seafood         | ✅    | ✅       |
| Buscar por uma área         | /area?q=Canadian            | ✅    | X        |

## Dockerização das Aplicações

Foram configurados os arquivos Dockerfile e docker-compose.yml:

- Na raiz dos diretórios `backend` e `frontend`, foi criado um arquivo Dockerfile.
- Na raiz do projeto, foi criado um arquivo docker-compose.yml.

Observações Técnicas:
- O projeto possui dois arquivos Dockerfile, um na raiz do diretório `backend` e outro na raiz `frontend`.
- O arquivo docker-compose.yml contém dois serviços: `backend` e `frontend`.
- O serviço `backend` funciona na porta 3001, e o serviço `frontend` funciona na porta 3000.

## Criando o Banco de Dados

### Back-end

O que foi feito:
- Criação do arquivo de conexão com o banco de dados.
- Modificação da aplicação para deixar de consumir a API externa e começar a ler/gravar seus próprios dados.
- Criação da base de dados para apenas UMA API externa.

**Aproveite seu App de Receitas!**
