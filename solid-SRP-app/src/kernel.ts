import { createConnection } from "typeorm";
import { startServer } from "./app";
import { AppDataSource } from "./utils/data-source";
import { UserObserver } from "./observers/user.observer";

async function bootstrap() {
    AppDataSource.initialize()
        .then(async connection => {
            connection.subscribers.push(new UserObserver());
            await startServer();
        })
        .catch(error => console.log(error));
}

bootstrap();
