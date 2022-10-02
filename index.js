
//const { Telegraf, Markup } = require('telegraf');

const { Composer } = require("telegraf");

const bot =new Composer();




bot.start((ctx) => ctx.reply('Welcome'));


        
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.command("test",(ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id,"Test",{
        reply_markup:{
            inline_keyboard:[
                [
                    {
                        text:"click",
                        callback_data:"one",
                        
                    },
                    {
                        text:"no click",
                        callback_data:"two",
                    },
                ]
            ]
        }
    })
})

bot.action("one",(ctx)=>{
    ctx.answerCbQuery();
    ctx.reply("you click the button 1",{
        reply_markup:{
            inline_keyboard:[
                [
                    {
                        text:"back",
                        callback_data:"one"
                    }
                ]
            ]
        }
    });
    
})


bot.action("two",(ctx)=>{
    ctx.answerCbQuery();
    ctx.reply("you click the button 2",Markup.forceReply());

})



// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export default bot;