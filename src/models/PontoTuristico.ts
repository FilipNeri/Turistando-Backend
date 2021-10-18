import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import {uuid} from 'uuidv4'
// decorator - será sempre armazenado na tabela de appointments
// sempre será em cima do que quer relacionar à tabela
@Entity('pontos_turisticos')
class PontoTuristico{

    //primary key gerado automaticamente
    @PrimaryGeneratedColumn('uuid')// podreia ser increment
    id:string;
    //coluna tradicional
    @Column()// ja é varchar
    nome:string;

    @Column()// ja é varchar
    texto:string;

    @Column()// ja é varchar
    descricao:string;

    @Column()// ja é varchar
    latitude:string;

    @Column()// ja é varchar
    longitude:string;

/*     constructor(nome:string, historia:string, descricao:string, latitude:number, longitude:number){
        this.id = uuid()
        this.nome = nome
        this.historia = historia
        this.descricao = descricao
        this.latitude = latitude
        this.longitude = longitude
    } */
    
}

export default PontoTuristico
