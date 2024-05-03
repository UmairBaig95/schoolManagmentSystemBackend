import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateUserTable1714716629092 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "first_name",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "last_name",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "date_of_birth",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "gender",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "address",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "zip_code",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "city",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "state",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "is_archived",
            type: "boolean",
            default: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "is_active",
            type: "boolean",
            default: true,
          },
          {
            name: "mobile_number",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "tenant",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "tenant_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "created_by",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "role",
            type: "enum",
            enum: ["ADMIN", "PLATFORM_ADMIN", "TEACHER", "STUDENT", "PARENT"],
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "user",
      new TableForeignKey({
        columnNames: ["created_by"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("user", "FK_created_by");
    await queryRunner.dropTable("user");
  }
}
