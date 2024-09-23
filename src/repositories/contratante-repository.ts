import Contratante, { ContratanteCreationAttributes } from "../models/contratante-model.js";

export class ContratanteRepository {
    public async create(data: ContratanteCreationAttributes): Promise<Contratante> {
        try {
            const contratante = await Contratante.create(data);
            return contratante;
        } catch (error) {
            throw new Error(`Unable to create contratante: ${(error as Error).message}`);
        }
    }

    public async findAll(): Promise<Contratante[]> {
        try {
            return await Contratante.findAll();
        } catch (error) {
            throw new Error(`Unable to fetch contratantes: ${(error as Error)}`);
        }
    }

    public async findById(id: number): Promise<Contratante | null> {
        try {
            return await Contratante.findByPk(id);
        } catch (error) {
            throw new Error(`Unable to find contratante with ID ${id}: ${(error as Error).message}`);
        }
    }

    public async update(id: number, data: ContratanteCreationAttributes): Promise<Contratante | null> {
        try {
            const contratante = await Contratante.findByPk(id);
            if (!contratante) throw new Error("Contratante not found");
            return await contratante.update(data);
        } catch (error) {
            throw new Error(`Unable to update contratante: ${(error as Error).message}`);
        }
    }

    public async delete(id: number): Promise<void> {
        try {
            const contratante = await Contratante.findByPk(id);
            if (!contratante) throw new Error("Contratante not found");
            await contratante.destroy();
        } catch (error) {
            throw new Error(`Unable to delete contratante: ${(error as Error).message}`);
        }
    }
    
}

export default ContratanteRepository;
