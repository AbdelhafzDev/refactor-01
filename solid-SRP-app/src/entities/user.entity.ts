import crypto from "crypto";
import { Entity, Column, Index, BeforeInsert, OneToMany } from "typeorm";
import bcrypt from "bcryptjs";
import Model from "./model.entity";

@Entity("users")
export class User extends Model {
    @Column()
    name: string;

    @Index("email_index")
    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    toJSON() {
        return {
            ...this,
            password: undefined
        };
    }
}
