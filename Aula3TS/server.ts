// npm i express
// npm i -D nodemon ts-node
// npm i -D @types/node @types/express

import express from 'express';
import{ Request, Response } from 'express';


const app = express()
const port = 3000

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World! may friendo')
})
app.get('/batata', (req:Request, res:Response) => {
    res.send('Hello World! may friendo gostaria de uma batata ai que delicia cara?')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
