import { getCustomRepository } from "typeorm";

import Evento from "../models/Evento";
import EventosRepository from "../repositories/EventosRepository";

interface Request{
    nome:string;
    texto:string;
    descricao:string;
    latitude:string;
    longitude:string;
}
class CreateEventoService{
    public async execute({nome,texto,descricao,latitude,longitude}:Request):Promise<Evento>{
        const eventosRepository = getCustomRepository(EventosRepository)

        const evento = eventosRepository.create({
            nome,texto,descricao,latitude,longitude
        }
        )
        await eventosRepository.save(evento)
        return evento
    }
}
export default CreateEventoService