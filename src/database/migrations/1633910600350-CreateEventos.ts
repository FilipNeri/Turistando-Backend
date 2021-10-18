import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEventos1633910600350 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'eventos',
                columns: [
                    {
                        name:'id',
                        type:'varchar',
                        isPrimary:true,
                        generationStrategy:"uuid",
                        default:'uuid_generate_v4()'
                    },
                    {
                        name:'nome',
                        type:'varchar',
                        isNullable:false
                    },
                    {
                        name:'texto',
                        type:'varchar',
                        isNullable:false
                    },
                    {
                        name:'descricao',
                        type:'varchar',
                        isNullable:false
                    },
                    {
                        name:'latitude',
                        type:'varchar',
                        isNullable:false
                    },
                    {
                        name:'longitude',
                        type:'varchar',
                        isNullable:false
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('eventos')
    }

}
