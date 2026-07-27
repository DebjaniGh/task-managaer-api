import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDueDate1785139996137 implements MigrationInterface {
    name = 'AddDueDate1785139996137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "dueDate" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "dueDate"`);
    }

}
