import { buildBot } from "ts-telegraf-decorators";
import { MickoteController } from "./controller/MickoteController";

buildBot({
    token: process.env.BOT_TOKEN,
    controllers: [MickoteController],
}).startPolling()
