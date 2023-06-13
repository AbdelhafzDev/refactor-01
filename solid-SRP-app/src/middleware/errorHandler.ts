import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError";

export function errorHandler(error: AppError, req: Request, res: Response, next: NextFunction) {
    console.error(error.stack);

    res.status(500).json({
        success: false,
        message: "Internal server error"
    });
}
