import { NextFunction, Request, Response } from "express";
import { updateUserReq } from "../schemas/user.schema";
import { updateUserProfile } from "../services/profile.service";

export const updateProfile = async (
    req: Request<updateUserReq["params"], {}, updateUserReq["body"]>,
    res: Response,
    next: NextFunction
) => {
    const user = await updateUserProfile(req.body, req.params.userId);

    res.status(200).json({
        status: "success"
    });
};
