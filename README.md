# Project Klever Challanger

# Contexto

O Projeto consiste numa API REST que realiza consultas nos seguintes endpoints:

### Address Details

Este endpoint recebe um endereço como parâmetro, retornando os saldos e transações.
```bash
https://blockbook-bitcoin.tronwallet.me/api/v2/address/{address}
```
Retorno: 
```javascript
{
  "page": 1,
  "totalPages": 1,
  "itemsOnPage": 1000,
  "address": "D5Z7XrtJNg7hAtznSDMXvfiFmMYphwuWz7",
  "balance": "2432468097999991",
  "totalReceived": "3992283916999979",
  "totalSent": "1559815818999988",
  "unconfirmedBalance": "0",
  "unconfirmedTxs": 0,
  "txs": 3,
  "txids": [
    "461dd46d5d6f56d765f82e60e6bf0727a3a1d1cb8c4144373d805b152a21d308",
    "bdb5b47603c5d174eae3384c368068c8e9d2183b398ed0e31d125defa4447a10",
    "5c1d2686d70d82bd8e84b5d3dc4bd0e8485e28cdc865336db6a5e40b2098277d"
  ]
}
```
### Address UTXO Details
Retorna uma lista de transações confirmadas e não confirmadas.
```bash
https://blockbook-bitcoin.tronwallet.me/api/v2/utxo/{address}
```
Retorno: 
```javascript
[
  {
    "txid": "13d26cd939bf5d155b1c60054e02d9c9b832a85e6ec4f2411be44b6b5a2842e9",
    "vout": 0,
    "value": "1422303206539",
    "confirmations": 0,
    "lockTime": 2648100
  },
  {
    "txid": "a79e396a32e10856c97b95f43da7e9d2b9a11d446f7638dbd75e5e7603128cac",
    "vout": 1,
    "value": "39748685",
    "height": 2648043,
    "confirmations": 47,
    "coinbase": true
  },
  {
    "txid": "de4f379fdc3ea9be063e60340461a014f372a018d70c3db35701654e7066b3ef",
    "vout": 0,
    "value": "122492339065",
    "height": 2646043,
    "confirmations": 2047
  },
  {
    "txid": "9e8eb9b3d2e8e4b5d6af4c43a9196dfc55a05945c8675904d8c61f404ea7b1e9",
    "vout": 0,
    "value": "142771322208",
    "height": 2644885,
    "confirmations": 3205
  }
]
```
### Transaction Details

Retorna dados `normalizados` sobre a transação.

```bash
https://blockbook-bitcoin.tronwallet.me/api/v2/tx/{tx}
```
Retorno: 
```javascript
{
  "txid": "9e2bc8fbd40af17a6564831f84aef0cab2046d4bad19e91c09d21bff2c851851",
  "version": 1,
  "vin": [
    {
      "txid": "f124e6999bf67e710b9e8a8ac4dbb08a64aa9c264120cf98793455e36a531615",
      "vout": 2,
      "sequence": 4294967295,
      "n": 0,
      "addresses": [
        "DDhUv8JZGmSxKYV95NLnbRTUKni9cDZD3S"
      ],
      "isAddress": true,
      "value": "55795108999999",
      "hex": "473...2c7ec77bb982"
    }
  ],
  "vout": [
    {
      "value": "55585679000000",
      "n": 0,
      "hex": "76a914feaca9d9fa7120c7c587c00c639bb18d40faadd388ac",
      "addresses": [
        "DUMh1rPrXTrCN2Z9EHsLPg7b78rACHB2h7"
      ],
      "isAddress": true
    },
    {
      "value": "209329999999",
      "n": 1,
      "hex": "76a914ea8984be785868391d92f49c14933f47c152ea0a88ac",
      "addresses": [
        "DSXDQ6rnwLX47WFRnemctoXPHA9pLMxqXn"
      ],
      "isAddress": true
    }
  ],
  "blockHash": "78d1f3de899a10dd2e580704226ebf9508e95e1706f177fc9c31c47f245d2502",
  "blockHeight": 2647927,
  "confirmations": 1,
  "blockTime": 1553088212,
  "value": "55795008999999",
  "valueIn": "55795108999999",
  "fees": "100000000",
  "hex": "0100000...0011000"
}
```

A aplicação foi desenvolvida com os seguintes requisitos:

* Validação dos endereços de Bitcoin e ID de Transação com Joi;
* Utilizado métodos HTTP's para realizar as requisições;
* Testes de integração;
* Arquitetura MSC;
* Banco de dados: MongoDB conectado com Mongoose;

## Técnologias usadas

Back-end:
> Desenvolvido usando: Node.js, Express, Docker, Mongoose, MongoDB, Axios, Jest!

## Deploy

A aplicação foi feita com deploy no `Heroku`. Ao entrar no deploy da aplicação, a rota padrão `/` mostrará cada um dos endpoints e suas respectivas descrições. Todas os endpoints podem ser acessados, exceto `/send`.

Você pode acessar o deploy aqui: 
```bash
https://deploy-klever.herokuapp.com/
```

Instale a extensão [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR) para visualizar melhor o JSON no navegador.

## Instalando Dependências

Após clonar o projeto, utilize na pasta raiz o comando:

```bash
npm install
```

## Docker Compose

O projeto contém um arquivo `docker-compose.yml`. Utilize na raiz do projeto o comando: 
```bash
npm run compose:up
```

Este arquivo cria um container com uma imagem do mongoDB no docker. O usuário e senha padrão do arquivo é respectivamente `root` e `password`.

Após subir o container, utilize os seguintes comandos no terminal para autenticar o seu usuário:

```bash
mongo

use admin

db.auth('root', passwordPrompt())

// digite a senha: password
```

## Variáveis de Ambiente

Na raiz do projeto, crie um arquivo .env para configurar as variáveis de ambiente e inicializar a API.

```bash
PORT= // porta para rodar a API
MONGO_INITDB_ROOT_USERNAME= // nome de usuário
MONGO_INITDB_ROOT_PASSWORD= // senha de usuário
```
Caso já possua um usuário no mongoDB, utilize as váriaveis de ambiente para configurar a sua conexão com o banco.

Digite `npm test` para verificar se está tudo certo com a aplicação.

## Executando aplicação

Para rodar o projeto, utilize na pasta raiz o comando:

```bash
npm start
```

* Os endpoints estão no padrão REST, ou seja, utilize os verbos HTTP para realizar as requisições.

## Requisições

### Summary

* A rota padrão `/` retorna um sumário com a descrição de todas as rotas da aplicação.
* Abra no navegador com a porta correta, por exemplo http://localhost:3001/, para visualizar melhor todas os endpoints e suas respectivas descrições.

### Address Details

* Para retornar saldos e transações de um endereço de Bitcoin, devemos acessar o endpoint `GET /details/:address` passando na `URL` o parâmetro.
* Exemplo: 
```bash
http://localhost:3001/details/bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r
```
### Balance

* Para retornar uma lista de transações confirmadas e não confirmadas, devemos acessar o endpoint `GET /balance/:address` passando na `URL` o parâmetro.
* Exemplo: 
```bash
http://localhost:3001/balance/bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r
```

### Send btc

* Para enviar certa quantidade de btc, devemos acessar o endpoint `POST /send`.
* O endpoint deve receber a estrutura com os seguintes dados:
```javascript
{
    "address": "bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r", // endereço 
    "amount": "729049" // quantidade 
}
```
### Receive Transaction

* Para retornar dados "normalizados" sobre a transação, devemos acessar o endpoint `GET /tx/:transaction` passando na `URL` o parâmetro.
* Exemplo: 
```bash
http://localhost:3001/tx/e93e4d9e0ceb7d43c9d0932114391021c53fc1f25a8ee1101084818d81186cc5
```

## Referências:

* [Blockbook API](https://github.com/trezor/blockbook/blob/master/docs/api.md#send-transaction)
