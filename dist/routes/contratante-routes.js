// src/routes/contratante-routes.ts
import { Router } from "express";
import { ContratanteController } from "../controllers/contratante-controller.js";
const router = Router();
const contratanteController = new ContratanteController();
router.post("/contratantes", (req, res) => contratanteController.createContratante(req, res));
router.get("/contratantes", (req, res) => contratanteController.getAllContratantes(req, res));
router.get("/contratantes/:id", (req, res) => contratanteController.getContratanteById(req, res));
router.put("/contratantes/:id", (req, res) => contratanteController.updateContratante(req, res));
router.delete("/contratantes/:id", (req, res) => contratanteController.deleteContratante(req, res));
export default router;
