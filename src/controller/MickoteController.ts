import {ContextMessageUpdate} from "telegraf";
import {Start, TFController, TFContext, Hears} from 'ts-telegraf-decorators'


@TFController()
export class MickoteController {
    @Start()
    start(@TFContext() ctx: ContextMessageUpdate){
        ctx.reply('Hello start')
    }
    
    @Hears("Frase do dia")
    phraseOfDay(@TFContext() ctx: ContextMessageUpdate) {
        ctx.reply("Hoje vai ser um belo dia!")
    }
}
