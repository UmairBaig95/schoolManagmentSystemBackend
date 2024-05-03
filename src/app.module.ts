import { Module, ValidationPipe } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./api/auth/auth.module";
import { Auth } from "./api/auth/entities/auth.entity";
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ResponseInterceptor } from "./common/interceptors/response.interceptor";
import { Exception } from "./common/middlewares/exception";
import { entities } from "src/database/entities/entity";
import * as dotenv from "dotenv";
dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "client", "dist"),
      serveRoot: "/", // Optional, set the root path to serve static files
      serveStaticOptions: {
        // index: false, // Disable index.html serving
        // setHeaders: (res) => {
        //   res.setHeader('Content-Type', 'application/javascript');
        // },
      },
    }),
    TypeOrmModule.forRoot(
      // {
      //   type: 'mssql',
      //   host: '192.168.5.121',
      //   port: 1433,
      //   username: 'afraz',
      //   password: 'aff_afraz_DIQR_PWA2023',
      //   database: 'Affiliation',
      //   entities: [User],
      //   synchronize: true,
      //   options: {
      //     encrypt: false,
      //   },
      // },
      {
        type: "postgres",
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT || "5432"),
        username: process.env.DB_USER || "postgres",
        password: process.env.DB_PASS || "admin123",
        database: process.env.DB_NAME || "sms",
        entities,
        synchronize: true,
        // @ts-ignore
        options: {
          encrypt: false,
        },
      }
    ),
    AuthModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR, // Global interceptor for Response handling
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER, // Global Exception Filter for handling exceptions
      useClass: Exception,
    },
    {
      provide: APP_PIPE, // Global Validation Pipe for handling Request data validation
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
