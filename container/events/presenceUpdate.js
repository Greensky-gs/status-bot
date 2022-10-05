const { Presence } = require('discord.js');
const message = require('../message');

module.exports = {
    event: 'presenceUpdate',
    /**
     * @param {Presence} before 
     * @param {Presence} after 
     */
    execute: (before, after) => {
        if (after.user.id !== process.env.bot) return console.log('no match');
        const channel = after.client.channels.cache.get(process.env.channel);

        if (after.status === 'offline' && before.status !== 'offline') {
            channel.send(message(after.user, 'offline')).catch(() => {});
        } else if (after.status === 'online' && before.status !== 'online') {
            channel.send(message(after.user, 'online')).catch(() => {});
        };
    }
}