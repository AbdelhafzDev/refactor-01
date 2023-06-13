import { User } from "../entities/user.entity";
import { EntitySubscriberInterface, EventSubscriber, UpdateEvent } from "typeorm";

export class UserObserver implements EntitySubscriberInterface<any> {
    listenTo() {
        return User;
    }

    afterUpdate(event: UpdateEvent<any>) {
        console.log("User entity updated.");
        // simulate send mail in queue using BullMQ or kue
    }
}
