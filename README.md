# mickot :zap:

`mickot` é a materialização de um personagem que para todo assunto possui frases prontas e corretas.

## Utilização

Para fazer a utilização do mickot, faça a definição das seguintes variáveis de ambiente:

- BOT_TOKEN: Token Telegram do bot;
- DATA_FILE: Caminho para o json que possui as falas do mickot.

## Sobre os dados

Os dados consumidos pelo `mickot` são armazenados em um json, que possui a seguinte estrutura:

```json
{
    "mickotePhrases": [
        {
            "phrase": "Uma frase",
            "author": "Pseudônimo do mickot para esta frase"
        }
    ]
}
```
