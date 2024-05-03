// import { ConnectionOptions } from "mysql2";
// import { Tenant } from "src/api/tenant/tenant.entity";
// import { createConnection } from "typeorm/browser";

// async function seed() {
//   // Get the TypeORM connection options
//   const typeOrmOptions: ConnectionOptions = {
//     type: "postgres",
//     host: process.env.DB_HOST || "localhost",
//     port: parseInt(process.env.DB_PORT || "5432"),
//     username: process.env.DB_USER || "postgres",
//     password: process.env.DB_PASS || "admin123",
//     database: process.env.DB_NAME || "sms",
//     entities: [Tenant],
//     synchronize: true, // set to false in production
//   };

//   // Create a connection using the options
//   const connection = await createConnection(typeOrmOptions);

//   // Seed tenants
//   const tenantRepository = connection.getRepository(Tenant);
//   await tenantRepository.save([
//     {
//       tenant_name: "Tenant 1",
//       tenant_domain: "tenant1.com",
//       email: "admin@tenant1.com",
//       is_active: true,
//       password: "admin@1122",
//       created_by: BigInt(1),
//     },
//   ]);

//   // Close the connection
//   await connection.close();
// }

// // Execute the seed function
// seed()
//   .then(() => console.log("Database seeded successfully"))
//   .catch((error) => console.error("Error seeding database:", error));
