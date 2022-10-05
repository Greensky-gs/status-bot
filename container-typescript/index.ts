import { Client, GatewayIntentBits, ClientEvents } from "discord.js";
import { readdirSync } from "fs";
import { Event } from "./structures/Event";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ]
});

readdirSync(`./container-typescript/events`).forEach((fileName) => {
    const file: Event<keyof ClientEvents> = require(`./events/${fileName}`).default;

    client.on(file.event, file.run);
})

client.login(process.env.TOKEN);