import config from "config";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../utils/data-source";
import { updateUserReq } from "../schemas/user.schema";

const userRepository = AppDataSource.getRepository(User);

export const updateUserProfile = async (validated: updateUserReq["body"], id: string) => {
    try {
        await userRepository.update(id, validated);
    } catch (err: any) {
        console.log(err);
    }
};
