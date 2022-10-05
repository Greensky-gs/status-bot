const dotenv = require('dotenv');
const { Client, IntentsBitField } = require('discord.js');
const fs = require('fs');
dotenv.config();

const intents = new IntentsBitField()
    .add(IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.GuildPresences)

const client = new Client({
    intents: intents
});

/*
 * IMPORTANT
 * The file's path change depending of you're structure
 * If the container folder is directly the main folder, remove container in the path.
 * 
 * Check https://github.com/Greensky-gs/event-handler for more info
 */
fs.readdirSync('./container/events').forEach((fileName) => {
    const prop = require(`./events/${fileName}`);
    client.on(prop.event, prop.execute); 
});

client.login(process.env.TOKEN_A).catch((error) => {
    console.log(error);
}).then(() => {
    console.log(`Logged as ${client.user.tag}`)
})