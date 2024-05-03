import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateClassesTable1714722192822 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "class",
            columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
              },
              {
                name: "name",
                type: "varchar",
                length: "255",
                isNullable: false,
              },
              {
                name: "section",
                type: "varchar",
                length: "255",
                isNullable: false,
              },
              {
                name: "grade",
                type: "varchar",
                length: "255",
                isNullable: false,
              },
              {
                name: "teacher_id",
                type: "int",
                isNullable: false,
              },
              {
                name: "is_active",
                type: "boolean",
                default: true,
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
            ],
          })
        );
    
        await queryRunner.createForeignKey(
          "class",
          new TableForeignKey({
            columnNames: ["teacher_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "teacher",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("user", "FK_teacher_id");
        await queryRunner.dropTable("class");
      }

}
