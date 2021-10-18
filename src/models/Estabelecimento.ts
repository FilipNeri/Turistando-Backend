/*{
    "id": "0",
    "name": "Pedra do Frade",
    "description": "Teste",
    "coordinates": {"lat": -28.42285611136512, "lng": -48.73840122270909},
    "photos": [{"name": "Pedra do frade", "url": "https://static.fecam.net.br/thumbs/1918/2393171_resize_550_.jpg"}],
    "videos": [{"name": "Vídeo da ponte", "url": "https://youtu.be/ResiJNH719k"}]
}*/
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

// decorator - será sempre armazenado na tabela de appointments
// sempre será em cima do que quer relacionar à tabela
@Entity('estabelecimentos')
class Estabelecimento{

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

export default Estabelecimento
