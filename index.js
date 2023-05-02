const Telegraf = require('telegraf');
const bot = new Telegraf('6259424194:AAG800ZxhIHYwRZLk2cJ23dUaqaC6XbZkjA'); //bot token
const { read } = require('fs');
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    await characterAI.authenticateWithToken('711a8264e246a6eaf70be0f334862cef57009c6b'); //account token or using guest authenticateAsGuest() 
    const characterId = "8ehNKpVN7t4foQzUY0GRw7DIfzrsXe1ahXc_ajL-W6I" //characterid token
    const chat = await characterAI.createOrContinueChat(characterId);
    
    bot.start((ctx) => {
        ctx.reply('Welcome '+ ctx.from.first_name)
    });

    bot.on('text', async(ctx) => {
        const response = await chat.sendAndAwaitResponse(ctx.message.text, true)
        ctx.reply(response)
    });
})();

bot.launch()
