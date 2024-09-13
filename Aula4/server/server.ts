import express from 'express';
import Pessoa from '../Classes/Pessoa';

const app = express();
const port = 3000;
 app.get('/', (req, res) => {
  res.send('Hello World!');});

  app.get('/pessoa', (req, res) => {
    const pessoa1 = new Pessoa('João', 25,["jogar bola", "estudar", "trabalhar"]);
    const pessoa2 = new Pessoa('Maria', 30,["jogar bola", "estudar", "trabalhar"]);
    const listapessoas = [pessoa1, pessoa2];
    res.json(listapessoas);
    });

app.listen(port, () => {
    console.log(`api rodando na porta http://localhost:${port}`);
    });