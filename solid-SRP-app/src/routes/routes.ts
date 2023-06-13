import express from "express";
import { updateProfile } from "../controllers/profile.controller";
import { validate } from "../middleware/validate";
import { updateUserSchema } from "../schemas/user.schema";

const router = express.Router();

router.patch("/profile/:userId", validate(updateUserSchema), updateProfile);

export default router;
