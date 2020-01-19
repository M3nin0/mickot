import { Container } from "typedi";
import { buildBot } from "ts-telegraf-decorators";
import { MickoteController } from "./controller/MickoteController";
import PhraseFileService from "./service/PhraseFileService";

// Set services
Container.set("phrase.service", new PhraseFileService());

buildBot({
    token: process.env.BOT_TOKEN,
    controllers: [MickoteController],
}).startPolling()
