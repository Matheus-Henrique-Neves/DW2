import  Express  from "express";
const app = Express();
const port = 3000;
app.use(Express.json());

app.get("/", (req, res) => {
  res.json({msg:"Hello World!ok"});
});
app.get("/teste", (req, res) => {
    res.json({msg:"testei ok"});
});

app.get("/tabuada/:numero/:vaimutiplica", (req, res) => {
    const numero = Number(req.params.numero);
    const vaimutiplica = Number(req.params.vaimutiplica);
    const tabuada = [];
    for (let index = 0; index <= vaimutiplica; index++) {
        tabuada.push(`${numero} x ${index} = ${numero * index}`);
    }
    res.send(tabuada.join("\n"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}/`);
});