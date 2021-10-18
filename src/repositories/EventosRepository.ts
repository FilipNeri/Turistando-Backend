import Evento from "../models/Evento";
import {EntityRepository, Repository} from 'typeorm'
/* interface CreatePontoTuristicoDTO{
    nome:string;
    historia:string;
    descricao:string;
    latitude:number;
    longitude:number;
} */
/*     private pontosTuristicos:PontoTuristico[];
    constructor(){
        this.pontosTuristicos=[]
    } */

/*     public all():PontoTuristico[]{
        return this.pontosTuristicos
    } */
/*     public create({nome,descricao,historia,latitude,longitude}:CreatePontoTuristicoDTO) : PontoTuristico{

        const pontoTuristico = new PontoTuristico({nome,historia,descricao,latitude,longitude})

        this.pontosTuristicos.push(pontoTuristico)

        return pontoTuristico
    } */
@EntityRepository(Evento)
class EventosRepository extends Repository<Evento>{
    

}
export default EventosRepository