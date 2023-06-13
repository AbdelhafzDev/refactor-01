require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import config from "config";
import morgan from "morgan";
import cors from "cors";
import AppError from "./utils/appError";
import routes from "./routes/routes";
import validateEnv from "./utils/validateEnv";

export async function startServer() {
    validateEnv();
    const app = express();

    // MIDDLEWARE
    app.use(express.json({ limit: "10kb" }));

    if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

    app.use(
        cors({
            origin: config.get<string>("origin"),
            credentials: true
        })
    );

    // ROUTES
    app.use("/api/v1", routes);

    // UNHANDLED ROUTE
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
        next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    const port = config.get<number>("port");
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}
