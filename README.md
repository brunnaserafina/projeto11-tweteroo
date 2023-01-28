<h1 align="left">Tweteroo 🐦</h1>

###

<p align="left">Esta é uma API (Application Programming Interface) de um clone do Twitter</p>

###

### ⚙️ Funcionalidades

- Armazenamento de Dados
- Cadastro
- Postar tweets
- Listar todos os tweets
- Retornar tweets de um usuário específico

</br>

### 📄 Documentação da API

##### INSCRIÇÃO:

```http
  POST /sign-up
```

- Body:

| Parâmetro  | Tipo     | Descrição                        |
| :--------- | :------- | :--------------------------------|
| `username` | `string` | `Username do usuário`            |
| `avatar`   | `string` | `Endereço do avatar escolhido`   |

--

##### POSTAR TWEET:

```http
  POST /tweets
```

- Body:

| Parâmetro  | Tipo     | Descrição                             |
| :--------- | :------- | :-------------------------------------|
| `tweet`    | `string` | `Tweet que o usuário deseja publicar` |


- Headers:

| Parâmetro  | Tipo     | Descrição             |
| :----------| :------- | :---------------------|
| `username` | `string` | `Username do usuário` |

--

##### RETORNAR OS DEZ ÚLTIMOS TWEETS PUBLICADOS:

```http
  GET /tweets
```

--

##### RETORNAR OS TWEETS DE UM USUÁRIO:

```http
  GET /tweets/:username
```

</br>

### ▶️ Rodando a aplicação

1. Crie ou selecione uma pasta com o nome de sua preferência
2. Clone este repositório na pasta criada/selecionada:

```bash
 $ git clone https://github.com/brunnaserafina/tweteroo-api.git
```
3. Instale suas depêndencias:

```bash
   npm i
```

4. Inicie a aplicação:

```bash
   npx nodemon src/index.js
```

</br>

### 🛠️ Tecnologias utilizadas

 <img align="left" alt="node" height="30px" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
 <img align="left" alt="express" height="30px" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />

</br>
</br>

### 🙇🏻‍♀️ Autora

- Feito com ❤️ por [@brunnaserafina](https://www.github.com/brunnaserafina)

