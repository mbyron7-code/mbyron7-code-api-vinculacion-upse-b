import express from "express";
import paramertrosRoutes from "./routers/parametros.routes.js";

const app = express();
// middleware
app.use(express.json());

app.use('/api', paramertrosRoutes);

app.use((req, res, next)=> {
  res.status(404).json({
    message: 'Parametros de busqueda incorrectos'
  })
})

export default app;
