import { faker } from "@faker-js/faker";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../utils/data-source";
import bcryptjs from "bcryptjs";

const userRepository = AppDataSource.getRepository(User);

AppDataSource.initialize()
    .then(async () => {
        const password = await bcryptjs.hash("secret", 10);
        for (let i = 0; i < 30; i++) {
            await userRepository.save({
                name: faker.internet.userName(),
                email: faker.internet.email(),
                password
            });
        }

        process.exit();
    })
    .catch((error: any) => console.log(error));
