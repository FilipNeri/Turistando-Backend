/*{
    "id": "0",
    "name": "Pedra do Frade",
    "description": "Teste",
    "coordinates": {"lat": -28.42285611136512, "lng": -48.73840122270909},
}*/
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

// decorator - será sempre armazenado na tabela de appointments
// sempre será em cima do que quer relacionar à tabela
@Entity('eventos')
class Evento{

    //primary key gerado automaticamente
    @PrimaryGeneratedColumn('uuid')// podreia ser increment
    id:string;

    //coluna tradicional
    @Column()// ja é varchar
    nome:string;
    
    //coluna tradicional
    @Column()// ja é varchar
    texto:string;

    @Column()// ja é varchar
    descricao:string;

    @Column()// ja é varchar
    latitude:string;

    @Column()// ja é varchar
    longitude:string;

    
}

export default Evento
