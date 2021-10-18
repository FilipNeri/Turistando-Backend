import { getCustomRepository } from "typeorm";

import RotaTuristica from "../models/RotaTuristica";
import RotasTuristicasRepository from "../repositories/RotasTuristicasRepository";

interface Request{
    nome:string;
    texto:string;
    descricao:string;
    latitude:string;
    longitude:string;
}
class CreatePontoTuristicoService{
    public async execute({nome,texto,descricao,latitude,longitude}:Request):Promise<RotaTuristica>{
        const rotasTuristicasRepository = getCustomRepository(RotasTuristicasRepository)

        const rotaTuristica = rotasTuristicasRepository.create({
            nome,texto,descricao,latitude,longitude
        }
        )
        await rotasTuristicasRepository.save(rotaTuristica)
        return rotaTuristica
    }
}
export default CreatePontoTuristicoService