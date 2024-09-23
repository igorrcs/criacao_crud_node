var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ContratanteService from "../services/contratante-service.js";
export class ContratanteController {
    constructor() {
        this.contratanteService = new ContratanteService();
    }
    createContratante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nomeCompleto } = req.body;
                const newContratante = yield this.contratanteService.createContratante(nomeCompleto);
                return res.status(201).json(newContratante);
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
                return res.status(500).json({ message: "Failed to create contratante", error: errorMessage });
            }
        });
    }
    getAllContratantes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contratantes = yield this.contratanteService.getAllContratantes();
                return res.status(200).json(contratantes);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch contratantes", error });
            }
        });
    }
    getContratanteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const contratante = yield this.contratanteService.getContratanteById(Number(id));
                if (!contratante)
                    return res.status(404).json({ message: "Contratante not found" });
                return res.status(200).json(contratante);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch contratante", error });
            }
        });
    }
    updateContratante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nomeCompleto } = req.body;
                const updatedContratante = yield this.contratanteService.updateContratante(Number(id), nomeCompleto);
                if (!updatedContratante)
                    return res.status(404).json({ message: "Contratante not found" });
                return res.status(200).json(updatedContratante);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to update contratante", error });
            }
        });
    }
    deleteContratante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            try {
                const message = yield this.contratanteService.deleteContratante(id);
                return res.status(200).json({ message });
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
                return res.status(500).json({ message: "Failed to delete contratante", error: errorMessage });
            }
        });
    }
}
