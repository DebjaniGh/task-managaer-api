import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserIdToTask1785244179804 implements MigrationInterface {
    name = 'AddUserIdToTask1785244179804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "userId" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "userId"`);
    }

}
