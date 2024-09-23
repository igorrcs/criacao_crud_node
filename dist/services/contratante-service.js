var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ContratanteRepository from "../repositories/contratante-repository.js";
export class ContratanteService {
    constructor() {
        this.contratanteRepository = new ContratanteRepository();
    }
    createContratante(nomeCompleto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contratante = yield this.contratanteRepository.create({ nomeCompleto });
                return contratante;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to create contratante: ${error.message}`);
                }
                throw new Error("An unknown error occurred while creating contratante");
            }
        });
    }
    getAllContratantes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.contratanteRepository.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Unable to fetch contratantes: ${error.message}`);
                }
                throw new Error("An unknown error occurred while fetching contratantes");
            }
        });
    }
    getContratanteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.contratanteRepository.findById(id);
        });
    }
    updateContratante(id, nomeCompleto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.contratanteRepository.update(id, { nomeCompleto });
        });
    }
    deleteContratante(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.contratanteRepository.delete(id);
            return `Contratante com ID ${id} foi excluído com sucesso.`;
        });
    }
}
export default ContratanteService;
