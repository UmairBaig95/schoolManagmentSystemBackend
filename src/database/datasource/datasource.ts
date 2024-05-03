import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "dotenv";

config();
export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "admin123",
  database: process.env.DB_NAME || "sms",
  synchronize: false,
  logging: false,
  migrationsTableName: "migrations",
  migrations: ["src/database/migrations/*.ts"],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
