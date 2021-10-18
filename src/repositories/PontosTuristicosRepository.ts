import PontoTuristico from "../models/PontoTuristico";
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
@EntityRepository(PontoTuristico)
class PontosTuristicosRepository extends Repository<PontoTuristico>{
    

}
export default PontosTuristicosRepository