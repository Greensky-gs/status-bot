import { Presence, TextChannel, User } from "discord.js";
import { Event } from "../structures/Event";
import message from '../message';

export default new Event('presenceUpdate', (b, a) => {
    const before = b as Presence;
    const after = a as Presence;

    if ((after.user as User).id !== process.env.bot) return;
        const channel = after.client.channels.cache.get(process.env.channel as string) as TextChannel;

        if (after.status === 'offline' && before.status !== 'offline') {
            channel.send(message(after.user, 'offline')).catch(() => {});
        } else if (after.status === 'online' && before.status !== 'online') {
            channel.send(message(after.user, 'online')).catch(() => {});
        };
})