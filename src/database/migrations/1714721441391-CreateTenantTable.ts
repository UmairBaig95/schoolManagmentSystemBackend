import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTenantTable1714721441391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tenant",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "tenant_name",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "tenant_domain",
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
            name: "is_active",
            type: "boolean",
            default: false,
          },
          {
            name: "password",
            type: "varchar",
            length: "60",
            isNullable: false,
          },
          {
            name: "created_by",
            type: "bigint",
            isNullable: true,
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
      "tenant",
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
    await queryRunner.dropTable("tenant");
  }
}
