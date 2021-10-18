import { getCustomRepository } from "typeorm";

import Estabelecimento from "../models/Estabelecimento";
import EstabelecimentosRepository from "../repositories/EstabelecimentosRepository";

interface Request{
    nome:string;
    texto:string;
    descricao:string;
    latitude:string;
    longitude:string;
}
class CreateEstabelecimentoService{
    public async execute({nome,texto,descricao,latitude,longitude}:Request):Promise<Estabelecimento>{
        const estabelecimentosRepository = getCustomRepository(EstabelecimentosRepository)

        const estabelecimento = estabelecimentosRepository.create({
            nome,texto,descricao,latitude,longitude
        }
        )
        await estabelecimentosRepository.save(estabelecimento)
        return estabelecimento
    }
}
export default CreateEstabelecimentoService