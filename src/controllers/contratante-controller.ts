
import { Request, Response } from "express";
import ContratanteService from "../services/contratante-service.js";

export class ContratanteController {
    private contratanteService: ContratanteService;

    constructor() {
        this.contratanteService = new ContratanteService();
    }

    public async createContratante(req: Request, res: Response): Promise<Response> {
        try {
            const { nomeCompleto } = req.body;
            const newContratante = await this.contratanteService.createContratante(nomeCompleto);
            return res.status(201).json(newContratante);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            return res.status(500).json({ message: "Failed to create contratante", error: errorMessage });
        }
    }

    public async getAllContratantes(req: Request, res: Response): Promise<Response> {
        try {
            const contratantes = await this.contratanteService.getAllContratantes();
            return res.status(200).json(contratantes);
        } catch (error) {
            return res.status(500).json({ message: "Failed to fetch contratantes", error });
        }
    }

    public async getContratanteById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const contratante = await this.contratanteService.getContratanteById(Number(id));
            if (!contratante) return res.status(404).json({ message: "Contratante not found" });
            return res.status(200).json(contratante);
        } catch (error) {
            return res.status(500).json({ message: "Failed to fetch contratante", error });
        }
    }

    public async updateContratante(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { nomeCompleto } = req.body;
            const updatedContratante = await this.contratanteService.updateContratante(Number(id), nomeCompleto);
            if (!updatedContratante) return res.status(404).json({ message: "Contratante not found" });
            return res.status(200).json(updatedContratante);
        } catch (error) {
            return res.status(500).json({ message: "Failed to update contratante", error });
        }
    }

    public async deleteContratante(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id, 10);
        try {
            const message = await this.contratanteService.deleteContratante(id);
            return res.status(200).json({ message });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            return res.status(500).json({ message: "Failed to delete contratante", error: errorMessage });
        }
    }
    
    
    
}
