import {Container, Inject} from "typedi";
import {ContextMessageUpdate} from "telegraf";
import {Start, TFController, TFContext, Hears} from 'ts-telegraf-decorators'
import IPhraseConnector from "../service/IPhraseConnector";

import { BotTextConfig } from "../text.config";

@TFController()
export class MickoteController {
    phraseServices: IPhraseConnector;

    constructor() {
        this.phraseServices = Container.get("phrase.service");
    }

    @Start()
    start(@TFContext() ctx: ContextMessageUpdate){
        ctx.reply(BotTextConfig.helloText);
    }
    
    @Hears(BotTextConfig.phraseOfDayHears)
    phraseOfDay(@TFContext() ctx: ContextMessageUpdate) {
        ctx.reply(this.phraseServices.getPhrase());
    }
}
