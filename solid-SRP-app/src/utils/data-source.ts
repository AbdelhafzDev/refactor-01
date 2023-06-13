require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "config";

const MYSQLConfig = config.get<{
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}>("MYSQLConfig");

export const AppDataSource = new DataSource({
    ...MYSQLConfig,
    type: "mysql",
    synchronize: true,
    logging: true,
    entities: ["src/entities/**/*.entity{.ts,.js}"],
    migrations: ["src/migrations/**/*{.ts,.js}"],
    subscribers: ["src/subscribers/**/*{.ts,.js}"]
});
