import  Express, {Response,Request} from "express";
import cors from "cors";
import routes from "./routes"
const app = Express();
const port = 3000;
app.use(Express.json())
app.use(cors())

app.get("/", (req:Request, res:Response) => {
  res.send("ola mundo tudo bom");
});

app.use("/api",routes)

app.listen(port, () => {
  
  console.log(`esta rodando na http://localhost:${port}`);
});