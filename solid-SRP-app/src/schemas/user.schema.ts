import { object, string, TypeOf, z } from "zod";

const params = {
    params: object({
        userId: string()
    })
};

export const updateUserSchema = object({
    ...params,
    body: object({
        name: string(),
        email: string().email()
    })
});

export type updateUserReq = TypeOf<typeof updateUserSchema>;
