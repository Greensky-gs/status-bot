const dotenv = require('dotenv');
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.GuildPresences
    ]
});

/*
 * IMPORTANT
 * The file's path change depending of you're structure
 * If the bot_b folder is directly the main folder, remove bot_b.
 * 
 * Check https://github.com/Greensky-gs/event-handler for more info
 */
fs.readdirSync('./bot_b/events').forEach((fileName) => {
    const prop = require(`./events/${fileName}`);
    client.on(prop.event, prop.execute); 
});

client.login(process.env.TOKEN_A);