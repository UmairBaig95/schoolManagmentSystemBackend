import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTeacherTable1714722010873 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "teacher",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "first_name",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "last_name",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "phone_number",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "address",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "date_of_birth",
            type: "date",
            isNullable: false,
          },
          {
            name: "bio",
            type: "text",
            isNullable: true,
          },
          {
            name: "qualification",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "subject",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "class",
            type: "varchar",
            length: "255",
            isNullable: true,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("teacher");
  }
}
