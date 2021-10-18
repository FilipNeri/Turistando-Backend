import {IsNull, MigrationInterface, QueryRunner,Table} from "typeorm";

export default class CreateImage1633561905196 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'images',
                columns: [
                    {
                        name:'id',
                        type:'varchar',
                        isPrimary:true,
                        generationStrategy:"uuid",
                        default:'uuid_generate_v4()'
                    },
                    {
                        name:'id_item',
                        type:'varchar',
                        generationStrategy:"uuid",
                        default:'uuid_generate_v4()'
                    },
                    {
                        name:'nome',
                        type:'varchar',
                        isNullable:false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
