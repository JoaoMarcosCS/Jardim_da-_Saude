import { Especialidade } from "../../entities/Especialidade";
import { Repository } from "typeorm";
import connection from "../../database/config/data-source"

class EspecialidadeService {
    private repo: Repository<Especialidade>

    async initialize(){
        this.repo = (await connection).getRepository(Especialidade);
    }

    constructor(){
        this.initialize();
    }

    async index(){
        const response = await this.repo.findAndCount({
            order:{
                nome: "asc"
            }
        })
        return response;
    }
}

export default new EspecialidadeService