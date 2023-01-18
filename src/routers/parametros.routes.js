import { Router } from "express";
import {
  createParametros,
  deleteParametros,
  getParametros,
  updateParametro,
	getParametro,
} from "../controllers/parametros.controller.js";

const router = Router();

// recibir todos los parametros
router.get("/parametros", getParametros);
// recibir un solo parametro con solo la id
router.get("/parametro/:id", getParametro);
// crear un solo parametro
router.post("/parametros", createParametros);
// editar un solo parametro con la id
router.put("/parametros/:id", updateParametro);
// eliminar un todos los parametro
router.delete("/parametros", deleteParametros);
export default router;