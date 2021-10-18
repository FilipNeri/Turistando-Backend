import { getCustomRepository } from "typeorm";

import PontoTuristico from "../models/PontoTuristico";
import PontosTuristicosRepository from "../repositories/PontosTuristicosRepository";

interface Request{
    nome:string;
    texto:string;
    descricao:string;
    latitude:string;
    longitude:string;
}
class CreatePontoTuristicoService{
    public async execute({nome,texto,descricao,latitude,longitude}:Request):Promise<PontoTuristico>{
        const pontosTuristicosRepository = getCustomRepository(PontosTuristicosRepository)

        const pontoTuristico = pontosTuristicosRepository.create({
            nome,texto,descricao,latitude,longitude
        }
        )
        await pontosTuristicosRepository.save(pontoTuristico)
        return pontoTuristico
    }
}
export default CreatePontoTuristicoService