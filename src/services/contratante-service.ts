
import Contratante from "../models/contratante-model.js";
import ContratanteRepository from "../repositories/contratante-repository.js";

export class ContratanteService {
    private contratanteRepository: ContratanteRepository;

    constructor() {
        this.contratanteRepository = new ContratanteRepository();
    }

    public async createContratante(nomeCompleto: string): Promise<Contratante> {
        try {
            const contratante = await this.contratanteRepository.create({ nomeCompleto });
            return contratante;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to create contratante: ${error.message}`);
            }
            throw new Error("An unknown error occurred while creating contratante");
        }
    }

    public async getAllContratantes(): Promise<Contratante[]> {
        try {
            return await this.contratanteRepository.findAll();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to fetch contratantes: ${error.message}`);
            }
            throw new Error("An unknown error occurred while fetching contratantes");
        }
    }

    public async getContratanteById(id: number): Promise<Contratante | null> {
        return this.contratanteRepository.findById(id);
    }

    public async updateContratante(id: number, nomeCompleto: string): Promise<Contratante | null> {
        return this.contratanteRepository.update(id, { nomeCompleto });
    }

    public async deleteContratante(id: number): Promise<string> {
        await this.contratanteRepository.delete(id);
        return `Contratante com ID ${id} foi excluído com sucesso.`;
    }
    

}

export default ContratanteService;
